"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/widgets/hero"), {
  loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

const Features = dynamic(() => import("@/widgets/features"), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-50" />,
});

const Steps = dynamic(() => import("@/widgets/steps"), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-50" />,
});

const CTA = dynamic(() => import("@/widgets/cta"), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-50" />,
});

const HomePage = () => {
  return (
    <main>
      <Suspense
        fallback={<div className="h-[600px] animate-pulse bg-gray-50" />}
      >
        <Hero />
      </Suspense>
      <Suspense
        fallback={<div className="h-[400px] animate-pulse bg-gray-50" />}
      >
        <Features />
      </Suspense>
      <Suspense
        fallback={<div className="h-[300px] animate-pulse bg-gray-50" />}
      >
        <Steps />
      </Suspense>
      <Suspense
        fallback={<div className="h-[300px] animate-pulse bg-gray-50" />}
      >
        <CTA />
      </Suspense>
    </main>
  );
};

export default HomePage;
