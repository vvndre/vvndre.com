import { FaChevronCircleDown } from "react-icons/fa";

function Accordian() {
  return (
    <div className="my-2 space-y-2">
      <div
        className="group flex flex-col gap-2 rounded-lg bg-slate-gray p-5"
        tabIndex="1"
      >
        <div className="flex cursor-cell items-center justify-between ">
          <span className="hover:text-liquid-lava duration-500">
            {" "}
            <srong>Web Developer</srong> <em>(2023 - Present)</em>{" "}
          </span>
          <FaChevronCircleDown
            size={15}
            className="transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          <br />
          <h6>ARCHIVE.pdf - Remote</h6>
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

      <div
        className="group flex flex-col gap-2 rounded-lg bg-slate-gray p-5 "
        tabIndex="2"
      >
        <div classname="flex cursor-cell items-center justify-between">
          <span className="hover:text-liquid-lava duration-500">
            {" "}
            <srong>Assistant Manager</srong> <em>(2017 - Present)</em>{" "}
          </span>
          <FaChevronCircleDown
            size={15}
            className="transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          <br />
          <h6>Action Rentals - Waller, TX</h6>
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

      <div
        className="group flex flex-col gap-2 rounded-lg bg-slate-gray p-5 "
        tabIndex="3"
      >
        <div className="flex cursor-cell items-center justify-between">
          <span className="hover:text-liquid-lava duration-500">
            {" "}
            <srong>Production Assistant</srong> <em>(2020 - 2021)</em>{" "}
          </span>
          <FaChevronCircleDown
            size={15}
            className="transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          <br />
          <h6>Arena Theatre - Houston, TX</h6>
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
