import type { GetStaticProps, GetStaticPaths } from 'next'
import { PostSummary, readMD, readTOC } from 'utils/read-public-file-when-build'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import Main from 'contents/Main'
import { BlogItem } from 'contents/Blog/Item'
import { Article } from 'contents/Blog/Article'

export const getStaticPaths = (async () => {
  const toc = readTOC()

  return {
    paths: toc.summaries.map((summary: PostSummary) => ({
      params: { slug: summary.slug },
    })),
    fallback: false,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context: { params: { slug: string } }) => {
  const source = readMD(context.params.slug)

  const toc = readTOC()
  const summary = toc.summaries.find((summary: PostSummary) => summary.slug === context.params.slug)

  const md = await serialize(source)

  return { props: { md: md, summary: summary } }
}) satisfies GetStaticProps<{
  md: MDXRemoteSerializeResult
}>

export default function BlogPost({ md, summary }: { md: MDXRemoteSerializeResult; summary: PostSummary }) {
  return (
    <Main>
      <BlogItem post={summary} />
      <Article md={md} />
    </Main>
  )
}
