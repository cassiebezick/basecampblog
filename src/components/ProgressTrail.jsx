import { trailData } from "../data/trailData";

function ProgressTrail() {
  return (
    <section className="progress-trail">
      <p className="section-label">
        The Trail Ahead
      </p>

      <div className="trail">
        {trailData.map((waypoint) => (
          <div
            className="trail__waypoint"
            key={waypoint.id}
          >
            <div className="trail__marker"></div>

            <h3>{waypoint.name}</h3>

            <p>{waypoint.skill}</p>

            {waypoint.elevation && (
              <span>
                {waypoint.elevation.toLocaleString()}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgressTrail;