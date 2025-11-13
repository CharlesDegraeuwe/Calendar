export default function Leerling({ name, selected }) {
  if (selected) {
    return (
      <span
        className="cursor-pointer w-fit pl-5 pr-5 h-10 text-white bg-gray-800 rounded-4xl flex items-center justify-center text-sm border-solid border-1 border-black-
      "
      >
        {name}
      </span>
    );
  } else {
    return (
      <span className="cursor-pointer w-fit pl-5 pr-5 h-10 bg-white hover:bg-gray-200 rounded-4xl flex items-center justify-center text-sm border-solid border-1 border-black-">
        {name}
      </span>
    );
  }
}
