import { classNames } from 'utils/class-names'

export const TimeLine = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={classNames('px-[20px] py-[30px]', className)}>
      <ul className="list-none border-l-2 border-solid px-[5px] py-[10px]">{children}</ul>
    </div>
  )
}

const TimeLineCard = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <li
      className={classNames(
        'relative p-[20px]',
        'before:absolute',
        'before:content-[""]',
        'before:w-[10px]',
        'before:h-[10px]',
        'before:bg-blue-500',
        'before:border-2',
        'before:border-solid',
        'before:rounded-full',
        'before:top-[28px]',
        'before:left-[-11px]',
        className
      )}
    >
      {children}
    </li>
  )
}

const TimeLineCardLabel = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <span className={classNames('inline-block px-[5px] py-[2px] text-center', className)}>{children}</span>
}

const TimeLineCardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={classNames(className)}>{children}</div>
}

TimeLineCard.Label = TimeLineCardLabel
TimeLineCard.Content = TimeLineCardContent
TimeLine.Card = TimeLineCard
