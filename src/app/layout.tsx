import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Positive Change Hypnotherapy | Solution Focused Hypnotherapy',
  description: 'Transform your life with Solution Focused Hypnotherapy at Positive Change Hypnotherapy. Overcome anxiety, stress, depression, and more with our clinically-proven behavioural change therapy.',
  keywords: 'Positive Change Hypnotherapy, Solution Focused Hypnotherapy, anxiety, stress, depression, behavior change therapy, hypnotherapy Leicester, Keira Smith hypnotherapist',
  icons: {
    icon: '/media/favicon.png',
    apple: '/media/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white">
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
} 