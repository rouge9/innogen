import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { getUserById } from "@/lib/actions/user.actions";
import { getImageById } from "@/lib/actions/image.actions";
import { auth } from "@clerk/nextjs/server";
import { transformationTypes } from "@/constant";

const Page = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const image = await getImageById(id);

  const transformation =
    transformationTypes[image.transformationType as TransformationTypeKey];
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8">
      <h1 className="text-2xl text-primary font-semibold">
        {transformation.title}
      </h1>
      <p className="text-lg text-muted-foreground">{transformation.subTitle}</p>
      <TransformationForm
        action="Update"
        userId={user._id}
        type={image.transformationType as TransformationTypeKey}
        creditBalance={user.creditBalance}
        config={image.config}
        data={image}
      />
    </div>
  );
};

export default Page;
