import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 flex flex-col md:flex-row gap-12">
      <div className="flex-1 mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Get in touch</h1>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              className="bg-[#111214] border-[#373B40] text-white placeholder-[#373B40]"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              How can we help?
            </label>
            <Textarea
              id="message"
              placeholder="I'd like to know how Lupleg can help me with..."
              className="bg-[#111214] border-[#373B40] text-white placeholder-[#373B40] min-h-[120px]"
              required
            />
          </div>
          <Button type="submit" className="bg-white rounded-full text-black hover:bg-gray-200">
            Submit
            <span className="ml-2">→</span>
          </Button>
        </form>
      </div>
      <div className="space-y-8 md:w-64 mt-10">
        <div className="mt-20">
          <h2 className="text-sm font-medium text-gray-400 mb-2">Get help</h2>
          <a href="mailto:support@lupleg.org" className="text-white hover:underline">
            support@lupleg.org
          </a>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-2">Work at Resend</h2>
          <a href="mailto:careers@lupleg.org" className="text-white hover:underline">
            careers@lupleg.org
          </a>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-400 mb-2">Report security concerns</h2>
          <a href="mailto:security@lupleg.org" className="text-white hover:underline">
            security@lupleg.org
          </a>
        </div>
      </div>
    </div>
  )
}