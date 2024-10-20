"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation";
import Image from "next/image";

const cards = [
  {
    image: "/assets/card.png?height=400&width=300",
    title: "2024",
    subtitle: "Discover the best places",
    gradient: "from-teal-400 to-teal-600",
  },
  {
    image: "/assets/card.png?height=400&width=300",
    title: "BeatsLive",
    subtitle: "Listen to new music with your closest friends.",
    gradient: "from-red-800 to-red-900",
  },
  {
    image: "/assets/card.png?height=400&width=300",
    title: "THE MAGE",
    subtitle: "And a voice was heard throughout the woods. Stay away, it said.",
    gradient: "from-purple-700 to-purple-900",
  },
  {
    image: "/assets/card.png?height=400&width=300",
    title: "Beautiful world",
    subtitle: "Discover the mythical sunken ship wreck.",
    gradient: "from-teal-600 to-teal-800",
  },
  {
    image: "/assets/card.png?height=400&width=300",
    title: "EXCITING TRAVELS",
    subtitle: "10 must visit places",
    gradient: "from-purple-500 to-purple-700",
  },
]

export default function ImprovedCardCreator() {
    const router = useRouter();
    const handleRedirect = () => {
      router.push("/creatives/image-editor");
    };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-6">
            Open for everyone and free to use like the illustrations,
            <br />
            thanks to our <a href="#" className="text-purple-600 hover:underline">supporters</a>!
          </h1>
          <Button  onClick={handleRedirect} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Create your own cards now
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <CardContent className="p-0 relative h-[400px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
            
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider">{card.title}</h3>
                  <p className="text-xl font-bold leading-tight">{card.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="bg-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p className="mb-2">
            Created by{" "}
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Mark Sikaundi - Lupleg
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Aggelos Gesoulis
            </a>
          </p>
          <p>
            Huge thanks to{" "}
            <a href="#" className="text-purple-600 hover:underline font-medium">
              Rasmus Andersson
            </a>{" "}
            for the Inter font.
          </p>
        </div>
      </footer>
    </div>
  )
}