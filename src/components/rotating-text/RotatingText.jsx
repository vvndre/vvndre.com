// "use client";
import "./rotating-text.css";
import Head from "next/head";

const RotatingText = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="rounded-text rotating absolute inset-0 flex justify-center items-center">
        <svg viewBox="0 0 200 200">
          <path
            id="textPath"
            d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
            transform="translate(100,100)"
            fill="none"
          ></path>
          <g fontSize="1.156rem">
            <text textAnchor="start">
              <textPath href="#textPath" startOffset="0%">
                - Andre Castillon - Web Developer - UX / UI Designer
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </>
  );
};

export default RotatingText;
