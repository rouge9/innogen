"use client";

import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { useToast } from "../ui/use-toast";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};

export default function MediaUploader({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));

    onValueChange(result?.info?.public_id);

    toast({
      title: "Image uploaded successfully",
      description: "1 credit was deducted from your account",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = (error: any) => {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="innogen"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <>
          {publicId ? (
            <>
              <div className="cursor-pointer overflow-hidden rounded-[10px]">
                <CldImage
                  width={getImageSize(type, image, "width")}
                  height={getImageSize(type, image, "height")}
                  src={publicId}
                  alt="image"
                  sizes={"(max-width: 767px) 100vw, 50vw"}
                  placeholder={dataUrl as PlaceholderValue}
                  className="h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-muted-foreground object-cover"
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex justify-center items-center rounded-lg border border-dashed shadow-lg bg-muted min-h-72">
              <div className="flex flex-col justify-center items-center gap-4">
                <Button
                  onClick={() => open()}
                  className="rounded-xl p-6 bg-primary text-accent hover:bg-muted-foreground hover:text-primary shadow-2xl"
                  variant="outline"
                >
                  <PlusIcon size={24} />
                </Button>
                <span className="text-lg text-primary">Upload Image</span>
              </div>
            </div>
          )}
        </>
      )}
    </CldUploadWidget>
  );
}
