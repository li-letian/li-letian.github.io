import { renderToString } from 'react-dom/server'
import { TextToId } from './ComponentsMapping'
import { ReactElement, ReactNode } from 'react'

export const GetHeadings = (source: string) => {
  let father = { '0': '', '1': '', '2': '', '3': '', '4': '', '5': '', '6': '' }

  const matches = [...source.matchAll(/<h(\d) id=".*">(.*?)<\/h(\d)>/g)]

  if (matches) {
    return matches
      .map(group => {
        const level = parseInt(group[1])
        const headingText = group[2]
        const link = '#' + TextToId(headingText)

        let sonLevel = level + 1
        for (let i = sonLevel; i < 7; i++) {
          father[i] = link
        }

        return {
          level,
          text: headingText,
          link,
          father: father[level],
        }
      })
      .flat()
  } else {
    return []
  }
}

const TableOfContentItem = ({
  heading,
  children,
}: {
  heading: { level: number; text: string; link: string }
  children?: ReactNode
}) => {
  return (
    <li>
      <a href={heading.link}>{heading.text}</a>
      <div>{children}</div>
    </li>
  )
}

const OneLayerTableOfContents = ({
  father,
  level,
  headings,
}: {
  father: string
  level: number
  headings: { level: number; text: string; link: string; father: string }[]
}) => {
  const thisLayerItems = headings.filter(heading => heading.father === father && heading.level === level)

  const nextLayerItemsArray = thisLayerItems.map(heading => {
    return headings.filter(h => h.father === heading.link).map(h => h.link)
  })

  return (
    <ul>
      {thisLayerItems.map(heading => (
        <TableOfContentItem key={heading.link} heading={heading}>
          {nextLayerItemsArray.length > 0 && (
            <OneLayerTableOfContents father={heading.link} level={level + 1} headings={headings} />
          )}
        </TableOfContentItem>
      ))}
    </ul>
  )
}

export const TableOfContents = ({ children }: { children: ReactElement }) => {
  const contentString = renderToString(children)

  const headings = GetHeadings(contentString)

  const startLevel = headings.reduce((acc, heading) => Math.min(acc, heading.level), 6)

  return (
    <div className="prose min-w-[15vw] max-w-[25vw] dark:prose-invert">
      <div className="text-center">
        <h3>Table of Contents</h3>
      </div>
      <div className="max-h-[80vh] overflow-scroll pb-10">
        <OneLayerTableOfContents level={startLevel} headings={headings} father="" />
      </div>
    </div>
  )
}
