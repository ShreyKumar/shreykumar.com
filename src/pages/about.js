import Navigation from "@/components/Navigation"
import Definition from "@/components/Definition"
import StaticLink from "@/components/StaticLink"

export default function About () {
  return (
    <div>
      <main>
        <Navigation />
        <Definition />
        <div className="w-50 mx-auto">
          <StaticLink href="/about" className="mx-auto">Who exactly am I?</StaticLink>
        </div>
      </main>
    </div>
  )
}