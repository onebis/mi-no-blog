import Image from 'next/image'

export default function Home() {
  return (
    <div className='mt-12 flex flex-col gap-4 lg:flex-row'>
      <div className='flex-1 lg:flex-[7]'>
        <div className='flex gap-8 border-b border-gray-600 px-4 pb-4'>
          <div>All</div>
          <div className='text-gray-600'>React</div>
          <div className='text-gray-600'>Laravel</div>
          <div className='text-gray-600'>Git</div>
        </div>
        <div className='mt-10 flex py-4'>
          <div className='flex-auto'>
            <div className='font-bold'>React useで非同期処理を簡単に扱う</div>
            <div className='mt-6 text-sm text-gray-300'>
              今回は、静的解析ツールのESLintとコードフォーマッターのPrettierをNode.js &
              TypeScriptプロジェクトに導入する手順を整理していきたい
            </div>
            <div className='mt-6 flex items-center justify-items-start gap-6 text-sm text-gray-300'>
              <div>2021-10-10</div>
              <div className='rounded-2xl border border-gray-300 px-2 py-1 text-xs'>React</div>
            </div>
          </div>
          <div className='ml-14'>
            <Image src={'/thumbnail02.jpg'} width={160} height={107} alt='thumbnail' />
          </div>
        </div>
      </div>
      <div className='flex-none bg-gray-500 lg:flex-[3]'>sidebar</div>
    </div>
  )
}
