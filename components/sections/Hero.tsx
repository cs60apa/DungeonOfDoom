import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full pt-20 pb-16 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <Button className="rainbow border mb-10 inline-flex items-center justify-center text-[14px] rounded-full bg-black hover:bg-black">
            New Web Editor in Beta <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Email for</span>{" "}
            <span className="block xl:inline">developers</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
            The best way to reach humans instead of spam folders. Deliver
            transactional and marketing emails at scale.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Button
                variant="default"
                size="lg"
                className="rounded-full bg-white hover:bg-white text-black"
              >
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
                size="lg"
                className="rounded-full hover:rounded-full text-white bg-black hover:bg-[#1F2225]"
              >
                Documentation <ChevronRight className="ml-2 h-5 w-5 " />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        {/* <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/lupleg.mp4"
          alt="3D Cube"
          width={800}
          height={600}
        /> */}

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/lupleg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="max-w-7xl mx-auto w-full pb-8 text-center text-sm text-gray-400">
        Backed by{" "}
        <span className="inline-block bg-gray-700 rounded px-1">D</span>{" "}
        evCircle Africa
      </div>
    </div>
  );
}
