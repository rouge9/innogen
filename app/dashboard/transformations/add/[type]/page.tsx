import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/app/(const)";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AddTransformationType = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const { userId } = auth();
  // console.log("userId", userId);

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8">
      <h1 className="text-2xl text-primary font-semibold">
        {transformation.title}
      </h1>
      <p className="text-lg text-muted-foreground">{transformation.subTitle}</p>
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </div>
  );
};

export default AddTransformationType;
