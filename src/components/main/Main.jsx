import { useState } from "react";
import NewsSlider from "./NewsSlider";
import Button from "../header/Button";
import BtnAccord from "./accordeon/BtnAccord";

export default function Main({ news, size }) {

    const [fullNews, setFullNews] = useState(false)
    const [idPage, setIdPage] = useState(1)
    const [openAccord, setOpenAccord] = useState(null)
  

    const arrAccord = [{
        id: 0,
        text: 'Какие услуги предоставляет ваша студия?',
        desc: 'Мы придерживаемся высоких стандартов качества и стремимся создавать уникальный дизайн, отвечающий потребностям и ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют свои навыки и следят за новыми трендами в дизайне.'
    }, {
        id: 1,
        text: 'Как вы обеспечиваете качество и уникальность дизайна?',
        desc: 'Мы придерживаемся высоких стандартов качества и стремимся создавать уникальный дизайн, отвечающий потребностям и ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют свои навыки и следят за новыми трендами в дизайне.'
    }, {
        id: 2,
        text: 'Предоставляете ли вы услуги по созданию контента для сайтов и приложений?',
        desc: 'Мы придерживаемся высоких стандартов качества и стремимся создавать уникальный дизайн, отвечающий потребностям и ожиданиям наших клиентов. Наши дизайнеры постоянно совершенствуют свои навыки и следят за новыми трендами в дизайне.'
    }]

    function formatDate(dateString) {
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];

        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    function togglePage() {
        setFullNews(prev => !prev)
    }

    function openPage(id) {
        togglePage()
        setIdPage(id - 1)
    }

    function NewsPage({ idPage, togglePage }) {
        return <div className="flex flex-col md:flex-row items-start gap-5 py-10 md:pb-0 md:pt-[70px] max-w-[956px] w-full text-white">
            <img src={news[idPage].image} alt={news[idPage].title} className=" w-full md:w-[370px] lg:w-full" />
            <div className="flex flex-col gap-10">
                <article key={news[idPage]} className=" group cursor-pointer flex flex-col gap-10">
                    <h2 className="font-semibold group-hover:text-transparent bg-clip-text bg-gradient-to-t from-firmViolet to-firmOrange anim">{news[idPage].title}</h2>
                    <span className="mt-auto">{formatDate(news[idPage].date)}</span>
                    <div className="flex flex-col gap-5">
                        <p className="text-sm text-white/50 leading-[130%]">{news[idPage].description}</p>
                        <p className="text-sm text-white/50 leading-[130%]">{news[idPage].fullDescription}</p>
                    </div>
                </article>
                <Button text='назад' colorText="white"
                    colorBg="black" onClick={togglePage} />
            </div>
        </div>
    }

    function toggleAccord(index) {
        setOpenAccord(prev => prev === index ? null : index)
    }

    return <>
        <main className="flex-1 px-2.5 md:px-10 container text-white">
            {!fullNews && <>
                {size > 768 && <div className=" pt-10">
                    <h2 className="font-semibold uppercase pb-[58px]">Новости</h2>
                    {news ? <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                        {news?.map((item) => (
                            <article key={item.id} onClick={() => openPage(item.id)} className="group cursor-pointer flex flex-col gap-5">
                                <img src={item.image} alt={item.title} className="mb-2 w-full" />
                                <div className="flex flex-col gap-2.5">
                                    <h2 className="font-semibold group-hover:text-transparent bg-clip-text bg-gradient-to-t from-firmViolet to-firmOrange anim">{item.title}</h2>
                                    <p className="text-sm text-white/50 leading-[130%] line-clamp-3">{item.description}</p>
                                </div>
                                <span className="mt-auto">{formatDate(item.date)}</span>
                            </article>
                        ))}
                    </div> : <p className="text-center py-10 px-2.5">Loading...</p>}
                </div>}
                {size <= 768 && <div className=" pt-10">
                    <h2 className="font-semibold uppercase pb-[30px]">Новости</h2>
                    {news ? <NewsSlider idPage={idPage} fullNews={fullNews} openPage={openPage} news={news} size={size} formatDate={formatDate} /> : <p className="text-center py-10 px-2.5">Loading...</p>}
                </div>}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-5 pt-[170px] pb-[150px]">
                    <h1 className=" md:col-span-2 font-semibold">FAQ</h1>
                    <div className=" md:col-span-4 flex flex-col ">
                        {arrAccord.map((el, index) => <BtnAccord key={el.id} arrow text={el.text} isOpen={openAccord === index} onClick={() => toggleAccord(index)} desc={openAccord === index ? el.desc : ''} />)}
                    </div>
                </div>
            </>}
            {fullNews && <NewsPage togglePage={togglePage} idPage={idPage} />}
        </main>
    </>
}