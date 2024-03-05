import { NavigationLink } from 'components/Links'
import { ThemeToggleList } from 'components/Theme'

export const HomeNavigation = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="mx-1 flex-auto  text-xl font-medium md:mx-5 ">
        <NavigationLink href="/">Home</NavigationLink>
      </div>

      <div className="mx-1 flex-auto text-xl font-medium md:mx-5 ">
        <NavigationLink href="/resume">Resume</NavigationLink>
      </div>

      {/* <div className="mx-1 flex-auto md:mx-5">
        <NavigationLink href="/research">Research</NavigationLink>
      </div>

      <div className="mx-1 flex-auto md:mx-5">
        <NavigationLink href="/development">Development</NavigationLink>
      </div> */}

      <div className="mx-1 flex-auto  text-xl font-medium md:mx-5 ">
        <NavigationLink href="/blog">Blog</NavigationLink>
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <header
      className="mb-4 flex h-24 w-full items-center justify-between border-b-2 border-solid border-gray-200"
      id="header"
    >
      <div className="flex-initial">
        <ThemeToggleList />
      </div>

      <div className="flex-initial">
        <HomeNavigation />
      </div>

      <div className="flex-initial"></div>
    </header>
  )
}
