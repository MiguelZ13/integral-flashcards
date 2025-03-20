interface checkBoxProps {
    label: string;
    isChecked: boolean;
  }

export default function CheckBox({label, isChecked}: checkBoxProps) {
    return (
        <div className="flex flex-row rounded-md items-center h-24 w-56 bg-gradient-to-tr from-red-600 to-orange-600 m-4">
            <input className="hidden" type="checkbox" id={label} checked={isChecked} />
            <label className="cursor-pointer  h-8 w-8 border-2 border-black bg-white mx-2 p-1"  htmlFor={label}> {!isChecked && <img className="h-4 w-4" src="/check-mark.svg" alt="." />} </label>
            <span className="text-white text-lg text-center">{label}</span>
        </div>
    );
}