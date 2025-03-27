'use client'

import { ChangeEvent, useState } from "react";
import CheckBox from "./check-box";
import { MathJaxContext } from "better-react-mathjax";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface checkBoxData {
  id: number;
  label: string;
}

export default function Home() {

  const [checked, setChecked] = useState(Array(10).fill(true));

  const [cards, setCards] = useState(0);
  
  // categories for integrals
  const Checkboxes: checkBoxData[] = [
    {id: 0, label: "Basic Forms"},
    {id: 1, label: "Rational Function"},
    {id: 2, label: "Integral with Roots"},
    {id: 3, label: "Logarithms"},
    {id: 4, label: "Exponentials"},
    {id: 5, label: "Trigonometric Functions"},
    {id: 6, label: "Trigonometric Functions with \\(x^n\\)"},
    {id: 7, label: "Trigonometric Functions with \\(e^{ax}\\)"},
    {id: 8, label: "Trigonometric Functions with \\(x^n\\) and \\(e^{ax}\\)"},
    {id: 9, label: "Hyperbolic Functions"}
  ];

  const router= useRouter();
 
  // handles checking the category boxes
  const handleClick = (id: number) => {
    const nextChecked: boolean[] = checked.map((c, i) => {
      if (i === id) {
        return !c;
      } else {
        return c;
      }
    });
    setChecked(nextChecked);
  };

  // uses query parameters track categories and number of cards between pages
  const handleStudyClick = () => {
    const params = new URLSearchParams();

    Checkboxes.forEach(checkbox => {
      if (checked[checkbox.id]) {
        params.append("categories", checkbox.label);
      }
    });

    params.append("cards", cards.toString());

    router.push(`/flashcards?${params.toString()}`)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(e.target.value);
    setCards(value);
  }

  return (
    <MathJaxContext>
      <div className="h-full bg-slate-300">

        <div className="text-center text-xl font-serif mx-4 mb-2 underline decoration-black decoration-2">Table of Integrals taken from
          <a className="italic font-semibold" href="https://www.physics.umd.edu/hep/drew/IntegralTable.pdf" target="_blank"> HERE</a>
        </div>

        <h3 className="pt-24 text-center text-2xl font-semibold font-serif">Select Which Kind of Integrals to Show</h3>

        <div className="grid grid-cols-5 content-stretch justify-items-stretch place-items-stretch py-12 mx-24 my-2 bg-white">
          {Checkboxes.map((checkbox) => 
            <CheckBox  key={checkbox.id} label={checkbox.label} onClick={() => handleClick(checkbox.id)} isChecked={checked[checkbox.id]} />
          )}
        </div>

        <div className="flex flex-col h-auto mt-4">

          <div className="flex-1 flex justify-center">
            <input type="number" name="cards" id="cards" value={cards} onChange={handleChange} />
            <button onClick={handleStudyClick}>Study</button>
          </div>

          <div className="flex-1 flex justify-start">
            <Link href="https://github.com/MiguelZ13" target="_blank">
              <img className="h-12 w-12 mt-32 mb-12 mx-6" src="/github-mark.svg" alt="Github Logo" />
            </Link>
          </div>

        </div>

      </div>
    </MathJaxContext>
  );
}
