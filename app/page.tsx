'use client'

import { useState } from "react";
import CheckBox from "./check-box";

interface checkBoxData {
  id: number;
  label: string;
}

export default function Home() {
  const [checked, setChecked] = useState(Array(10).fill(false));

  const Checkboxes: checkBoxData[] = [
    {id: 0, label: "Basic Forms"},
    {id: 1, label: "Rational Function"},
    {id: 2, label: "Integral with Roots"},
    {id: 3, label: "Logarithms"},
    {id: 4, label: "Exponentials"},
    {id: 5, label: "Trigonometric Functions"},
    {id: 6, label: "Trigonometric Functions with x^n"},
    {id: 7, label: "Trigonometric Functions with e^ax"},
    {id: 8, label: "Trigonometric Functions with x^n and e^ax"},
    {id: 9, label: "Hyperbolic Functions"}
  ];
 
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

  return (
    <div className="h-screen bg-slate-300">
      <h1 className="text-center py-8 text-6xl text-white font-serif font-extrabold italic bg-gradient-to-r from-rose-500 from-10% via-red-700 via-50% to-rose-500 to-90%" >INTEGRAL FLASHCARDS</h1>
      <div className="text-center text-xl font-serif m-4 underline decoration-black decoration-2">Table of Integrals taken from
        <a className="italic font-semibold" href="https://www.physics.umd.edu/hep/drew/IntegralTable.pdf" target="_blank"> HERE</a>
      </div>
      <h3 className="pt-24 text-center text-2xl font-semibold font-serif">Select Which Kind of Integrals to Show</h3>
      <div className="grid grid-cols-5 content-stretch justify-items-stretch place-items-stretch py-12 mx-24 my-2 bg-white">
        {Checkboxes.map((checkbox) => 
          <CheckBox  key={checkbox.id} label={checkbox.label} isChecked={checked[checkbox.id]} />
        )}
      </div>
      <a href="https://github.com/MiguelZ13" target="_blank">
        <img className="h-12 w-12 my-36 mx-6" src="/github-mark.svg" alt="Github Logo" />
      </a>
    </div>
  );
}
