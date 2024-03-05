import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import { PostSummary, TOC, readMD, readTOC } from 'utils/read-public-file-when-build'

import Link from 'next/link'
import Header from 'contents/Header'
import Main from 'contents/Main'
import Footer from 'contents/Footer'
import { Menu } from 'contents/Blog/Menu'

export const getStaticProps = (async () => {
  const toc = readTOC()

  return { props: { toc: toc } }
}) satisfies GetStaticProps<{
  toc: TOC
}>

export default function BlogPost({ toc }: { toc: TOC }) {
  return (
    <Main>
      <Menu toc={toc} />
    </Main>
  )
}
