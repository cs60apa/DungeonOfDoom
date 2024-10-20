import Link from 'next/link'
import { Twitter, Github, Linkedin, MessageCircle } from 'lucide-react'

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  address?: string;
  socialLinks?: {
    twitter: string;
    github: string;
    linkedin: string;
    discord: string;
  };
  columns?: FooterColumn[];
}

const defaultAddress = "2261 Market Street #5039\nSan Francisco, CA 94114";
const defaultSocialLinks = {
  twitter: "#",
  github: "#",
  linkedin: "#",
  discord: "#",
};
const defaultColumns: FooterColumn[] = [
  {
    title: "Documentation",
    links: [
      { text: "Getting Started", href: "#" },
      { text: "API Reference", href: "#" },
      { text: "Integrations", href: "#" },
      { text: "Examples", href: "#" },
      { text: "SDKs", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Changelog", href: "#" },
      { text: "Pricing", href: "#" },
      { text: "Security", href: "#" },
      { text: "SOC 2", href: "#" },
      { text: "GDPR", href: "#" },
      { text: "Status", href: "#" },
      { text: "Brand", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Contact", href: "/contact" },
      { text: "Customers", href: "#" },
      { text: "Philosophy", href: "#" },
    ],
  },
  {
    title: "Handbook",
    links: [
      { text: "Why we exist", href: "#" },
      { text: "How we work", href: "#" },
      { text: "Engineering", href: "#" },
      { text: "Design", href: "#" },
      { text: "Support", href: "#" },
      { text: "Marketing", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Acceptable Use", href: "#" },
      { text: "Cookie Policy", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "Subprocessors", href: "#" },
      { text: "DPA", href: "#" },
    ],
  },
];

export default function Footer({ address = defaultAddress, socialLinks = defaultSocialLinks, columns = defaultColumns }: FooterProps) {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Address and Social Icons */}
          <div className="lg:col-span-1">
            <p className="text-sm mb-4">{address}</p>
            <div className="flex space-x-4">
              <Link href={socialLinks.twitter} className="text-white hover:text-gray-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href={socialLinks.github} className="text-white hover:text-gray-300">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={socialLinks.linkedin} className="text-white hover:text-gray-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={socialLinks.discord} className="text-white hover:text-gray-300">
                <MessageCircle size={20} />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                All systems operational
              </span>
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-sm font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}