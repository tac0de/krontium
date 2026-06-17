import { useState } from "react";
import { gods } from "../data/krontium";

export default function ArchiveLens() {
  const [active, setActive] = useState(0);
  const god = gods[active];

  return (
    <section className="lens" aria-label="Ancient gods archive lens">
      <div className="lens__controls" role="tablist" aria-label="Ancient gods">
        {gods.map((item, index) => (
          <button
            className={index === active ? "is-active" : ""}
            key={item.name}
            role="tab"
            type="button"
            aria-selected={index === active}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.name}
          </button>
        ))}
      </div>
      <article className="lens__plate">
        <p>{god.domain}</p>
        <h2>{god.name}</h2>
        <div className="specimen" data-index={active} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <p>{god.form}</p>
        <p>{god.historicalReading}</p>
      </article>
    </section>
  );
}
