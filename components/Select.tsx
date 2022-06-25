import { Flags } from '@data/Flags';

export default function Select({ onChange }) {
  return (
    <select className="rounded-lg px-2 py-2  text-2xl outline-none" onChange={onChange}>
      {Flags.map((el, i) => (
        <option key={i} value={el.emoji}>
          {el.emoji}
        </option>
      ))}
    </select>
  );
}
