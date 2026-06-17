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
        <div>
          <p className="plate-code">{god.archiveId}</p>
          <h2>{god.name}</h2>
          <p>{god.domain}</p>
        </div>
        <div className="plate-body">
          <img src={`${import.meta.env.BASE_URL}plates/${god.plate}.svg`} alt="" />
          <dl>
            <div>
              <dt>Observed</dt>
              <dd>{god.specimen}</dd>
            </div>
            <div>
              <dt>Doctrine</dt>
              <dd>{god.doctrine}</dd>
            </div>
            <div>
              <dt>Exploit</dt>
              <dd>{god.exploit}</dd>
            </div>
          </dl>
        </div>
        <p className="plate-note">{god.historicalReading}</p>
      </article>
    </section>
  );
}
