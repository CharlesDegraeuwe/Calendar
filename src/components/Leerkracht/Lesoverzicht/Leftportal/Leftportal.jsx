import Studentprofile from "./Studentprofile.jsx";
import Overview from "./Overview.jsx";
import Calendar from "./Calendar.jsx";

export default function Leftportal({
  currentLeerling,
  currentHuiswerk,
  setCurrentHuiswerk,
}) {
  return (
    <div className="h-170 w-2/8 flex flex-col gap-5 justify-around">
      <Studentprofile currentLeerling={currentLeerling} />
      <Overview
        currentLeerling={currentLeerling}
        currentHuiswerk={currentHuiswerk}
        setCurrentHuiswerk={setCurrentHuiswerk}
      />
      <Calendar />
    </div>
  );
}
