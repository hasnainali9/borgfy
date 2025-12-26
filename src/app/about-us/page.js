import AboutUs from "@/components/About/AboutUs"
import EvolutionJourney from "@/components/About/EvolutionJourney"
import Header from "@/components/About/Header"
import Mission from "@/components/About/Mission"
import Quote from "@/components/About/Quote"
import Vision from "@/components/About/Vision"
import WorkingModel from "@/components/About/WorkingModel"


const page = () => {
    return (
        <>
            <Header />
            <AboutUs />
            <Quote />
            <EvolutionJourney />
            <Vision />
            <Mission />
            <WorkingModel />
        </>
    )
}
export default page