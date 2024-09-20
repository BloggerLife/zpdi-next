export const revalidate = 0;

import {
  AboutUs,
  Blog,
  Features,
  Hero,
  Metrics,
  NewLetter,
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar bg-[#DEE1F8]">
      <Hero />
      <div className="bg-secondary-950 p-2 sm:p-4">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <div className="bg-secondary-950 p-2 sm:p-4">
        <NewLetter />
      </div>
      <Blog />
    </main>
  );
}
