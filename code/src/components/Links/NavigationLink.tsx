import Link from 'next/link'

export const NavigationLink = ({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
