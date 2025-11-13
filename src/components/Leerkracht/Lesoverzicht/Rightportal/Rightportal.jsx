export default function Rightportal() {
  return (
    <div className="h-170 w-3/8 rounded-3xl bg-white border-solid border-black border-1 p-5 flex flex-col gap-2">
      <div className="flex flex-row items-baseline justify-between">
        <span className="w- h-10">Huiswerk</span>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col items-baseline justify-between text-sm gap-2">
          <span className="w- h- text-gray-500">Werk</span>
          <input className="w-full h-10 rounded-xl border-solid border-black border-1 flex flex-col justify-center items-baseline p-5" />
        </div>
        <div className="flex flex-col items-baseline justify-between text-sm gap-2">
          <span className="w- h- text-gray-500">Componist</span>
          <input className="w-full h-10 rounded-xl border-solid border-black border-1 flex flex-col justify-center items-baseline p-5" />
        </div>
        <div className="flex flex-col items-baseline justify-between text-sm gap-2">
          <span className="w- h- text-gray-500">Deel/ Studie/ Les</span>
          <input className="w-full h-10 rounded-xl border-solid border-black border-1 flex flex-col justify-center items-baseline p-5" />
        </div>
        <div className="flex flex-col items-baseline justify-between text-sm gap-2">
          <span className="w- h- text-gray-500">Bezetting</span>
          <input className="w-full h-10 rounded-xl border-solid border-black border-1 flex flex-col justify-center items-baseline p-5" />
        </div>

        <div className="flex flex-col items-baseline justify-between text-sm gap-2 col-span-2">
          <span className="w- h- text-gray-500">Opmerkingen</span>
          <input className="w-full h-20 rounded-xl border-solid border-black border-1 flex content-baseline justify-baseline p-5" />
        </div>
        <div className="flex flex-col items-baseline justify-between text-sm gap-2 col-span-2">
          <span className="w- h- text-gray-500">Bijlage</span>
          <input
            type="file"
            className="w-full h-20 rounded-xl border-solid border-black border-1 flex content-center justify-center pl-5"
          />
        </div>
      </div>

      <div className="h-full flex flex-col justify-end gap-7">
        <div className="flex justify-center items-center w-full h-10 p-5 rounded-3xl bg-white border-solid border-black border-1 cursor-pointer">
          Leerling afwezig
        </div>
        <div className="flex justify-center items-center w-full h-10 p-5 rounded-3xl bg-white border-solid border-black border-1 cursor-pointer">
          Wijzigen
        </div>
      </div>
    </div>
  );
}
