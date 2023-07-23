import { useEffect, useState } from "react";

const ResearchPaper = () => {
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    fetch("researchInfo.json")
      .then((res) => res.json())
      .then((data) => setResearches(data));
  });
  return (
    <div className="py-20 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {researches.map((research) => (
          <div className="hero  bg-base-200" key={research.id}>
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={research.research_img}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <p className="">{research.published_date}</p>
                <p>{research.author_name}</p>
                <a
                  className="text-2xl font-bold"
                  href={research.research_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {research.research_name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPaper;
