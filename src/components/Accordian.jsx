import { FaChevronCircleDown } from "react-icons/fa";
import { useState } from "react";

function Accordian() {
  // State to track the visibility of each tab content
  const [tabVisibility, setTabVisibility] = useState({});

  // Function to toggle the visibility of a tab content
  const toggleTabContent = (tabIndex) => {
    setTabVisibility((prevState) => ({
      ...prevState,
      [tabIndex]: !prevState[tabIndex],
    }));
  };

  return (
    <div className="m-2 space-y-2">
      {/* First Tab */}
      <div
        className="group flex flex-col gap-2 rounded-lg bg-slate-gray p-5"
        tabIndex="1"
      >
        <div
          className="flex cursor-cell items-center justify-between "
          onClick={() => toggleTabContent(1)}
        >
          <span className="hover:text-liquid-lava duration-500">
            {" "}
            <strong>Web Developer</strong> <em>(2023 - Present)</em>{" "}
          </span>
          <FaChevronCircleDown
            size={15}
            className={`transition-all duration-500 ${
              tabVisibility[1] ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`${
            tabVisibility[1]
              ? "visible h-auto max-h-screen opacity-100 transition-all duration-1000"
              : "invisible h-auto max-h-0 opacity-0 transition-all duration-500"
          }`}
        >
          <br />
          <h6>
            <strong>ARCHIVE.pdf</strong> - <em>Remote</em>
          </h6>
          <br />
          <p className="text-left">
            - Completed numerous Trello tickets, demonstrating problem-solving
            skills and the ability to work under deadlines.
            <br />
            - Refactored and revised code to improve efficiency, readability,
            and maintainability.
            <br />
            - Utilized Git for version control, including creating branches and
            merging them after careful review.
            <br />
            - Participated in code QA reviews, ensuring the delivery of
            high-quality, error-free code.
            <br />
            - Collaborated with a team of developers, enhancing teamwork,
            communication, and project coordination skills.
            <br />- Gained hands-on experience with TypeScript, improving
            proficiency in statically typed languages.
          </p>
        </div>
      </div>

      {/* Second Tab */}
      <div
        className="group flex flex-col gap-2 rounded-lg bg-slate-gray p-5 "
        tabIndex="2"
      >
        <div
          className="flex cursor-cell items-center justify-between "
          onClick={() => toggleTabContent(2)}
        >
          <span className="hover:text-liquid-lava duration-500">
            {" "}
            <strong>Assistant Manager</strong> <em>(2017 - Present)</em>{" "}
          </span>
          <FaChevronCircleDown
            size={15}
            className={`transition-all duration-500 ${
              tabVisibility[2] ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`${
            tabVisibility[2]
              ? "visible h-auto max-h-screen opacity-100 transition-all duration-1000"
              : "invisible h-auto max-h-0 opacity-0 transition-all duration-500"
          }`}
        >
          <br />
          <h6>
            <strong>Action Rentals</strong> - <em>Waller, TX</em>
          </h6>
          <br />
          <p className="text-left">
            - Manage & maintain both{" "}
            <a
              className="underline hover:text-liquid-lava"
              href="https://www.actionrentalstx.com/ "
            >
              Action Rentals
            </a>{" "}
            and{" "}
            <a
              className="underline hover:text-liquid-lava"
              href="https://www.actionhosesupply.com/ "
            >
              Action Hose & Fittings
            </a>{" "}
            websites via Wordpress
            <br />
            - Opening, sorting, and routing incoming mail, answer correspondence
            and prepare outgoing mail.
            <br />
            - Coordinate or perform activities associated with shipping,
            receiving, distribution, or transportation.
            <br />
            - Maintain records pertaining to inventory, personnel, orders,
            supplies, or machine maintenance.
            <br />
            - Monitor inventory levels and requisition or purchase supplies as
            needed.
            <br />- Skilled relationship builder with the proven ability to work
            with different personality styles.
          </p>
        </div>
      </div>

      {/* Third Tab */}
      <div
        className="group flex flex-col gap-2 rounded-lg bg-slate-gray p-5 "
        tabIndex="3"
      >
        <div
          className="flex cursor-cell items-center justify-between "
          onClick={() => toggleTabContent(3)}
        >
          <span className="hover:text-liquid-lava duration-500">
            {" "}
            <strong>Production Assistant</strong> <em>(2020 - 2021)</em>{" "}
          </span>
          <FaChevronCircleDown
            size={15}
            className={`transition-all duration-500 ${
              tabVisibility[3] ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`${
            tabVisibility[3]
              ? "visible h-auto max-h-screen opacity-100 transition-all duration-1000"
              : "invisible h-auto max-h-0 opacity-0 transition-all duration-500"
          }`}
        >
          <br />
          <h6>
            <strong>Arena Theatre</strong> - <em>Houston, TX</em>
          </h6>
          <br />
          <p className="text-left">
            - Setup audio production elements
            <br />
            - Operated audio assets, including, but not limited to, lighting,
            sound, communication equipment, and backline band equipment
            <br />
            - Sets up and operated rotating stage operation for concerts and
            other events
            <br />
            - Shadow/Intern audio board operation during events, Assists in
            production staff for shows and events.
            <br />
            - Monitored condition of some equipment on stage during concert
            performances.
            <br />- Additional duties as assigned and collaborated with GM of
            Events & Production Sensitivity and understanding of diverse
            socioeconomic, cultural, disability, and ethnic backgrounds of venue
            management and staff, touring artist, producers, promoters, and
            production personnel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
