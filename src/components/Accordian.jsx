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
            <strong>Full Stack Developer</strong> <em>(2023 - Present)</em>{" "}
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
            - Led the development and integration of a newsletter feature using Strapi CMS and NextJS, designing components and
            creating comprehensive design documentation. Managed ticket workflows, processing over 2,500 email entries.
            <br />
            <br />
            - Modernized ARCHIVE.pdf's front-end using React and NextJS, reducing page load times by 70% and improved user
            retention by 20%, leading to increased accessibility and engagement
            <br />
            <br />
            - Introduced TypeScript, leveraging generics and interfaces to enhance code reliability and maintainability, reducing
            errors and improving team productivity.
            <br />
            <br />
            - Participated in code QA reviews, ensuring the delivery of
            high-quality, error-free code.
            <br />
            <br />
            - Collaborated with design and content teams to ensure smooth handoff and integration of new features, improving
            overall project efficiency and alignment between departments.
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
            <strong>Web Developer & Assistant Manager</strong> <em>(2017 - Present)</em>{" "}
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
            <br />
            - Implemented user-focused design principles to enhance WordPress functionality, optimizing image loading
            and streamlining navigation, which led to a 45% improvement in site load speed.
            <br />
            <br />
            - Directed the maintenance of the local business website, ensuring current content and optimal performance. Elevated
            search engine rankings and increased website engagement metrics by 79% through strategic updates.
            <br />
            <br />
            - Supervised the setup and maintenance of e-commerce platform, utilizing WooCommerce for seamless transactions,
            resulting in a 15% increase in average order value and a decrease in customer service response time.
            <br />
            <br />
            - Performed regular website audits to identify areas for improvement and ensure compliance with the latest
            web standards
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
            - Operated & Setup audio assets, including, but not limited to, lighting,
            sound, communication equipment, and backline band equipment
            <br />
            <br />
            - Sets up and operated rotating stage operation for concerts and
            other events
            <br />
            <br />
            - Shadow/Intern audio board operation during events, Assists in
            production staff for shows and events.
            <br />
            <br />
            - Monitored condition of some equipment on stage during concert
            performances.
            <br />
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
