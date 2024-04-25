// import { Switch } from "@/components/ui/switch";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";

function Pricing() {
  return (
    <div
      id="pricing"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Pricing
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Whatever your status, our offers evolve according to your needs.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
          <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
            Free
          </h4>
          <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
            Free
          </span>
          <p className="mt-2 text-sm text-gray-500">20 credits</p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                20 credits
              </span>
            </li>

            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Basic Access to Services
              </span>
            </li>

            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5 size-4 text-red-600 dark:text-red-500"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Priority Customer Support
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5 size-4 text-red-600 dark:text-red-500"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Priority Updates
              </span>
            </li>
          </ul>

          <SignedIn>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
              href="/dashboard/"
            >
              Get Started
            </a>
          </SignedIn>
          <SignedOut>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
              href="/dashboard"
            >
              Sign up
            </a>
          </SignedOut>
        </div>

        <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
          <p className="mb-3">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
              Most popular
            </span>
          </p>
          <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
            Pro Package
          </h4>
          <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
            <span className="font-bold text-2xl -me-2">$</span>
            40
          </span>
          <p className="mt-2 text-sm text-gray-500">120 credits</p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                120 credits
              </span>
            </li>

            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Full Access to Services
              </span>
            </li>

            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Priority Customer Support
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5 size-4 text-red-600 dark:text-red-500"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Priority Updates
              </span>
            </li>
          </ul>

          <SignedIn>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="/dashboard/credits"
            >
              Buy Creidts
            </a>
          </SignedIn>
          <SignedOut>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="/dashboard/credits"
            >
              Sign up
            </a>
          </SignedOut>
        </div>

        <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
          <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
            Premium Package
          </h4>
          <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
            <span className="font-bold text-2xl -me-2">$</span>
            199
          </span>
          <p className="mt-2 text-sm text-gray-500">2000 credits</p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                2000 credits
              </span>
            </li>

            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Basic Access to Services
              </span>
            </li>

            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Priority Customer Support
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400">
                Priority Updates
              </span>
            </li>
          </ul>
          <SignedIn>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
              href="/dashboard/credits"
            >
              Buy Creidts
            </a>
          </SignedIn>
          <SignedOut>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
              href="/dashboard/credits"
            >
              Sign up
            </a>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
