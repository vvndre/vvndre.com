import Link from "next/link";
import "./riple-button.css";

const RippleButton = () => {
  return (
    <Link
      className="btn"
      href="https://docs.google.com/document/d/1sJbuhwyyo0p2P4GNqTjXYrYzRpys7D9kP8Q988KVZmY/edit?usp=sharing"
    >
      <span className="btn-border"></span>
      <span className="btn-ripple">
        <span></span>
      </span>
      <span className="btn-title">
        <span data-text="Resume">Resume</span>
      </span>
    </Link>
  );
};

export default RippleButton;
