import Les from "./Les.jsx";

export default function Overview({
  currentLeerling,
  currentHuiswerk,
  setCurrentHuiswerk,
}) {
  let overzicht = "Lessenoverzicht";
  const lessen = currentLeerling.huiswerk;
  console.log("dit is het id", currentHuiswerk);
  return (
    <div className="rounded-3xl w-full h-2/6 border-solid border-black border-1 flex flex-col items-baseline p-5 gap-3">
      <span>{overzicht}</span>
      <div className="flex flex-col gap-2 w-full overflow-y-scroll no-scrollbar">
        {lessen
          .map((les) => (
            <div
              key={les.id}
              onClick={() => setCurrentHuiswerk(les)} // bij klik: update state
              className="cursor-pointer"
            >
              <Les les={les} selected={currentHuiswerk?.id === les.id} />
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}
