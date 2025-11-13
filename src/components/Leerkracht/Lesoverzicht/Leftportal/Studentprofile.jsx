export default function Studentprofile({ currentLeerling }) {
  console.log(currentLeerling);
  return (
    <div className="rounded-3xl w- h-1/5 border-solid border-black border-1  flex flex-row items-center gap-5 p-5">
      <div className="rounded-full bg-white w-23 h-23 order-solid border-black border-1 "></div>
      <div className="flex flex-col h-full">
        <span className="text-sm text-gray-500">{currentLeerling.graad}</span>
        <span>{currentLeerling.name}</span>
      </div>
    </div>
  );
}
