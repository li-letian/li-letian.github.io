import Header from 'contents/Header'
import Footer from 'contents/Footer'
import Main from 'contents/Main'
import { About } from 'contents/Profile/About'
import { Education } from 'contents/Profile/Education'
import { Experience } from 'contents/Profile/Experience'
import { Overview } from 'contents/Profile/Overview'

export default function Home() {
  return (
    <Main>
      <Overview />

      <div className="flex flex-auto flex-col items-start md:flex-row ">
        <div className="flex-auto">
          <Education />
        </div>
        <div className="flex-auto">
          <Experience />
        </div>
      </div>

      <About />
    </Main>
  )
}
