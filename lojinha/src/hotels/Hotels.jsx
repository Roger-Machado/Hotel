import React from "react";
import CardList from "../components/cardList/CardList";

export default function Hotels() {
  return (
    <main className="p-6 min-h-screen text-2xl font-bold">
      <h1>Principais Hotéis </h1>
      <section className=" text-black p-6 rounded-2xl mt-3 grid grid-cols-1 md:grid-cols-3 gap-10">
        <CardList />
      </section>
    </main>
  );
}
