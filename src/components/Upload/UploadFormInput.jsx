"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function UploadFormInput({ onSubmit }) {
    return (
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="flex  justify-end items-center gap-2 ">
        <Input 
        id="file"
        name="file"
        accept="application/pdf"
        required
        type="file"
        className="" />
        <Button>Upload your PDF</Button>
        </div>
      </form>
    );
  }
  