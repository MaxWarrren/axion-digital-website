import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-[#070707] min-h-screen text-white font-sans">
      <Navbar />
      <div className="pt-32 px-16">
        <p className="text-white/30">Building...</p>
      </div>
    </main>
  );
}
