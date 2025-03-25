import { MathJax } from "better-react-mathjax";

interface checkBoxProps {
    label: string;
    isChecked: boolean;
    onClick: () => void;
  }

export default function CheckBox({label, isChecked, onClick}: checkBoxProps) {
    return (
        <div className="flex flex-row rounded-md items-center h-24 w-56 bg-gradient-to-tr from-red-600 to-orange-600 m-4" onClick={onClick}>
            <input className="hidden" type="checkbox" id={label} checked={isChecked} onChange={e => {
                e.stopPropagation();
                onClick();
            }
            }/>
            <label className="cursor-pointer  h-8 w-8 border-2 border-black bg-white mx-2 p-1"  htmlFor={label} onClick={e => e.stopPropagation()}> {!isChecked && <img className="h-4 w-4" src="/check-mark.svg" alt="."/>} </label>

            <MathJax className="text-white font-serif">{label}</MathJax>
        </div>
    );
}