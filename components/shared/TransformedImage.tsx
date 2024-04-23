import React from "react";

export default function TransformedImage() {
  return (
    <div className="flex-1 flex justify-center items-center rounded-lg border border-dashed shadow-lg bg-muted h-full min-h-72">
      <div className="flex flex-col justify-center items-center gap-4 p-8">
        <span className="text-lg text-primary">Transformed Image</span>
      </div>
    </div>
  );
}
