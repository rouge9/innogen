"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { transformationTypes } from "@/constant";
import { IImage } from "@/lib/database/models/images.model";
import { dataUrl, formUrlQuery } from "@/lib/utils";

import { Button } from "../ui/button";
import Search from "./Search";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

export default function Collection({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
}: {
  images: IImage[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // PAGINATION HANDLER
  const onPageChange = (action: string) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <div className="md:flex justify-between mb-6 flex flex-col gap-5 md:flex-row">
        <h2 className="text-lg font-semibold text-primary">Recent Edits</h2>
      </div>

      {images.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <Card image={image} key={image._id} />
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-60 w-full rounded-[10px] border border-dashed bg-muted">
          <p className="p-20-semibold">Empty List</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent className="flex w-full">
            <Button
              disabled={Number(page) <= 1}
              className="w-32 bg-cover text-primary"
              onClick={() => onPageChange("prev")}
            >
              <PaginationPrevious className="hover:bg-transparent hover:text-primary" />
            </Button>

            <p className="flex justify-center items-center p-16-medium w-fit flex-1">
              {page} / {totalPages}
            </p>

            <Button
              className="button w-32 bg-purple-gradient bg-cover text-primary"
              onClick={() => onPageChange("next")}
              disabled={Number(page) >= totalPages}
            >
              <PaginationNext className="hover:bg-transparent hover:text-white" />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}

const Card = ({ image }: { image: IImage }) => {
  const Icon =
    transformationTypes[image.transformationType as TransformationTypeKey].icon;
  return (
    <li>
      <Link
        href={`/dashboard/transformations/${image._id}`}
        className="flex flex-1 cursor-pointer flex-col gap-5 rounded-[16px] border-2  bg-muted p-4 shadow-xl  transition-all hover:shadow-2xl hover:border-primary"
      >
        <CldImage
          src={image.publicId}
          alt={image.title}
          width={image.width}
          height={image.height}
          {...image.config}
          loading="lazy"
          className="h-52 w-full rounded-[10px] object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          placeholder={dataUrl as PlaceholderValue}
        />
        <div className="flex justify-between">
          <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
            {image.title}
          </p>
          <Icon className="h-4 w-4" />
        </div>
      </Link>
    </li>
  );
};
