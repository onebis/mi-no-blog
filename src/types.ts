type FrontMatter = {
  title: string
  createdAt: string
  tags: string[]
  description: string
}

type Post = { slug: string } & FrontMatter

export type { FrontMatter, Post }
