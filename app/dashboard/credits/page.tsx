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
