import BorgfyTechStack from "@/components/Home/BorgfyTechStack";
import BorgfyVenture from "@/components/Home/BorgfyVenture";
import Header from "@/components/Home/Header";
import HowWeWork from "@/components/Home/HowWeWork";
import OurVenturePillars from "@/components/Home/OurVenturePillars";
import Partners from "@/components/Home/Partners";
import Quote from "@/components/Home/Quote";
import SuccessStories from "@/components/Home/SuccessStories";
import WayBuildVentures from "@/components/Home/WayBuildVentures";
import WeBuilt from "@/components/Home/WeBuilt";

export default function Home() {
  return (
    <>
      <Header />
      <Partners />
      <HowWeWork />
      <Quote
        quote="Success isn’t about building what you love—it’s about building what people can’t live without."
        author="Founder’s Note"
        serial={1}
      />
      <OurVenturePillars />
      <BorgfyVenture />
      <WayBuildVentures />
      <Quote
        quote="In the middle of every difficulty lies opportunity."
        author="Albert Einstein"
        serial={2}
      />
      <WeBuilt />
      <BorgfyTechStack />
      <Quote
        quote="The way to get started is to quit talking and begin doing."
        author="Walt Disney"
        serial={3}
      />
      <SuccessStories />
    </>
  );
}
