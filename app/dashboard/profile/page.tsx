import Image from "next/image";
import { redirect } from "next/navigation";

import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";
import Collection from "@/components/shared/Collection";
import { auth } from "@clerk/nextjs/server";
import { BadgeCent, ImagesIcon } from "lucide-react";

const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id });

  return (
    <>
      <h1 className="text-5xl font-bold text-primary text-center mt-8">
        Profile
      </h1>
      <section className="mt-5 flex flex-col gap-5 sm:flex-row md:mt-8 md:gap-10 p-4">
        <div className="w-full rounded-[16px] border-2 border-primary bg-muted p-5 shadow-lg md:px-6 md:py-8">
          <p className="text-lg text-muted-foreground md:text-md">
            CREDITS AVAILABLE
          </p>
          <div className="mt-4 flex items-center gap-4">
            <BadgeCent size={50} className="size-9 md:size-12" />
            <h2 className="text-4xl font-semibold text-primary">
              {user.creditBalance}
            </h2>
          </div>
        </div>

        <div className="w-full rounded-[16px] border-2 border-primary bg-muted p-5 shadow-lg md:px-6 md:py-8">
          <p className="text-lg text-muted-foreground md:text-md">
            IMAGE MANIPULATION DONE
          </p>
          <div className="mt-4 flex items-center gap-4">
            <ImagesIcon size={50} className="size-9 md:size-12" />
            <h2 className="text-4xl font-semibold text-primary">
              {images?.data.length}
            </h2>
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-14 px-4">
        <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default Profile;
