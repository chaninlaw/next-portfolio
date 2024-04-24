import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { EditorExplorer } from '@/components/editor/editor-explorer'
import { EditorFooter } from '@/components/editor/editor-footer'
import { EditorNavHead } from '@/components/editor/editor-nav-head'
import { EditorNavSide } from '@/components/editor/editor-nav-side'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import { EditorTabs } from '@/components/editor/editor-tabs'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from './providers'
import { EditorContent } from '@/components/editor/editor-content'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "Chanin' portfolio",
  description: 'My website about me'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Navbar className='hidden lg:block' />
        <Providers>
          <div className='h-full'>
            <div className='border-2 border-border rounded-xl flex flex-col w-full h-full'>
              <EditorNavHead />
              <div className='flex h-full'>
                <EditorNavSide />
                <ResizablePanelGroup direction='horizontal' className='h-full'>
                  <ResizablePanel defaultSize={15}>
                    <EditorExplorer />
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={85}>
                    <EditorTabs />
                    <EditorContent>{children}</EditorContent>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
              <EditorFooter />
            </div>
          </div>
        </Providers>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
