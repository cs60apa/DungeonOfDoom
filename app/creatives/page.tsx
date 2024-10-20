import { ArrowUpRight, MoreHorizontal } from "lucide-react"

export default function Component() {
  return (
    <div className="container mx-auto my-10 px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold"></h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Illustrations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Handcrafts
              </a>
            </li>
            <li>
              <button className="text-gray-600 hover:text-gray-900">
                <MoreHorizontal className="h-6 w-6" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2 className="text-xl font-semibold text-purple-600 mb-2">/creative-tools</h2>
        <p className="text-gray-600 mb-8">
          Discover tools and integrations we have created to enhance your products, projects and workflow.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ToolCard
            icon={<div className="bg-purple-700 text-white p-2 rounded">Xd</div>}
            title="unDraw for Adobe XD"
            description="With more than 300k downloads, our first integration brings every unDraw illustration directly inside the popular design tool."
            link="#"
          />
          <ToolCard
            icon={<div className="text-4xl">😊</div>}
            title="Moodful"
            description="Intelligent moodboards for designers directly inside your favorite design tools. Bring together the visual inspiration you gather and need."
            link="#"
          />
          <ToolCard
            icon={<div className="bg-yellow-400 p-2 rounded">
              <div className="bg-black h-4 w-4"></div>
            </div>}
            title="Symbols for Miro"
            description="A special edition that can improve the way you create presentations, provide visual feedback or mark needed actions in an effective way."
            link="#"
          />
          <ToolCard
            icon={<div className="bg-gradient-to-br from-pink-500 to-orange-400 text-white p-2 rounded">Cc</div>}
            title="unDraw X for Adobe Creative Cloud"
            description="More creative options for everyone. Directly inside your creative workflow. Just sync to your Adobe Creative Cloud libraries."
            badge="LIVE BETA"
            link="#"
          />
        </div>
      </main>
    </div>
  )
}

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  link: string;
}

function ToolCard({ icon, title, description, badge, link }: ToolCardProps) {
  return (
    <div className="border rounded-lg p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="text-3xl">{icon}</div>
        <a href={link} className="text-teal-500 hover:text-teal-600 transition-colors">
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      {badge && (
        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mt-2">
          {badge}
        </span>
      )}
      <a
        href={link}
        className="mt-4 text-teal-500 hover:text-teal-600 transition-colors inline-flex items-center"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4 ml-1" />
      </a>
    </div>
  )
}