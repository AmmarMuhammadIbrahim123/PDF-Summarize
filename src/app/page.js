import DemoSection from "@/components/Home/DemoSection";
import GetSection from "@/components/Home/GetSection";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowItWorks";
import PricingSection from "@/components/Home/Pricing";
import BgGradient from "@/components/ui/Common/BgGradient";
import Image from "next/image";
import Upload from "./(logged-in)/Upload/page";
import UploadForm from "@/components/Upload/UploadForm";

export default function Home() {
  return (
    
   <div className="relative w-full">
     <BgGradient/>
      <div className="flex flex-col">
        <HeroSection/>
         <DemoSection/> 
        <HowItWorksSection/>
        <PricingSection/>
        <GetSection/>
        <Upload/>
        
      </div>
    </div>
  
  );
}
