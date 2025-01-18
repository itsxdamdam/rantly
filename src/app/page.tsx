"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [rant, setRant] = useState("");

  const postRant = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRant(e.target.value);
  };

  return (
    <div className="py-3">
      <Link className="text-3xl font-bold px-10 tracking-widest" href="/">
        rantly
      </Link>
      <div className="grid items-center justify-items-center p-4 gap-8 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <input
            className="w-3/5 p-4 border-none border-0 bg-gray-600 text-gray-400 rounded-lg focus:outline-none"
            value={rant}
            onChange={postRant}
            placeholder="Rant away..."
            style={{
              width: "700px",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "10px",
            }}
          />
          <button className="font-semibold self-end mr-5 hover:text-gray-600  text-gray-400">
            Post Rant
          </button>
          
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
