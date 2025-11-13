import { useState, useEffect } from "react";
import Leftportal from "./Leftportal/Leftportal.jsx";
import Centerportal from "./Centerportal/Centerportal.jsx";
import Rightportal from "./Rightportal/Rightportal.jsx";
import Topbar from "./Topbar/Topbar.jsx";

export default function Lesoverzicht({ data }) {
  const next = bepaalDag(data);

  const [currentLeerling, setCurrentLeerling] = useState(next.leerling);
  const [currentHuiswerk, setCurrentHuiswerk] = useState(null);

  // telkens als de leerling wijzigt, pak laatste huiswerk
  useEffect(() => {
    if (currentLeerling?.huiswerk?.length > 0) {
      setCurrentHuiswerk(
        currentLeerling.huiswerk[currentLeerling.huiswerk.length - 1]
      );
    } else {
      setCurrentHuiswerk(null);
    }
  }, [currentLeerling]);

  return (
    <div className="p-25 pl-50 pr-50 max-w-full h-screen">
      <div className="max-w-full h-fit">
        <Topbar
          data={data}
          dag={next.dag}
          academie={next.academie}
          currentLeerling={currentLeerling}
          setCurrentLeerling={setCurrentLeerling}
        />
      </div>
      <div className="flex flex-row gap-5 justify-center items-center max-w-full h-fit pt-10">
        <Leftportal
          currentLeerling={currentLeerling}
          currentHuiswerk={currentHuiswerk}
          setCurrentHuiswerk={setCurrentHuiswerk} // callback meegeven
        />
        <Centerportal huiswerk={currentHuiswerk} />
        <Rightportal />
      </div>
    </div>
  );
}

function bepaalDag(data) {
  const daysOfWeek = [
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
    "Zondag",
  ];
  const datum = new Date();
  const academies = data.academies;

  let nowDayIndex = (datum.getDay() + 6) % 7; // zondag=0 -> 6
  let nowTime = datum.getHours() * 60 + datum.getMinutes(); // huidige tijd in minuten

  let nextLesson = null; // object {academie, dag, uur, diffMinutes}

  academies.forEach((academie) => {
    data.leerlingen[academie].forEach((leerling) => {
      let lesDagIndex = daysOfWeek.indexOf(leerling.lesdag);
      let [lesUur, lesMin] = leerling.lesuur.split(":").map(Number);
      let lesTijd = lesUur * 60 + lesMin;

      // bereken verschil in minuten van nu tot les
      let dayDiff = lesDagIndex - nowDayIndex;
      if (dayDiff < 0) dayDiff += 7; // rondloop naar volgende week
      let diffMinutes = dayDiff * 24 * 60 + (lesTijd - nowTime);

      if (diffMinutes < 0) diffMinutes += 7 * 24 * 60; // veiligheidscheck

      if (!nextLesson || diffMinutes < nextLesson.diffMinutes) {
        nextLesson = {
          academie,
          dag: leerling.lesdag,
          uur: leerling.lesuur,
          leerling,
          diffMinutes,
        };
      }
    });
  });
  return nextLesson;
}
