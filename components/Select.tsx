export default function Select({ data, onChange, text }) {
  return (
    <div>
      <h1 className="text-xs">{text}:</h1>
      <div className="rounded-lg w-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] flex item-center cursor-pointer">
        <select className="rounded-md px-2 py-1 text-base outline-none" onChange={onChange}>
          {data.map(({ emoji, name }, i: string) => {
            return (
              <option key={i} value={[emoji, name]}>
                {emoji}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
