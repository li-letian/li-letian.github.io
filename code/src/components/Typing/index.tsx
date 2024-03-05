import { classNames } from 'utils/class-names'

export const Typing = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={classNames(
        'font-mono',
        'overflow-hidden',
        'whitespace-nowrap',
        'border-r-2',
        'w-0',
        'animate-[typing_3s_steps(18,_end)_forwards]',
        className
      )}
      style={{
        animationIterationCount: 'infinite',
      }}
    >
      {children}
      <style>
        {`
          @keyframes typing {
            0% {
              width: 0;
            }
            20% {
              width: 1;
            }
            60% {
              width: 100%;
            }
            90% {
              width: 100%;
            }
          }
      `}
      </style>
    </div>
  )
}
