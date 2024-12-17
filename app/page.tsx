export default function Home() {
  return (
    <div className="h-screen bg-slate-300">
      <h1 className="text-center py-8 text-6xl text-white font-serif font-extrabold italic bg-gradient-to-r from-rose-500 from-10% via-red-700 via-50% to-rose-500 to-90%" >INTEGRAL FLASHCARDS</h1>
      <div className="text-center text-xl font-serif m-4 underline decoration-black decoration-2">Table of Integrals taken from
        <a className="italic font-semibold" href="https://www.physics.umd.edu/hep/drew/IntegralTable.pdf" target="_blank"> HERE</a>
      </div>
      <h3 className="pt-24 text-center text-2xl font-semibold font-serif">Select Which Kind of Integrals to Show</h3>
      <div className="grid grid-cols-5 content-center justify-items-center py-24 mx-24 my-2 bg-white">
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mb-12 text-white align-middle">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle" type="checkbox" name="Basic Forms" />
          Basic Forms
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mb-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Rational Function" />
          Rational Function
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mb-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Integral with Roots" />
          Integral with Roots
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mb-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Logarithms" />
          Logarithms
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mb-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Exponentials" />
          Exponentials
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mt-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Trigonometric Functions" />
          Trigonometric Functions
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mt-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Trigonometric Functions with x^n" />
          Trigonometric Functions with x^n
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mt-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Trigonometric Functions with e^ax" />
          Trigonometric Functions with e^ax
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mt-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Trigonometric Functions with x^n and e^ax" />
          Trigonometric Functions with x^n and e^ax
        </label>
        <label className="bg-gradient-to-tr from-red-600 to-orange-600 rounded text-lg p-3 m-2 mt-12 text-white">
          <input className="appearance-none mr-4 border-2 border-black w-5 h-5 rounded-lg bg-white checked:bg-slate-500 align-middle"  type="checkbox" name="Hyperbolic Functions" />
          Hyperbolic Functions
        </label>
      </div>
    </div>
  );
}
