import * as fs from 'node:fs'
import path from 'node:path'
import { FC } from 'react'
import { getPost } from '@/libs/posts'

type Params = {
  slug: string
}

export const generateStaticParams = async () => {
  const postDir = path.join(process.cwd(), 'contents')
  const fileNames = fs.readdirSync(postDir)

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

const Article: FC<{ params: Promise<Params> }> = async ({ params }) => {
  const { slug } = await params
  const { metadata, content } = getPost(slug)

  return (
    <div>
      <h1>{metadata.title}</h1>
      <div>{metadata.createdAt}</div>
      <div>{content}</div>
    </div>
  )
}

export default Article
