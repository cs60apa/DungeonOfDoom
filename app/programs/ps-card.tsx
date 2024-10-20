import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function PsCard() {
  return (
    <div className="min-h-screen  text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <Card className="bg-[#18181B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <Image
                src="/ps/dev.svg"
                alt="Software Engineering at Lupleg"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Web Technologies Pro
                  </h2>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  2 Months Program
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Total Web Technologies Pro is the ultimate guide to becoming a
                  web technologies wizard. Learn how to build web applications
                  in a professional way.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/">
                    <Button variant="secondary" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#18181B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <Image
                src="/ts.webp"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    TypeScript for Beginners
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    Coming soon
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  3 Months Program
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn TypeScript from scratch and build your first project in
                  3 months. The program is designed for beginners who want to
                  learn TypeScript.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/#typescript">
                    <Button variant="secondary" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#18181B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <Image
                src="/ps/re.svg"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Python for Machine Learning
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    Coming soon
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  3 Months Program
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Learn Python for Machine Learning from scratch and build your
                  first project in 3 months. The program is designed for
                  beginners who want to learn Python for Machine Learning.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/#python-pro">
                    <Button variant="secondary" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#18181B] my-8 border-gray-700">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <Image
                src="/ps/setup.svg"
                alt="TypeScript logo with glowing effect"
                className="mb-4 sm:mb-0 sm:mr-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                width={120}
                height={120}
              />
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                  <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-0 sm:mr-3 text-center sm:text-left">
                    Backend Pro Essentials
                  </h2>
                  <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-green-400 text-sm mb-3 text-center sm:text-left">
                  4 Months Program
                </p>
                <p className="text-sm text-gray-300 mb-4 text-center sm:text-left">
                  Total Backend Pro Essentials is the ultimate guide to becoming
                  a backend developer. Learn how to build backend applications
                  in a professional way.
                </p>
                <div className="flex justify-center sm:justify-start">
                  <Link href="/programs/">
                    <Button variant="secondary" size="sm">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
