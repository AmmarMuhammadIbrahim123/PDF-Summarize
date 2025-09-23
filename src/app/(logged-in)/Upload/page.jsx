import UploadHeader from "@/components/Upload/Upload-Header";
import UploadForm from "@/components/Upload/UploadForm";
import BgGradient from "@/components/ui/Common/BgGradient";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function Upload() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader />
          <UploadForm />
        </div>
      </div>
    </section>
  );
}
