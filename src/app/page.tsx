import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen px-4 pt-32">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Welcome to My Freelancing Portfolio
        <Hero />
      </h1>
    </div>
  );
}
