import Image from "next/image";
import PsCard from "./ps-card";
import FAQ from "@/components/features/faq";


export default function Programs() {
  return (
    <div>
      <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <Image
              src="/lupleg.svg"
              alt="Glowing potion bottle"
              className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              width={80}
              height={80}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Programs we offer
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto px-4">
              We offer a variety of programs to help you get started with your
              journey to becoming a tech wizard.
              
            </p>
          </div>

          <PsCard />
        </div>
      </div>
      <FAQ />
    </div>
  );
}
