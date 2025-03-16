import Articles from '@/components/pages/Articles'
import { Category } from '@/components/pages/Category'
import { Sidebar } from '@/components/pages/Sidebar'
import { getAllPosts } from '@/libs/posts'

export default function Home() {
  // 記事の一覧を取得
  const articles = getAllPosts()

  return (
    <div className='mt-8 flex flex-col gap-4 lg:flex-row'>
      <div className='flex-1 lg:flex-[7]'>
        <Category />
        <Articles articles={articles} />
      </div>
      <Sidebar />
    </div>
  )
}
