import { MathJax } from "better-react-mathjax";

interface flashCardProps {
    integral: string;
}

export default function FlashCard({integral}: flashCardProps) {
    return (
        <span className=" inline-flex px-72 py-36 bg-red-600 rounded-lg">
            <MathJax className="font-serif text-white text-xl">{integral}</MathJax>
        </span>
    );
}