import Link from "next/link";
import "./riple-button.css";

const RippleButton = () => {
  return (
    <Link
      class="btn"
      href="https://docs.google.com/document/d/1PpIZ7fbM7tI9MQ2dBNV7pOYG7c_130oRaCLjBEO86LA/edit?usp=sharing"
    >
      <span class="btn-border"></span>
      <span class="btn-ripple">
        <span></span>
      </span>
      <span class="btn-title">
        <span data-text="Resume">Resume</span>
      </span>
    </Link>
  );
};

export default RippleButton;
