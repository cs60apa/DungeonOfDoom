import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Zap, RefreshCw, Users } from "lucide-react";
import Image from "next/image";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-20">
          Building the modern
          <br />
          email sending platform
        </h1>
        <p className="max-w-2xl text-lg mb-8 text-zinc-400">
          The web has come a long way in the last ten years, but why is email
          stuck in the past? It doesn&apos;t have to be that way. We want to
          change that. We want to reimagine email.
        </p>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
          <FeatureCard
            icon={<Mail className="w-6 h-6" />}
            title="Modern Infrastructure"
            description="Built on cutting-edge technology to ensure speed, reliability, and scalability."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Powerful API"
            description="Flexible and developer-friendly API to seamlessly integrate email functionality."
          />
          <FeatureCard
            icon={<RefreshCw className="w-6 h-6" />}
            title="Continuous Innovation"
            description="Constantly evolving to meet the changing needs of modern communication."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Remote-First Culture"
            description="Our globally distributed team brings diverse perspectives to solve complex challenges."
          />
        </div>
        <Button className="mt-12" size="lg">
          Join the revolution <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </main>
      <section className="py-16 px-6 bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our story
          </h2>
          <div className="space-y-6 text-zinc-300">
            <p>
              Lupleg started with an open source project in 2022. We were
              frustrated by how difficult it was to build modern email templates
              that worked well across all email clients.
            </p>
            <p>
              As we started to dig deeper, it became clear that this was just
              the tip of the iceberg. We realized that sending emails that reach
              the inbox (not the spam folder) was the biggest pain point, so we
              started to explore something new.
            </p>
            <p>
              In 2023, we launched an entire email sending platform and joined Y
              Combinator&apos;s winter batch. We&apos;re creating something
              special here, and we&apos;re excited to build it with you.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The team behind it
          </h2>
          <p className="text-zinc-300 mb-8 px-16">
            A fully online learning platform that offers interactive courses
            with hands-on projects and certificates.
          </p>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/marksikaundi.jpg"
              width={600}
              height={400}
              alt="The Man behind Lupleg - Mark Sikaundi"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We&apos;re hiring
          </h2>
          <p className="text-zinc-300 mb-8">
            We&apos;re creating something special here, and we&apos;re looking
            for people who care deeply about quality to build it with us.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full bg-white hover:bg-white text-black"
          >
            See open positions <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">From our blog</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <BlogCard
              image="/placeholder.svg?height=200&width=300"
              title="Lupleg raises $3M"
              date="Jul 18, 2023"
            />
            <BlogCard
              image="/placeholder.svg?height=200&width=300"
              title="Lupleg + Y Combinator"
              date="Feb 1, 2023"
            />
            <BlogCard
              image="/placeholder.svg?height=200&width=300"
              title="Introducing Lupleg"
              date="Jan 4, 2023"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl">
      <div className="bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

function BlogCard({ image, title, date }: BlogCardProps) {
  return (
    <Card className="bg-zinc-900 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-40 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm">{date}</p>
      </CardContent>
    </Card>
  );
}
