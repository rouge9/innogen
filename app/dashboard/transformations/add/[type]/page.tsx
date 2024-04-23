import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constant";
import React from "react";

const AddTransformationType = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <div className="flex flex-col gap-4 p-4 md:p-8">
      <h1 className="text-2xl text-primary font-semibold">
        {transformation.title}
      </h1>
      <p className="text-lg text-muted-foreground">{transformation.subTitle}</p>
      <TransformationForm type={type} data={null} />
    </div>
  );
};

export default AddTransformationType;
