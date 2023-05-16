import "./ExperienceStyle.css";

const Experience = () => {
  return (
    <section className="experience-section" id="about">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="container">
        <div className="section_title center">
          <p>Why choose me</p>
          <h2>my experience area</h2>
        </div>
        <div className="experience-items">
          <div className="experience-item">
            <div className="experience-info">
              <p>React</p>
              <p>50%</p>
            </div>
            <div className="progress-line" data-percent="50%">
              <span style={{ width: "50%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>Javascript</p>
              <p>50%</p>
            </div>
            <div className="progress-line" data-percent="50%">
              <span style={{ width: "50%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>HTML</p>
              <p>60%</p>
            </div>
            <div className="progress-line" data-percent="60%">
              <span style={{ width: "60%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>CSS</p>
              <p>55%</p>
            </div>
            <div className="progress-line" data-percent="55%">
              <span style={{ width: "55%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>Python</p>
              <p>40%</p>
            </div>
            <div className="progress-line" data-percent="40%">
              <span style={{ width: "40%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>Chakra Ui</p>
              <p>40%</p>
            </div>
            <div className="progress-line" data-percent="40%">
              <span style={{ width: "40%" }}></span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-info">
              <p>MySql</p>
              <p>40%</p>
            </div>
            <div className="progress-line" data-percent="40%">
              <span style={{ width: "40%" }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
