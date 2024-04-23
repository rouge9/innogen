"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CustomField } from "./CustomeField";
import MediaUploader from "./MediaUploader";
import TransformedImage from "./TransformedImage";
import { aspectRatioOptions, transformationTypes } from "@/constant";
import { useState } from "react";
import { AspectRatioKey } from "@/lib/utils";

export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
});

export default function TransformationForm({ type, data }: any) {
  const transformationType = transformationTypes[type];
  const [image, setImage] = useState(data);
  const [newTransformation, setNewTransformation] =
    useState<Transformations | null>(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      aspectRatio: "",
      color: "",
      prompt: "",
      publicId: "",
    },
  });

  const onSelectFieldHandler = (
    value: string,
    onChangeField: (value: string) => void
  ) => {
    const imageSize = aspectRatioOptions[value as AspectRatioKey];
    setImage((prevState: any) => ({
      ...prevState,
      aspectRatio: imageSize.aspectRatio,
      width: imageSize.width,
      height: imageSize.height,
    }));
    setNewTransformation(transformationType.config);

    return onChangeField(value);
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <CustomField
              control={form.control}
              name="title"
              formLabel="Image Title"
              className="w-full"
              render={({ field }) => (
                <Input className="w-full h-14 rounded-lg" {...field} />
              )}
            />
          )}
        />

        {type === "fill" && (
          <CustomField
            control={form.control}
            name="aspectRatio"
            formLabel="Aspect Ratio"
            className="w-full"
            render={({ field }) => (
              <Select
                onValueChange={(value) =>
                  onSelectFieldHandler(value, field.onChange)
                }
                value={field.value}
              >
                <SelectTrigger className="w-full h-14 rounded-lg">
                  <SelectValue placeholder="Select aspect ratio" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(aspectRatioOptions).map((key) => (
                    <SelectItem key={key} value={key} className="select-item">
                      {aspectRatioOptions[key as AspectRatioKey].label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )}

        {(type === "remove" || type === "recolor") && (
          <div className="flex gap-4 flex-col md:flex-row">
            <CustomField
              control={form.control}
              name="prompt"
              formLabel={
                type === "remove" ? "Object to remove" : "Object to recolor"
              }
              className="w-full"
              render={({ field }) => (
                <Input className="w-full h-14 rounded-lg" {...field} />
              )}
            />

            {type === "recolor" && (
              <CustomField
                control={form.control}
                name="color"
                formLabel="Replacement Color"
                className="w-full"
                render={({ field }) => (
                  <Input className="w-full h-14 rounded-lg" {...field} />
                )}
              />
            )}
          </div>
        )}
        <div className="grid h-fit min-h-[200px] grid-cols-1 gap-5 py-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-primary">Original</h1>
            <CustomField
              control={form.control}
              name="publicId"
              render={({ field }) => <MediaUploader />}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-primary">Transformed</h1>
            <CustomField
              control={form.control}
              name="publicId"
              className=""
              render={({ field }) => <TransformedImage />}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            className="bg-cover rounded-full py-4 px-6 p-16-semibold h-[50px] w-full md:h-[54px] capitalize"
          >
            Apply Transformation
          </Button>
          <Button
            type="submit"
            className="bg-cover rounded-full py-4 px-6 p-16-semibold h-[50px] w-full md:h-[54px] capitalize"
          >
            Save Image
          </Button>
        </div>
      </form>
    </Form>
  );
}
