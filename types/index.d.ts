declare type TransformationTypeKey =
  | "restore"
  | "fill"
  | "remove"
  | "recolor"
  | "removeBackground";

declare type SearchParamProps = {
  params: { id: string; type: TransformationTypeKey };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Transformations = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
  removeBackground?: boolean;
};

declare type TransformationFormProps = {
  action: "Add" | "Update";
  userId: string;
  type: TransformationTypeKey;
  creditBalance: number;
  data?: IImage | null;
  config?: Transformations | null;
};
