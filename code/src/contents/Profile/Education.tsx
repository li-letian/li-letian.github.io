import { TimeLine } from 'components/TimeLine'

export const Education = () => {
  return (
    <div className="flex w-full flex-col py-5">
      <h1 className="text-3xl font-bold">Education</h1>

      <TimeLine>
        <TimeLine.Card>
          <TimeLine.Card.Label>2024 Sept. - 2027 Jul.</TimeLine.Card.Label>
          <TimeLine.Card.Content>
            <h2 className="text-lg font-bold">Master of Science in Data Science and Information Technology</h2>
            <p className="text-lg">Tsinghua University</p>
          </TimeLine.Card.Content>
        </TimeLine.Card>
        <TimeLine.Card>
          <TimeLine.Card.Label>2020 Sept. - 2024 Jul.</TimeLine.Card.Label>
          <TimeLine.Card.Content>
            <h2 className="text-lg font-bold">Bachelor of Engineering in Software Engineering</h2>
            <p className="text-lg">Tongji University</p>
          </TimeLine.Card.Content>
        </TimeLine.Card>
      </TimeLine>
    </div>
  )
}
