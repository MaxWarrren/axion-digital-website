import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';

const Divider = () => (
  <div className="max-w-[1400px] mx-auto px-16">
    <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
  </div>
);

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <Divider />
      <WhoWeWorkWith />
    </main>
  );
}
