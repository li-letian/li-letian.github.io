import { TagCloud } from 'components/TagCloud'

export const About = () => {
  return (
    <div className="flex flex-auto flex-col">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="flex flex-row">
        <TagCloud>
          <TagCloud.Tag>C++</TagCloud.Tag>
          <TagCloud.Tag>Java</TagCloud.Tag>
          <TagCloud.Tag>JS/TS/HTML/CSS</TagCloud.Tag>
          <TagCloud.Tag>React</TagCloud.Tag>
          <TagCloud.Tag>Next.js</TagCloud.Tag>
          <TagCloud.Tag>Node.js</TagCloud.Tag>
          <TagCloud.Tag>Python</TagCloud.Tag>
          <TagCloud.Tag>Torch</TagCloud.Tag>
          <TagCloud.Tag>SQL</TagCloud.Tag>
          <TagCloud.Tag>Git/GitHub</TagCloud.Tag>
          <TagCloud.Tag>Linux</TagCloud.Tag>
          <TagCloud.Tag>iOS/Swift</TagCloud.Tag>
          <TagCloud.Tag>DevOps/CI/CD</TagCloud.Tag>
          <TagCloud.Tag>Scrum</TagCloud.Tag>
        </TagCloud>
      </div>
    </div>
  )
}
