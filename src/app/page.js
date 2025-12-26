import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Header from "@/components/Home/Header";
import Partners from "@/components/Home/Partners";

// Dynamic imports for better code splitting
const HowWeWork = dynamic(() => import("@/components/Home/HowWeWork"), {
  loading: () => <div className="h-screen" />
});
const Quote = dynamic(() => import("@/components/Home/Quote"), {
  loading: () => <div className="h-32" />
});
const OurVenturePillars = dynamic(() => import("@/components/Home/OurVenturePillars"), {
  loading: () => <div className="h-screen" />
});
const BorgfyVenture = dynamic(() => import("@/components/Home/BorgfyVenture"), {
  loading: () => <div className="h-screen" />
});
const WayBuildVentures = dynamic(() => import("@/components/Home/WayBuildVentures"), {
  loading: () => <div className="h-screen" />
});
const WeBuilt = dynamic(() => import("@/components/Home/WeBuilt"), {
  loading: () => <div className="h-screen" />
});
const BorgfyTechStack = dynamic(() => import("@/components/Home/BorgfyTechStack"), {
  loading: () => <div className="h-screen" />
});
const SuccessStories = dynamic(() => import("@/components/Home/SuccessStories"), {
  loading: () => <div className="h-screen" />
});

export default function Home() {
  return (
    <>
      <Header />
      <Partners />
      <Suspense fallback={<div className="h-screen" />}>
        <HowWeWork />
      </Suspense>
      <Suspense fallback={<div className="h-32" />}>
        <Quote
          quote="Success isn't about building what you love—it's about building what people can't live without."
          author="Founder's Note"
          serial={1}
        />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <OurVenturePillars />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <BorgfyVenture />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <WayBuildVentures />
      </Suspense>
      <Suspense fallback={<div className="h-32" />}>
        <Quote
          quote="In the middle of every difficulty lies opportunity."
          author="Albert Einstein"
          serial={2}
        />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <WeBuilt />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <BorgfyTechStack />
      </Suspense>
      <Suspense fallback={<div className="h-32" />}>
        <Quote
          quote="The way to get started is to quit talking and begin doing."
          author="Walt Disney"
          serial={3}
        />
      </Suspense>
      <Suspense fallback={<div className="h-screen" />}>
        <SuccessStories />
      </Suspense>
    </>
  );
}
