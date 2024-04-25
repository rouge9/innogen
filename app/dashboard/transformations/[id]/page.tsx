import Image from "next/image";
import Link from "next/link";

import Header from "@/components/shared/Header";
import TransformedImage from "@/components/shared/TransformedImage";
import { Button } from "@/components/ui/button";
import { getImageById } from "@/lib/actions/image.actions";
import { dataUrl, getImageSize } from "@/lib/utils";

import { auth } from "@clerk/nextjs/server";
import DeleteConfirmation from "@/components/shared/DeleteConfirmation";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  const image = await getImageById(id);

  return (
    <>
      <div className="p-8">
        <section className="mt-5 flex flex-wrap gap-4">
          <div className="p-14-medium md:p-16-medium flex gap-2">
            <p className="text-primary">Transformation:</p>
            <p className=" capitalize text-muted-foreground">
              {image.transformationType}
            </p>
          </div>

          {image.prompt && (
            <>
              <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
              <div className="p-14-medium md:p-16-medium flex gap-2 ">
                <p className="text-primary">Prompt:</p>
                <p className=" capitalize text-muted-foreground">
                  {image.prompt}
                </p>
              </div>
            </>
          )}

          {image.color && (
            <>
              <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
              <div className="p-14-medium md:p-16-medium flex gap-2">
                <p className="text-primary">Color:</p>
                <p className=" capitalize text-muted-foreground">
                  {image.color}
                </p>
              </div>
            </>
          )}

          {image.aspectRatio && (
            <>
              <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
              <div className="p-14-medium md:p-16-medium flex gap-2">
                <p className="text-primary">Aspect Ratio:</p>
                <p className=" capitalize text-muted-foreground">
                  {image.aspectRatio}
                </p>
              </div>
            </>
          )}
        </section>

        <section className="mt-10 border-t border-dark-400/15">
          <div className="grid h-fit min-h-[200px] grid-cols-1 gap-5 py-8 md:grid-cols-2">
            {/* MEDIA UPLOADER */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-primary pb-3">
                Original
              </h3>

              <Image
                width={getImageSize(image.transformationType, image, "width")}
                height={getImageSize(image.transformationType, image, "height")}
                src={image.secureURL}
                alt="image"
                className="h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-purple-100/20 object-cover p-2"
                placeholder={dataUrl as PlaceholderValue}
              />
            </div>
            {/* TRANSFORMED IMAGE */}
            <TransformedImage
              image={image}
              type={image.transformationType}
              title={image.title}
              isTransforming={false}
              transformationConfig={image.config}
              hasDownload={true}
            />
          </div>

          {userId === image.author.clerkId && (
            <div className="mt-4 space-y-4">
              <Button
                asChild
                type="button"
                className="bg-cover rounded-full py-4 px-6 p-16-semibold h-[50px] w-full md:h-[54px] capitalize"
              >
                <Link href={`/dashboard/transformations/${image._id}/update`}>
                  Update Image
                </Link>
              </Button>

              <DeleteConfirmation imageId={image._id} />
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default ImageDetails;
