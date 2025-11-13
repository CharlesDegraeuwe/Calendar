import Leerling from "./Leerling";

export default function Topbar({
  data,
  dag,
  academie,
  currentLeerling,
  setCurrentLeerling,
}) {
  return (
    <div className="w-full h-26 flex flex-col content-center justify-between">
      <div className="w-full h-13 gap-5 flex flex-row justify-end">
        <div className="cursor-pointer w-30 h-10 rounded-4xl flex items-center justify-center text-sm border-solid border-1 border-black-">
          {academie}
        </div>
        <div className="cursor-pointer w-30 h-10 rounded-4xl flex items-center justify-center text-sm border-solid border-1 border-black-">
          {dag}
        </div>
      </div>
      <div className="w-full h-10 bg-neutral-300 flex flex-row gap-3 rounded-4xl overflow-x-auto whitespace-nowrap no-scrollbar">
        {data.leerlingen[academie]
          .filter((lln) => lln.lesdag === dag)
          .sort((a, b) => a.lesuur.localeCompare(b.lesuur))
          .map((leerling) => (
            <div
              key={leerling.llnId}
              onClick={() => setCurrentLeerling(leerling)} // nieuwe selectie
            >
              <Leerling
                name={leerling.name}
                selected={currentLeerling.llnId === leerling.llnId}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
