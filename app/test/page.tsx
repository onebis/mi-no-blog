import Image from 'next/image'
import Link from 'next/link'
import { getList } from '@/app/_libs/microcms'

export default async function StaticPage() {
  const { contents } = await getList()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/static/${post.id}`}>{post.title}</Link>
              <Image
                src={post.eyecatch?.url ?? ''}
                alt={'article image'}
                width={300}
                height={200}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
