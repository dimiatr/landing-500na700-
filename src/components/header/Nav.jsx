import { useRef } from "react";
import Link from "./Link";

export default function Nav({
  handleViewMenu,
  list,
  toggleList,
  addStyleLink,
  size,
}) {
  const accord = useRef(null);

  return (
    <nav>
      <ul className="flex flex-col md:flex-row md:items-center  text-white *:transition-all *:duration-200 *:ease-linear md:*:p-2.5 font-medium pt-[30px] md:pt-0 *:cursor-pointer">
        <li
          className={`flex items-center gap-1 hover:text-white/50 py-1.5 mb-2.5 md:py-0 md:mb-0`}
          onMouseEnter={size >= 768 ? () => handleViewMenu(true) : undefined}
          onMouseLeave={size >= 768 ? () => handleViewMenu(false) : undefined}
        >
          <Link arrow text="О нас" list={list} toggleList={toggleList} />
        </li>
        <li className=" md:hidden">
          <ul
            ref={accord}
            style={{
              height: list ? `${accord.current?.scrollHeight}px` : "0px",
            }}
            className={` overflow-hidden transition-all duration-[400ms] ease-linear flex flex-col gap-1.5 *:py-1.5 pb-1.5 px-5 leading-none *:cursor-pointer `}
          >
            <li>
              <Link text="О 500на700" />
            </li>
            <li>
              <Link text="Документы" />
            </li>
            <li>
              <Link text="Устойчивое развитие" />
            </li>
            <li>
              <Link text="Команда" />
            </li>
            <li>
              <Link text="Стратегия" />
            </li>
          </ul>
        </li>
        <li
          className={`flex items-center gap-1 ${addStyleLink()} py-1.5 mb-2.5 md:py-0 md:mb-0`}
        >
          <Link arrow text="Проекты" />
        </li>
        <li className={`${addStyleLink()} py-1.5 mb-2.5 md:py-0 md:mb-0`}>
          <Link text="Новости" />
        </li>
        <li className={`${addStyleLink()} py-1.5 mb-2.5 md:py-0 md:mb-0`}>
          <Link text="FAQ" />
        </li>
        <li className={`${addStyleLink()} py-1.5 md:py-0 md:mb-0`}>
          <Link text="Контакты" />
        </li>
      </ul>
    </nav>
  );
}
