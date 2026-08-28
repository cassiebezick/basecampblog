import { trailData } from "../data/trailData";

function ProgressTrail() {
  return (
    <section className="progress-trail">
      <div className="progress-trail__header">
         <p className="progress-trail__eyebrow">
            Trail Map
          </p>
          
        <span className="progress-trail__status">
          Learning in progress
        </span>
     </div>

        <div className="trailcontent__wrapper">
        
        <div className="trailcontent__copy">
          <h2>The Trail Ahead</h2>

          <p className="progress-trail__intro">
            A look at where I’ve been, what I’m learning,
            and where I’m headed next.
          </p>
      
        </div>

      

      <div className="trail">
        <div className="trail__line"></div>

        {trailData.map((waypoint, index) => (
          <div
            className="trail__waypoint"
            key={waypoint.id}
          >
            <div className="trail__marker">
              <span>{index + 1}</span>
            </div>

            <div className="trail__waypoint-content">
              <p className="trail__step">
                Mile {index + 1}
              </p>

              <h3>{waypoint.name}</h3>

              <p>{waypoint.skill}</p>

              {waypoint.elevation && (
                <span className="trail__elevation">
                  △ {waypoint.elevation.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default ProgressTrail;