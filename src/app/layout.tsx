import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Axion Digital — AI Operating Systems for Owner-Operated Businesses',
  description:
    'We build secure AI platforms and custom software for owner-operated practices, service businesses, and B2B companies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#070707] font-sans antialiased text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
