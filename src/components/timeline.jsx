import React from "react";
import "./timeline.scss";

const Timeline = () => {
  // const [year, setYear] = useState(new Date().getFullYear());

  // useEffect(() => {
  //   return () => {
  //     setYear(new Date().getFullYear());
  //   };
  // }, [year]);

  const events = [
    {
      eventPeriod: "2003-2008",
      eventTitle: "Elementary Education",
      institution: "Cerro Viento Bilingual School"
    },
    {
      eventPeriod: "2009-2014",
      eventTitle: "Bachelor of Commerce with emphasis in computer science",
      institution: "Cerro Viento Bilingual School"
    },
    {
      eventPeriod: "2015-20XX",
      eventTitle: "Licenciatura en desarrollo de software",
      institution: "Technological University of Panama"
    }
  ];

  return (
    <div id="education" className="timeline-container">
      <div id="heading">
        <p>Education</p>
      </div>
      {events.map((element, index) => {
        return (
          <div key={index} className="timeline-item-wrapper">
            <div className="item-space" />
            <div className="timeline-item">
              <div className="line-wrapper">
                <div className="bullet" />
                <div className="line" />
              </div>
              <div className="timeline-info">
                <div className="period">{element.eventPeriod}</div>
                <p className="title">{element.eventTitle}</p>
                <div className="desc">{element.institution}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="today">{/* <p>{year}</p> */}</div>
    </div>
  );
};

export default Timeline;
