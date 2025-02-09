function Footer() {
  return (
    <footer className="sticky bg-dark-void border-t border-snow-white sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 antialiased">
      <p className="mb-4 text-sm text-center sm:mb-0">
        &copy; 2022-{new Date().getFullYear()}{" "}
        <a
          href="https://vvndre.com/"
          className="hover:underline hover:text-liquid-lava"
          target="_blank"
        >
          vvndre.com
        </a>
        . All rights reserved.
      </p>
      <div className="flex justify-center items-center space-x-1">
        <a
          href="https://www.linkedin.com/in/andre-castillon/"
          data-tooltip-target="tooltip-linkedin"
          className="inline-flex justify-center p-2 rounded-lg text-dusty-gray hover:text-liquid-lava duration-300 hover:bg-snow-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Linkedin</span>
        </a>
        <div
          id="tooltip-linkedin"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        >
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          href="https://github.com/vvndre"
          data-tooltip-target="tooltip-github"
          className="inline-flex justify-center p-2 rounded-lg text-dusty-gray hover:text-liquid-lava duration-300 hover:bg-snow-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Github</span>
        </a>
        <div
          id="tooltip-github"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip "
        >
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
