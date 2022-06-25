export default function Select({ data, onChange, text }) {
  return (
    <div>
      <h1 className="text-xs">{text}:</h1>
      <div className="rounded-lg w-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] flex item-center cursor-pointer">
        <select className="rounded-lg px-2 py-1 text-xl outline-none" onChange={onChange}>
          {data.map((el, i) => (
            <option key={i} value={el.emoji}>
              {el.emoji}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
