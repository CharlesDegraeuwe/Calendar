export default function Hamburger({ burgerToggled }) {
  //variables
  const Lesoverzicht = "Lessen";
  const Planner = "Planner";
  const llnoverzicht = "Leerlingen";

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 p-3 pl-10 mt-20 pt-4 flex flex-col gap-2 border-r z-[999] bg-white border-black border-solid transform transition-transform duration-300 ${
        burgerToggled ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w- h-10 cursor-pointer">
        <span>{Lesoverzicht}</span>
      </div>
      <div className="w- h-10 cursor-pointer">
        <span>{Planner}</span>
      </div>
      <div className="w- h-10 cursor-pointer">
        <span>{llnoverzicht}</span>
      </div>
    </div>
  );
}
