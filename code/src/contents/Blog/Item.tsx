import Link from 'next/link'
import { PostSummary } from 'utils/read-public-file-when-build'

const Cover = ({ post }: { post: PostSummary }) => {
  return (
    <Link className="group relative block" href={`/blog/posts/${post.slug}`}>
      <div
        className="pointer-events-none absolute inset-0 hidden transform bg-gray-800 transition duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 md:block md:translate-x-4 md:translate-y-2 xl:translate-x-8 xl:translate-y-4"
        aria-hidden="true"
      ></div>
      <figure className="relative h-0 transform overflow-hidden pb-[56.25%] transition duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 md:-translate-y-2 md:pb-[75%] lg:pb-[56.25%] xl:-translate-y-4">
        <img
          className="absolute inset-0 h-full w-full transform object-cover transition duration-700 ease-out hover:scale-105"
          src={`/${post.cover}`}
          width="540"
          height="270"
          alt="Blog post"
        />
      </figure>
    </Link>
  )
}

const Tags = ({ post }: { post: PostSummary }) => {
  return (
    <div className="mb-3">
      <ul className="-m-1 flex flex-wrap text-xs font-medium">
        {post.tags.map(tag => (
          <li key={tag} className="m-1">
            <Link
              className="inline-flex rounded-full bg-purple-600 px-3 py-1 text-center text-gray-100 transition duration-150 ease-in-out hover:bg-green-600"
              href={`/blog/posts/${post.slug}`}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Title = ({ post }: { post: PostSummary }) => {
  return (
    <h3 className="mb-2 text-3xl font-bold leading-tight lg:text-4xl">
      <a className="transition duration-150 ease-in-out hover:text-purple-600" href={`/blog/posts/${post.slug}`}>
        {post.title}
      </a>
    </h3>
  )
}

export const BlogItem = ({ post }: { post: PostSummary }) => {
  return (
    <section>
      <div className="mx-auto h-full max-w-6xl p-4 sm:px-6">
        <article className="mx-auto grid max-w-sm items-center gap-6 md:max-w-none md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-16">
          <Cover post={post} />
          <div>
            <header>
              <Tags post={post} />
              <Title post={post} />
            </header>
            <p className="flex-grow text-lg text-gray-400">{post.description}</p>
            <footer className="mt-4 flex items-center">
              {/* <Link href={`/blog/posts/${post.slug}`}>
                <img
                  className="mr-4 flex-shrink-0 rounded-full"
                  src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
                  width="40"
                  height="40"
                  alt="Author 04"
                />
              </Link> */}
              <div>
                <Link
                  className="font-medium text-gray-200 transition duration-150 ease-in-out hover:text-gray-100"
                  href={`/blog/posts/${post.slug}`}
                >
                  Created on
                </Link>
                <span className="text-gray-700"> - </span>
                <span className="text-gray-500">{post.date}</span>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </section>
  )
}
