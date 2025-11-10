import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'A simple portfolio website built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}