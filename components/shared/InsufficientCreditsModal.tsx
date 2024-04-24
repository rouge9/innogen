"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { XIcon } from "lucide-react";

export const InsufficientCreditsModal = () => {
  const router = useRouter();

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-between">
            <p className="text-primary">Insufficient Credits</p>
            <AlertDialogCancel
              className="border-0 p-0 hover:bg-transparent"
              onClick={() => router.push("/dashboard/profile")}
            >
              <XIcon className="h-5 w-5 text-primary" />
            </AlertDialogCancel>
          </div>

          <Image
            src="/assets/img/stacked-coins.png"
            alt="credit coins"
            width={462}
            height={122}
          />

          <AlertDialogTitle className="text-primary font-semibold">
            Oops.... Looks like you&#39;ve run out of free credits!
          </AlertDialogTitle>

          <AlertDialogDescription className="py-3">
            No worries, though - you can keep enjoying our services by grabbing
            more credits.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="w-full bg-primary-foreground text-primary"
            onClick={() => router.push("/dashboard/profile")}
          >
            No, Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="w-full bg-primary bg-cover"
            onClick={() => router.push("/credits")}
          >
            Yes, Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
