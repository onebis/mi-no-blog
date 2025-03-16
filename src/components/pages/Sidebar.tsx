import Image from 'next/image'
import NextLink from 'next/link'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export const Sidebar: FC = () => {
  return (
    <div className='flex-none lg:flex-[3]'>
      <div className='mt-16 flex flex-col items-center p-4'>
        <Image src={'/owl1.png'} width={160} height={160} alt='profile' />
        <div className='mt-10'>
          <p>minoru horiuchi</p>
          <p>Software Engineer</p>
        </div>
        <div className='mt-10 flex items-center gap-4'>
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
    </div>
  )
}
