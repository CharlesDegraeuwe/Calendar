export default function Les({ les, selected }) {
  if (selected) {
    return (
      <div className="cursor-pointer w- h-10 gap-3 text-white bg-gray-800 text-sm flex flex-row items-center not-odd:gap-2 p-3 border-solid border-black border-1 rounded-3xl">
        <div>{les.date}</div>
        <span>-</span>
        <div>{les.werk}</div>
      </div>
    );
  } else {
    return (
      <div className="cursor-pointer w- h-10 gap-3 bg-white hover:bg-gray-200 text-sm flex flex-row items-center not-odd:gap-2 p-3 border-solid border-black border-1 rounded-3xl">
        <div>{les.date}</div>
        <span>-</span>
        <div>{les.werk}</div>
      </div>
    );
  }
}
