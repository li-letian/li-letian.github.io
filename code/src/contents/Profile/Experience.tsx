import { TimeLine } from 'components/TimeLine'

export const Experience = () => {
  return (
    <div className="flex w-full flex-col py-5">
      <h1 className="text-3xl font-bold">Experience</h1>

      <TimeLine>
        <TimeLine.Card>
          <TimeLine.Card.Label>2023 Jan. - 2024 Jul.</TimeLine.Card.Label>
          <TimeLine.Card.Content>
            <h2 className="text-lg font-bold">VT Intern in Research and Development</h2>
            <p className="text-lg">SAP</p>
          </TimeLine.Card.Content>
        </TimeLine.Card>
        <TimeLine.Card>
          <TimeLine.Card.Label>2022 Jun. - 2022 Dec.</TimeLine.Card.Label>
          <TimeLine.Card.Content>
            <h2 className="text-lg font-bold">iXp Intern in Quality Assurance</h2>
            <p className="text-lg">SAP</p>
          </TimeLine.Card.Content>
        </TimeLine.Card>
      </TimeLine>
    </div>
  )
}
