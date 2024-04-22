import {
  Home,
  Image,
  Sparkles,
  ScanLine,
  PaintBucket,
  CameraOff,
  ShoppingBag,
  SquareUserRound,
} from "lucide-react";

export const links = [
  { name: "Home", href: "/dashboard", icon: Home },
  {
    name: "Image Restore",
    href: "/dashboard/transformations/add/restore",
    icon: Image,
  },
  {
    name: "Generative Fill",
    href: "/dashboard/transformations/add/fill",
    icon: Sparkles,
  },
  {
    name: "Object Removal",
    href: "/dashboard/transformations/add/remove",
    icon: ScanLine,
  },
  {
    name: "Object Recolor",
    href: "/dashboard/transformations/add/recolor",
    icon: PaintBucket,
  },
  {
    name: "Background Removal",
    href: "/dashboard/transformations/add/removeBackground",
    icon: CameraOff,
  },
  { name: "Profile", href: "/dashboard/profile", icon: SquareUserRound },
  { name: "Buy Credit", href: "/dashboard/credits", icon: ShoppingBag },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: Image,
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: CameraOff,
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: Sparkles,
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: ScanLine,
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: PaintBucket,
  },
};
