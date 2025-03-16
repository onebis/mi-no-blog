import { FC } from 'react'

export const Category: FC = () => {
  return (
    <div className='flex gap-8 border-b border-gray-600 px-4 pb-4'>
      <div>All</div>
      <div className='text-gray-600'>React</div>
      <div className='text-gray-600'>Laravel</div>
      <div className='text-gray-600'>Git</div>
    </div>
  )
}
