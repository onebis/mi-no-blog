import { FC, ReactNode } from 'react'

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className='px-4 pt-16'>{children}</main>
}
