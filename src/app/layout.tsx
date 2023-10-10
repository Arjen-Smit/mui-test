import '../build/scss/_variables.scss'
import './global.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from '@mui/material/';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MUI Example',
  description: 'Page to checkout MUI with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <CssBaseline>
        <body>{children}</body>
      </CssBaseline>
    </html>
  )
}
