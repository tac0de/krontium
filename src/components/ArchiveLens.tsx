import { useState } from "react";
import { gods } from "../data/krontium";

export default function ArchiveLens() {
  const [active, setActive] = useState(0);
  const god = gods[active];

  return (
    <section className="signal-lens" aria-label="Krontium CSS signal selector">
      <div className="signal-lens__controls" role="tablist" aria-label="Signals">
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
      <article className="signal-lens__stage" data-signal={god.plate}>
        <div className="signal-art" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="signal-copy">
          <p className="mono">{god.archiveId}</p>
          <h2>{god.name}</h2>
          <p>{god.domain}</p>
          <dl>
            <div>
              <dt>Material</dt>
              <dd>{god.specimen}</dd>
            </div>
            <div>
              <dt>Rule</dt>
              <dd>{god.doctrine}</dd>
            </div>
            <div>
              <dt>Behavior</dt>
              <dd>{god.exploit}</dd>
            </div>
          </dl>
        </div>
      </article>
    </section>
  );
}
