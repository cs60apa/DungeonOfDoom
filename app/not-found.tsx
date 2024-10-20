"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/programs");
  };

  const handleContact = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-8">
        <div className="w-full items-center flex flex-col mt-8 mb-4">
          <Image src="/assets/404.svg" width={300} height={300} alt="404" />
        </div>
        <div className="items-center ">
          <p className="text-4xl mt-4 text-white">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="text-2xl mt-2 text-white">
            You may have mistyped the address or the page may have moved.
          </p>
        </div>

        <section className="py-8 text-center">
          <div className="flex justify-center space-x-4 mb-16">
            <Button
              onClick={handleRedirect}
              variant="default"
              size="lg"
              className="rounded-full bg-white hover:bg-white text-black"
            >
              Go to Programs
            </Button>
            <Button
              onClick={handleContact}
              size="lg"
              className="rounded-full hover:rounded-full text-white bg-black hover:bg-[#1F2225]"
            >
              Contact Us
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
            <Image
              src="/lupleg.svg"
              height="200"
              width="600"
              alt="Lupleg"
              className="mx-auto"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.2))",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
