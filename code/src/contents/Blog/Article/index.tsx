import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { components } from './ComponentsMapping'
import { TableOfContents, GetHeadings } from './TableOfContents'

const Layout = ({ children }) => {
  return (
    <div className="m-5 flex flex-row">
      <div className="flex-shrink">
        <div className="sticky top-0">
          <TableOfContents>{children}</TableOfContents>
        </div>
      </div>
      <div className="w-5" />
      <div className="flex-grow">
        <article className="prose dark:prose-invert lg:prose-lg xl:prose-xl">{children}</article>
      </div>
    </div>
  )
}

export const Article = ({ md }: { md: MDXRemoteSerializeResult }) => {
  return (
    <Layout>
      <MDXRemote {...md} components={{ ...components }} />
    </Layout>
  )
}
