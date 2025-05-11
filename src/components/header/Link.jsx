export default function Link({arrow, text = 'some text', toggleList, list}) {

  return (
    <>
      <a
        href="#"
        className=" text-nowrap peer"
        onClick={toggleList}
      >
        {text}
      </a>
      {arrow && (
        <svg
          className={`peer-hover:rotate-90 ${list ? 'rotate-90' : ''} hover:rotate-90 anim cursor-pointer`}
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9325 5.43213V13.2961H11.4325L11.4325 7.99279L5.2882 14.1371L4.22754 13.0764L10.3718 6.93213L5.06853 6.93213L5.06853 5.43213H12.9325Z"
            fill="url(#paint0_linear_9402_158)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_9402_158"
              x1="8.58001"
              y1="5.43213"
              x2="8.58001"
              y2="14.1371"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FB8627" />
              <stop offset="1" stopColor="#F5BEF6" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
}
