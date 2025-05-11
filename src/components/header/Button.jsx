export default function Button({
  type = "button",
  text,
  colorsText = { white: "text-white", black: "text-black" },
  colorText,
  bgColors = { black: "bg-black", white: "bg-white" },
  colorBg,
  children,
  onClick,
}) {
  return (
    <>
      {children ? (
        <button type={type} onClick={onClick} className="cursor-pointer">{children}</button>
      ) : (
        <button
          type={type}
          className={`${colorsText[colorText]} bg-gradient-to-t from-firmViolet to-firmOrange p-[1px] font-medium rounded-[40px] cursor-pointer w-fit`}
          onClick={onClick}
        >
          <div
            className={`${bgColors[colorBg]} px-[19px] py-[11px] hover:bg-transparent anim rounded-[40px]`}
          >
            {text}
          </div>
        </button>
      )}
    </>
  );
}
