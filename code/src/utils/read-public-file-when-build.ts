import fs from 'fs'

import path from 'path'

export interface PostSummary {
  title: string
  slug: string
  date: string
  description: string
  rank: number
  tags: string[]
  cover: string
}

export interface TOC {
  summaries: PostSummary[]
}

export function readTOC(): TOC {
  const filePath = path.join(process.cwd(), 'public', 'blog', 'posts', 'toc', 'TOC.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const data = { summaries: JSON.parse(fileContents) }

  return data
}

export function readMD(slug: string): string {
  const filePath = path.join(process.cwd(), 'public', 'blog', 'posts', slug + '.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')

  return fileContents
}
