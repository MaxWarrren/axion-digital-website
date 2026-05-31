import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
    </main>
  );
}
