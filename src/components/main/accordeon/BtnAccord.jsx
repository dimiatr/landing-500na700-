import { useRef, useState, useEffect } from "react";

export default function BtnAccord({ arrow, text, isOpen, onClick, desc }) {
  const accord = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0); 

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(accord.current.scrollHeight); 
    } else {
      setMaxHeight(0); 
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center justify-between gap-5 group cursor-pointer">
        <button
          href="#"
          className={`min-h-24 uppercase md:text-lg lg:text-xl font-semibold cursor-pointer text-start ${isOpen ? 'text-white/50' : 'hover:text-white/50'} anim`}
          onClick={onClick}
        >
          {text}
        </button>
        {arrow && (
          <svg
            className={`group-hover:rotate-90 ${isOpen ? 'rotate-90' : ''} hover:rotate-90 anim cursor-pointer shrink-0`}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.865 9.86426V25.5922H22.865L22.865 14.9856L10.5764 27.2742L8.45508 25.1528L20.7437 12.8643L10.1371 12.8643L10.1371 9.86426H25.865Z"
              fill="url(#paint0_linear_5402_503)"
            />
            <defs>
              <linearGradient id="paint0_linear_5402_503" x1="17.16" y1="9.86426" x2="17.16" y2="27.2742" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FB8627" />
                <stop offset="1" stopColor="#F5BEF6" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {desc && (
        <p
          ref={accord}
          style={{
            maxHeight: isOpen ? `${maxHeight}px` : "0px", 
          }}
          className="max-w-[580px] pb-[30px] overflow-hidden transition-all duration-[400ms] ease-linear text-sm md:text-base"
        >
          {desc}
        </p>
      )}
    </>
  );
}
