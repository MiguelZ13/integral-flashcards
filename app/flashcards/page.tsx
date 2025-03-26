'use client'

import { MathJaxContext } from "better-react-mathjax";
import FlashCard from "./flashcard";

interface flashcardData {
    id: number;
    category: string;
    integral: string;
}

export default function Home() {
    const flashcards: flashcardData[] = [
        {id: 0, category: "Basic Forms", integral: "Hello"},
    ]

    return (
        <MathJaxContext>
            <div className="py-64 bg-slate-300 flex justify-evenly items-center">
                <button className="bg-black px-24 py-12 text-white">
                    <img src="/back-arrow.svg" alt="prev" />
                </button>
                <FlashCard integral={flashcards[0].integral} />
                <button className="bg-black px-24 py-12 text-white">
                    <img src="/forward-arrow.svg" alt="next" />
                </button>
            </div>
        </MathJaxContext>
    );
}