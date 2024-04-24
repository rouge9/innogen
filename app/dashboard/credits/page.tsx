// "use client";

// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { CheckCircle2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";

// type PricingCardProps = {
//   isYearly?: boolean;
//   title: string;
//   monthlyPrice?: number;
//   yearlyPrice?: number;
//   description: string;
//   features: string[];
//   actionLabel: string;
//   popular?: boolean;
//   exclusive?: boolean;
// };

// const PricingHeader = ({
//   title,
//   subtitle,
// }: {
//   title: string;
//   subtitle: string;
// }) => (
//   <section className="text-center">
//     <h2 className="text-3xl font-bold">{title}</h2>
//     <p className="text-xl pt-1">{subtitle}</p>
//     <br />
//   </section>
// );

// const PricingCard = ({
//   isYearly,
//   title,
//   monthlyPrice,
//   yearlyPrice,
//   description,
//   features,
//   actionLabel,
//   popular,
//   exclusive,
// }: PricingCardProps) => (
//   <Card
//     className={cn(
//       `w-72 flex flex-col justify-between py-1 ${
//         popular ? "border-rose-400" : "border-zinc-700"
//       } mx-auto sm:mx-0`,
//       {
//         "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
//           exclusive,
//       }
//     )}
//   >
//     <div>
//       <CardHeader className="pb-8 pt-4">
//         {isYearly && yearlyPrice && monthlyPrice ? (
//           <div className="flex justify-between">
//             <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
//               {title}
//             </CardTitle>
//           </div>
//         ) : (
//           <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
//             {title}
//           </CardTitle>
//         )}
//         <div className="flex gap-0.5">
//           <h3 className="text-3xl font-bold">{"$" + monthlyPrice}</h3>
//           <span className="flex flex-col justify-end text-sm mb-1">
//             {yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}
//           </span>
//         </div>
//         <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
//       </CardHeader>
//       <CardContent className="flex flex-col gap-2">
//         {features.map((feature: string) => (
//           <CheckItem key={feature} text={feature} />
//         ))}
//       </CardContent>
//     </div>
//     <CardFooter className="mt-2">
//       <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//         <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
//         {actionLabel}
//       </Button>
//     </CardFooter>
//   </Card>
// );

// const CheckItem = ({ text }: { text: string }) => (
//   <div className="flex gap-2">
//     <CheckCircle2 size={18} className="my-auto text-green-400" />
//     <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
//   </div>
// );

// export default function Credits() {
//   const [isYearly, setIsYearly] = useState(false);

//   const plans = [
//     {
//       title: "Free",
//       monthlyPrice: 0,
//       yearlyPrice: 0,
//       description: "20 Credits",
//       features: [
//         "20 Free Credits",
//         "Basic Access to Services",
//         "Priority Customer Support",
//         "Priority Updates",
//       ],
//       actionLabel: "Get Started",
//     },
//     {
//       title: "Pro",
//       monthlyPrice: 40,
//       yearlyPrice: 40,
//       description: "120 Credits",
//       features: [
//         "20 Free Credits",
//         "Basic Access to Services",
//         "Priority Customer Support",
//         "Priority Updates",
//       ],
//       actionLabel: "Buy Credits",
//       popular: true,
//     },
//     {
//       title: "Premuim",
//       monthlyPrice: 199,
//       description: "2000 credits",
//       features: [
//         "20 Free Credits",
//         "Basic Access to Services",
//         "Priority Customer Support",
//         "Priority Updates",
//       ],
//       actionLabel: "Buy Credits",
//       exclusive: true,
//     },
//   ];
//   return (
//     <div className="py-8">
//       <PricingHeader
//         title="Pricing Plans"
//         subtitle="Choose the plan that's right for you"
//       />
//       {/* <PricingSwitch onSwitch={togglePricingPeriod} /> */}
//       <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
//         {plans.map((plan) => {
//           return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />;
//         })}
//       </section>
//     </div>
//   );
// }

import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { plans } from "@/constant";
import Checkout from "@/components/shared/Checkout";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <section className="p-16">
        <h1 className="text-5xl font-bold text-primary text-center">
          Buy Credits
        </h1>
        <p className="text-muted-foreground text-center mt-5">
          Choose a plan that suits your needs
        </p>
        <ul className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-9 xl:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className=" w-full rounded-[16px] border-2 bg-secondary p-8 shadow-xl lg:max-w-none"
            >
              <div className="flex justify-center items-center flex-col gap-3">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="text-3xl font-semibold mt-2 text-primary">
                  {plan.name}
                </p>
                <p className="text-5xl font-semibold text-primary">
                  ${plan.price}
                </p>
                <p className="text-muted-foreground font-normal">
                  {plan.credits} Credits
                </p>
              </div>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="text-muted-foreground font-normal">
                      {inclusion.label}
                    </p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Button
                  variant="outline"
                  className="w-full rounded-full bg-primary-foreground text-primary font-semibold hover:bg-muted-foreground"
                >
                  Free Consumable
                </Button>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                  />
                </SignedIn>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;
