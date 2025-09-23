import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center">
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge className="flex items-center gap-2 relative px-5 py-2 text-sm sm:text-base font-medium bg-white hover:bg-rose-200 border border-rose-300 rounded-full transition-colors duration-200">
              <Sparkles className="h-5 w-5 text-rose-700 animate-pulse" />
              <span className="text-rose-600">Powered by AI</span>
            </Badge>
          </div>
        </div>

        <div className="mt-8 max-w-5xl mx-auto">
          <h1 className=" text-xl  sm:text-4xl md:text-6xl  font-bold text-center leading-tight">
            Transform PDFs into concise summaries
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Get a beautiful summary reel of the document in seconds
          </p>

          <div className="mt-6">
            <Button variant={"link"} className="rounded-full text-white px-8 py-8 text-base sm:text-lg font-semibold shadow-md
             hover:shadow-lg transition-all duration-300 bg-linear-to-r from-slate-900 to-rose-500
              hover:from-rose-500 hover:to-slate-900 hover:no-underline">
            <Link href="/#price" className="flex gap-2 items-center" > Try Sommaire
            <ArrowRight className="animate-pulse"/>
            </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
