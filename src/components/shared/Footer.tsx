import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer>
      <p className='mt-4'>© {new Date().getFullYear()} Next.js Blog</p>
    </footer>
  )
}
