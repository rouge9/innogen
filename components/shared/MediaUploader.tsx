import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function MediaUploader() {
  return (
    <div className="flex-1 flex justify-center items-center rounded-lg border border-dashed shadow-lg bg-muted h-full min-h-72">
      <div className="flex flex-col justify-center items-center gap-4 p-8">
        <Button
          className="rounded-xl p-6 bg-primary text-accent hover:bg-muted-foreground hover:text-primary shadow-2xl"
          variant="outline"
        >
          <PlusIcon size={24} className="" />
        </Button>
        <span className="text-lg text-primary">Upload Image</span>
      </div>
    </div>
  );
}
