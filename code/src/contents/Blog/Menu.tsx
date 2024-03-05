import { PostSummary, TOC } from 'utils/read-public-file-when-build'
import { BlogItem } from './Item'

export const Menu = ({ toc }: { toc: TOC }) => {
  return (
    <div>
      {toc.summaries.map((post: PostSummary) => (
        <div key={post.slug} className="p-2">
          <BlogItem post={post} />
        </div>
      ))}
    </div>
  )
}
