
import React from "react";
import { FileText } from "lucide-react";
import NavLink from "./NavLink";
 import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="container flex justify-between items-center py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText
            className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 
                        ease-in-out"
          />
          <span className="text-gray-900 font-extrabold lg:text-xl">
            Sommaire
          </span>
        </NavLink>
      </div>

      <div className="flex lg:items-center gap-6 lg:justify-center lg:gap-12 ">
        <NavLink href="#/pricing">Pricing</NavLink>
      <SignedIn><NavLink href="/dashboard">Your Summaries</NavLink></SignedIn>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
           <SignedIn> 
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div>Pro</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          </SignedIn>
       
            <SignedOut>
            <NavLink href="/sign-in">Sign In</NavLink>
            </SignedOut>
        
      </div>
    </nav>
  );
};

export default Header;
