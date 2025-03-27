'use client'

import { MathJaxContext } from "better-react-mathjax";
import FlashCard from "./flashcard";
import { useState } from "react";

interface flashcardData {
    id: number;
    category: string;
    integral: string;
    solution: string;
}

export default function Home() {
    const numCards: number = 17;

    const flashcards: flashcardData[] = [
        {id: 0, category: "Basic Forms", integral: "\\(\\int x^ndx\\)", solution: "\\(\\frac{1}{n + 1} x^{n+1}\\)"},
        {id: 1, category: "Basic Forms", integral: "\\(\\int\\frac{1}{x}dx\\)", solution: "\\(\\ln x\\)"},
        {id: 2, category: "Basic Forms", integral: "\\(\\int udv\\)", solution: "\\(uv - \\int vdu\\)"},
        {id: 3, category: "Basic Forms", integral: "\\(\\int u(x)v^{'}(x)dx\\)", solution: "\\(u(x)v(x) - \\int v(x)u^{'}(x)dx\\)"},
        {id: 4, category: "Rational Function", integral: "\\(\\int \\frac{1}{ax + b}dx\\)", solution: "\\(\\frac{1}{a} \\ln (ax + b)\\)"},
        {id: 5, category: "Rational Function", integral: "\\(\\int \\frac{1}{(x+a)^2}dx\\)", solution: "\\(\\frac{-1}{x + a}\\)"},
        {id: 6, category: "Rational Function", integral: "\\(\\int (x + a)^n dx\\)", solution: "\\((x + a)^n (\\frac{a}{1+n} + \\frac{x}{1+n})\\), \\(n \\neq -1\\)"},
        {id: 7, category: "Rational Function", integral: "\\(\\int x(x+a)^n dx\\)", solution: "\\(\\frac{(x+a)^{1+n}(nx + x - a)}{(n+2)(n+1)}\\)"},
        {id: 8, category: "Rational Function", integral: "\\(\\int \\frac{dx}{1+x^2}\\)", solution: "\\(\\tan^{-1}x\\)"},
        {id: 9, category: "Rational Function", integral: "\\(\\int \\frac{dx}{a^2 + x^2}\\)", solution: "\\(\\frac{1}{a} \\tan^{-1}(x/a)\\)"},
        {id: 10, category: "Rational Function", integral: "\\(\\int \\frac{xdx}{a^2 + x^2}\\)", solution: "\\(\\frac{1}{2}\\ln(a^2 + x^2)\\)"},
        {id: 11, category: "Rational Function", integral: "\\(\\int \\frac{x^2 dx}{a^2 + x^2}\\)", solution: "\\(x - a \\tan^{-1}(x/a)\\)"},
        {id: 12, category: "Rational Function", integral: "\\(\\int \\frac{x^3 dx}{a^2 + x^2}\\)", solution: "\\(\\frac{1}{2}x^2 - \\frac{1}{2}a^2 \\ln (a^2 + x^2)\\)"},
        {id: 13, category: "Rational Function", integral: "\\(\\int (ax^2 + bx + c)^{-1} dx\\)", solution: "\\(\\frac{2}{\\sqrt{4ac-b^2}} \\tan^{-1}(\\frac{2ax+b}{\\sqrt{4ac-b^2}})\\)"},
        {id: 14, category: "Rational Function", integral: "\\(\\int \\frac{1}{(x+a)(x+b)}dx\\)", solution: "\\(\\frac{1}{b-a}[\\ln(a+x) - \\ln(b+x)]\\), \\(a \\neq b\\)"},
        {id: 15, category: "Rational Function", integral: "\\(\\int \\frac{x}{(x+a)^2}dx\\)", solution: "\\(\\frac{a}{a+x} + \\ln(a+x)\\)"},
        {id: 16, category: "Rational Function", integral: "\\(\\int \\frac{x}{ax^2 + bx + c}dx\\)", solution: "\\(\\frac{\\ln(ax^2 + bx + c)}{2a} - \\frac{b}{a \\sqrt{4ac - b^2}}\\tan^{-1}(\\frac{2ax + b}{\\sqrt{4ac - b^2}})\\)"},
    ]

    const [position, setPosition] = useState(0);

    const [facedown, setFacedown] = useState(true);

    const handleBackClick = () => {
        if (position > 0) {
            setPosition(position - 1)
        }
        setFacedown(true);
    }

    const handleForwardClick = () => {
        if (position < numCards - 1) {
            setPosition(position + 1);
        }
        setFacedown(true);
    }

    const handleClick = () => {
        setFacedown(!facedown);
    }

    return (
        <MathJaxContext>
            <div className="py-64 bg-slate-300 flex justify-evenly items-center">
                <button className="bg-black px-24 py-12 text-white" onClick={handleBackClick}>
                    <img src="/back-arrow.svg" alt="prev" />
                </button>
                <FlashCard integral={flashcards[position].integral} 
                           solution={flashcards[position].solution} 
                           facedown={facedown} 
                           onClick={handleClick} />
                <button className="bg-black px-24 py-12 text-white" onClick={handleForwardClick}>
                    <img src="/forward-arrow.svg" alt="next" />
                </button>
            </div>
        </MathJaxContext>
    );
}