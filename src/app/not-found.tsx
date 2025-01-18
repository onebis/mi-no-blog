import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Not Found',
  description: '指定されたページが見つかりませんでした',
}

export default function NotFound() {
  return (
    <div className='container'>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  )
}
