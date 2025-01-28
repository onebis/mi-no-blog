import Image from 'next/image'
import Link from 'next/link'
import { Category } from '@/components/Category'
import { Sidebar } from '@/components/Sidebar'
import { getAllPosts } from '@/libs/posts'

export default function Home() {
  // 記事の一覧を取得
  const articles = getAllPosts()

  return (
    <div className='mt-8 flex flex-col gap-4 lg:flex-row'>
      <div className='flex-1 lg:flex-[7]'>
        <Category />
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={article.slug}
            className='mt-16 flex border-b border-gray-800 pb-10'
          >
            <div className='flex-auto'>
              <div className='text-lg font-bold leading-loose'>{article.title}</div>
              <div className='mt-6 text-sm leading-relaxed text-gray-300'>
                {article.description}
              </div>
              <div className='mt-8 flex items-center justify-items-start gap-2 text-sm text-gray-300'>
                <div className='mr-2'>{article.createdAt}</div>
                {article.tags.map((tag) => (
                  <div key={tag} className='rounded-2xl border border-gray-300 px-2 py-1 text-xs'>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className='ml-12 flex-shrink-0'>
              <Image src={'/thumbnail02.jpg'} width={160} height={107} alt='thumbnail' />
            </div>
          </Link>
        ))}

        {/*<div className='mt-16 flex border-b border-gray-800 pb-10'>*/}
        {/*  <div className='flex-auto'>*/}
        {/*    <div className='text-lg font-bold leading-loose'>React useで非同期処理を簡単に扱う</div>*/}
        {/*    <div className='mt-6 text-sm leading-relaxed text-gray-300'>*/}
        {/*      今回は、静的解析ツールのESLintとコードフォーマッターのPrettierをNode.js &*/}
        {/*      TypeScriptプロジェクトに導入する手順を整理していきたい*/}
        {/*    </div>*/}
        {/*    <div className='mt-8 flex items-center justify-items-start gap-6 text-sm text-gray-300'>*/}
        {/*      <div>2021-10-10</div>*/}
        {/*      <div className='rounded-2xl border border-gray-300 px-2 py-1 text-xs'>React</div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className='ml-12 flex-shrink-0'>*/}
        {/*    <Image src={'/thumbnail02.jpg'} width={160} height={107} alt='thumbnail'/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className='mt-16 flex border-b border-gray-800 pb-10'>*/}
        {/*  <div className='flex-auto'>*/}
        {/*    <div className='text-lg font-bold leading-loose'>React useで非同期処理を簡単に扱う</div>*/}
        {/*    <div className='mt-6 text-sm leading-relaxed text-gray-300'>*/}
        {/*      今回は、静的解析ツールのESLintとコードフォーマッターのPrettierをNode.js &*/}
        {/*      TypeScriptプロジェクトに導入する手順を整理していきたい*/}
        {/*    </div>*/}
        {/*    <div className='mt-8 flex items-center justify-items-start gap-6 text-sm text-gray-300'>*/}
        {/*      <div>2021-10-10</div>*/}
        {/*      <div className='rounded-2xl border border-gray-300 px-2 py-1 text-xs'>React</div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className='ml-12 flex-shrink-0'>*/}
        {/*    <Image src={'/thumbnail02.jpg'} width={160} height={107} alt='thumbnail' />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className='mt-16 flex border-b border-gray-800 pb-10'>*/}
        {/*  <div className='flex-auto'>*/}
        {/*    <div className='text-lg font-bold leading-loose'>React useで非同期処理を簡単に扱う</div>*/}
        {/*    <div className='mt-6 text-sm leading-relaxed text-gray-300'>*/}
        {/*      今回は、静的解析ツールのESLintとコードフォーマッターのPrettierをNode.js &*/}
        {/*      TypeScriptプロジェクトに導入する手順を整理していきたい*/}
        {/*    </div>*/}
        {/*    <div className='mt-8 flex items-center justify-items-start gap-6 text-sm text-gray-300'>*/}
        {/*      <div>2021-10-10</div>*/}
        {/*      <div className='rounded-2xl border border-gray-300 px-2 py-1 text-xs'>React</div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className='ml-12 flex-shrink-0'>*/}
        {/*    <Image src={'/thumbnail02.jpg'} width={160} height={107} alt='thumbnail' />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className='mt-16 flex border-b border-gray-800 pb-10'>*/}
        {/*  <div className='flex-auto'>*/}
        {/*    <div className='text-lg font-bold leading-loose'>React useで非同期処理を簡単に扱う</div>*/}
        {/*    <div className='mt-6 text-sm leading-relaxed text-gray-300'>*/}
        {/*      今回は、静的解析ツールのESLintとコードフォーマッターのPrettierをNode.js &*/}
        {/*      TypeScriptプロジェクトに導入する手順を整理していきたい*/}
        {/*    </div>*/}
        {/*    <div className='mt-8 flex items-center justify-items-start gap-6 text-sm text-gray-300'>*/}
        {/*      <div>2021-10-10</div>*/}
        {/*      <div className='rounded-2xl border border-gray-300 px-2 py-1 text-xs'>React</div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className='ml-12 flex-shrink-0'>*/}
        {/*    <Image src={'/thumbnail02.jpg'} width={160} height={107} alt='thumbnail' />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <Sidebar />
    </div>
  )
}
