import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

const components = {
  img: ({ src, alt, ...rest }) => <img alt={alt} src={'/' + src} {...rest} />,
}

export const Article = ({ md }: { md: MDXRemoteSerializeResult }) => {
  return (
    <article className="prose dark:prose-invert md:prose-lg lg:prose-xl">
      <MDXRemote {...md} components={{ ...components }} />
    </article>
  )
}
