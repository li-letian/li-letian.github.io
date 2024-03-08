import { Typing } from 'components/Typing'

import { EnvelopeIcon } from '@heroicons/react/24/outline'

const GithubIcon = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 20 20" className={className}>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="currentColor" transform="translate(-140 -7559)">
          <g transform="translate(56 160)">
            <path d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.396 9.396 0 00-2.505-.345 9.375 9.375 0 00-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

const LinkedInIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M22 3.47v17.06A1.47 1.47 0 0120.53 22H3.47A1.47 1.47 0 012 20.53V3.47A1.47 1.47 0 013.47 2h17.06A1.47 1.47 0 0122 3.47zM7.882 9.648h-2.94v9.412h2.94V9.647zm.265-3.235a1.694 1.694 0 00-1.682-1.706h-.053a1.706 1.706 0 000 3.412 1.694 1.694 0 001.735-1.653v-.053zm10.912 6.93c0-2.83-1.8-3.93-3.588-3.93a3.353 3.353 0 00-2.977 1.517h-.082V9.647H9.647v9.412h2.941v-5.006a1.953 1.953 0 011.765-2.106h.112c.935 0 1.63.588 1.63 2.07v5.042h2.94l.024-5.718z"
      ></path>
    </svg>
  )
}

const TypingRow = () => {
  return (
    <div className="flex flex-row items-center">
      <p className="shrink  text-white">&lt;Code&gt;</p>

      <div className="w-fix shrink">
        <Typing className=" text-white">Full stack developer</Typing>
      </div>

      <p className="shrink  text-white">&lt;Code&gt;</p>

      <div className="grow" />
    </div>
  )
}

const NameRow = () => {
  return (
    <div className="mt-5 flex flex-row items-center">
      <p className="mx-2 shrink text-3xl font-bold text-white">Letian(Elliot) Li</p>

      <div className="w-fix mx-2 shrink">
        <a href="https://github.com/li-letian">
          <GithubIcon className="h-6 w-6 text-white" />
        </a>
      </div>

      <div className="w-fix mx-2 shrink">
        <a href="https://www.linkedin.com/in/letian-li-5044b723a/">
          <LinkedInIcon className="h-6 w-6 text-white" />
        </a>
      </div>

      <div className="w-fix mx-2 shrink">
        <a href="mailto:korzjac@gmail.com">
          <EnvelopeIcon className="h-6 w-6 text-white" />
        </a>
      </div>

      <div className="grow" />
    </div>
  )
}

const SummaryRow = () => {
  return (
    <div className="flex flex-row items-center py-5">
      <article className="prose text-white dark:prose-invert md:prose-lg lg:prose-xl">
        <p>
          I am a full stack developer with a passion for creating beautiful, functional, and intuitive Apps. I also have
          interests in Software Architecture, Cloud Computing, and Machine Learning. I am currently learning about
          Multimodal models and LLM related technologies.
        </p>

        <p>I am currently seeking for opportunities.</p>

        <p>Please contact me.</p>
      </article>
    </div>
  )
}

const ButtonsRow = () => {
  return (
    <div className="flex flex-row items-center">
      {/* <button className="rounded-lg border-2 border-black bg-blue-800 px-4 py-2 font-bold text-white">Resume</button>
      <div className="w-2" />
      <button className="rounded-lg border-2 border-black bg-green-800 px-4 py-2 font-bold text-white">Contact</button> */}
    </div>
  )
}

export const Overview = () => {
  return (
    <div className="flex w-full flex-auto flex-col content-stretch md:flex-row">
      <div className="max-h-[40rem] flex-auto">
        <img className="max-h-full max-w-full rounded-lg" src="/assets/photo.png" alt={''} />
      </div>

      <div className="flex flex-grow flex-row md:flex-col">
        <div className="flex-auto md:min-h-20" />
        <div className="mt-3 flex flex-shrink flex-row md:my-0 md:-ml-[34rem] lg:-ml-[40rem]">
          <div className="flex-auto md:min-w-24" />
          <div className="flex flex-grow flex-col rounded-lg bg-purple-500 p-10 opacity-80 ">
            <TypingRow />

            <NameRow />

            <SummaryRow />

            <ButtonsRow />
          </div>
          <div className="flex-auto md:min-w-24 " />
        </div>
        <div className="flex-shrink md:min-h-20" />
      </div>
    </div>
  )
}
