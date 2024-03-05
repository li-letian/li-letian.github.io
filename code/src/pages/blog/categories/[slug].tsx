import type { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: false, // false or "blocking"
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async context => {
  return { props: {} }
}) satisfies GetStaticProps

export default function BlogPost() {
  return (
    <>
      <h1>BlogPost</h1>
    </>
  )
}
