import NextLink from 'next/link'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export const Header: FC = () => {
  return (
    <header className='fixed left-0 top-0 z-50 w-full border-b border-b-gray-500'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <NextLink href='/' className='font-adlam text-3xl font-bold transition'>
          <span className='text-red-700'>M</span>ino Blog
        </NextLink>

        <div className='flex items-center space-x-4'>
          <NextLink
            href='https://github.com/onebis/mi-no-blog'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={30} />
          </NextLink>
          <NextLink href='https://x.com/onebisTech' target='_blank' rel='noopener noreferrer'>
            <FaSquareXTwitter size={30} />
          </NextLink>
        </div>
      </div>
    </header>
  )
}
