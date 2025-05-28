import React from "react";

export default function Contact() {
  return (
    <section className="p-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Kontakt & Boka Möte</h2>
      <form action="https://formspree.io/f/mwkgyjze" method="POST" className="max-w-xl mx-auto space-y-4">
        <input type="email" name="email" placeholder="Din e-postadress" required className="w-full p-3 border rounded" />
        <button type="submit" className="bg-[#4A90E2] text-white px-6 py-2 rounded">Anmäl intresse</button>
      </form>
      <div className="text-center mt-8">
        <a href="https://calendly.com/paxsater/30min" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#0B1F2E] text-white px-6 py-3 rounded mt-4">Boka 30 min webbmöte</button>
        </a>
      </div>
    </section>
  );
}