
import { classNames } from 'utils/class-names'

export const TagCloud = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={classNames(
        'mx-0 my-4 flex w-full',
        'flex-row',
        'flex-wrap',
        'justify-center',
        'items-center',
        'text-inherit',
        className
      )}
    >
      {children}
    </div>
  )
}

const TagCloudItem = ({ className, children }: { className?: string; children?: React.ReactNode }) => {

  let texts=['text-md','text-lg','text-xl','text-2xl','text-3xl','text-4xl']
  let fonts=['font-bold','font-extrabold','font-medium','font-semibold','font-normal','font-bold','font-extrabold','font-medium']
  let colors=['text-red-500','text-yellow-500','text-green-500','text-blue-500','text-indigo-500','text-purple-500','text-pink-500']

  // let text=texts[hashCode(children.toLocaleString())%texts.length]
  // let font=fonts[hashCode(children.toString())*fonts.length]
  // let color=colors[hashCode(children.toString())*colors.length]
  
  let text=texts[Math.floor(Math.random()*texts.length)%texts.length]
  let font=fonts[Math.floor(Math.random()*texts.length)%texts.length]
  let color=colors[Math.floor(Math.random()*texts.length)%texts.length]

  return (
    <div
      className={classNames(
        'flex-auto',
        'p-1',
        'text-center',
        'transition-all',
        'rounded-md',
        'whitespace-nowrap',
        'hover:relative',
        'hover:bg-[#ffab3d]',
        `${text} ${font} ${color}`,
        className
      )}
    >
      {children}
    </div>
  )
}

TagCloud.Tag = TagCloudItem
