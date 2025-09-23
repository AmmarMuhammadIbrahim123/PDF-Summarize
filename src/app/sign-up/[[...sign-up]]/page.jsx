import BgGradient from "@/components/ui/Common/BgGradient";
import {SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <BgGradient>
    <section className="flex justify-center items-center lg:min-h-[40vh]">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SignUp />
      </div>
    </section>
    </BgGradient>
   
  );
}
