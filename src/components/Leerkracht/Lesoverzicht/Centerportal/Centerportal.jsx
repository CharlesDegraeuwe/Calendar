export default function Centerportal({ huiswerk }) {
  return (
    <div className="h-170 w-3/8 rounded-3xl bg-white border-solid border-black border-1 p-5 flex flex-col gap-2">
      <div className="flex flex-row items-baseline justify-between">
        <span className="w- h-10">Vorige les</span>
        <span className="w- h-10">{huiswerk?.date ?? "Geen data"}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col items-baseline justify-between text-sm gap-2">
          <span className="w- h- text-gray-500">Werk</span>
          <span className="w-full h-10 rounded-xl border-solid border-gray-300 border-1 flex flex-col justify-center items-baseline p-5">
            {huiswerk?.werk ?? "Geen data"}
          </span>
        </div>
        <div className="flex flex-col items-baseline justify-between text-sm gap-2">
          <span className="w- h- text-gray-500">Componist</span>
          <span className="w-full h-10 rounded-xl border-solid border-gray-300 border-1 flex flex-col justify-center items-baseline p-5">
            {huiswerk?.componist ?? "Geen data"}
          </span>
        </div>
        <div className="flex flex-col items-baseline justify-between text-sm gap-2">
          <span className="w- h- text-gray-500">Deel/ Studie/ Les</span>
          <span className="w-full h-10 rounded-xl border-solid border-gray-300 border-1 flex flex-col justify-center items-baseline p-5">
            {huiswerk?.deel ?? "Geen data"}
          </span>
        </div>
        <div className="flex flex-col items-baseline justify-between text-sm gap-2">
          <span className="w- h- text-gray-500">Bezetting</span>
          <span className="w-full h-10 rounded-xl border-solid border-gray-300 border-1 flex flex-col justify-center items-baseline p-5">
            {huiswerk?.Bezetting ?? "Geen data"}
          </span>
        </div>

        <div className="flex flex-col items-baseline justify-between text-sm gap-2 col-span-2">
          <span className="w- h- text-gray-500">Opmerkingen</span>
          <span className="w-full h-80 rounded-xl border-solid border-gray-300 border-1 flex flex-col justify-baseline items-baseline p-5">
            {huiswerk?.Opmerkingen ?? "Geen data"}
          </span>
        </div>
      </div>

      <div className="h-full flex items-end">
        <div className="flex justify-center items-center w-full h-10 p-5 rounded-3xl bg-white border-solid border-black border-1 cursor-pointer">
          Wijzigen
        </div>
      </div>
    </div>
  );
}
