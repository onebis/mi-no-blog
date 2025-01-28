import * as fs from 'node:fs'
import path from 'node:path'
import frontMatter from 'front-matter'

const contentsPath = path.join(process.cwd(), 'contents')
type FrontMatter = {
  title: string
  createdAt: string
  tags: string[]
  description: string
}

type Post = { slug: string } & FrontMatter

export const getAllPosts = (): Post[] => {
  const filenames = fs.readdirSync(contentsPath)

  return filenames.map((filename) => {
    const filePath = path.join(contentsPath, filename)
    const contents = fs.readFileSync(filePath, 'utf8')
    const { attributes } = frontMatter(contents) as { attributes: FrontMatter }

    return {
      slug: filename.replace(/\.md$/, ''),
      ...attributes,
    }
  })
}

export const getPost = (slug: string): { metadata: FrontMatter; content: string } => {
  const filePath = path.join(process.cwd(), 'contents', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // front-matterを解析
  const { attributes, body } = frontMatter(fileContents) as {
    attributes: FrontMatter
    body: string
  }

  return {
    metadata: attributes,
    content: body,
  }
}
