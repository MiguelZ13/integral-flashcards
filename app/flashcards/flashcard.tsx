'use client'

import { MathJax } from "better-react-mathjax";
import { useState } from "react";

interface flashCardProps {
    integral: string;
    solution: string;
    facedown: boolean;
    onClick: () => void;
}

export default function FlashCard({integral, solution, facedown, onClick}: flashCardProps) {
    return (
        <span className=" inline-flex px-72 py-36 bg-red-600 rounded-lg" onClick={onClick}>
            <MathJax className="font-serif text-white text-xl">{facedown ? integral : solution}</MathJax>
        </span>
    );
}