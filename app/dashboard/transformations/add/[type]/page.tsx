import { transformationTypes } from "@/constant";
import React from "react";

const AddTransformationType = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <div>
      <h1>{transformation.title}</h1>
      <p>{transformation.subTitle}</p>
    </div>
  );
};

export default AddTransformationType;
