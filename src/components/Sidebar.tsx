import { FC, ReactNode } from 'react'
export const Sidebar: FC<{ children: ReactNode }> = ({ children }) => {
  return <aside className='bg-gray-800 text-white'>{children}</aside>
}
