import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import ButtonSlide from './ButtonSlide';

export default function NewsSlider({ news, formatDate, size, idPage, fullNews , openPage}) {
  const swiper = useSwiper();

  return (<>
    {!fullNews && <Swiper
      modules={[Grid, Navigation]}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          grid: {
            rows: 1,
            fill: 'row',
          },
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 3,
            fill: 'row',
          },
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 32,
        },
      }}
    >
      {news?.map((item) => (
        <SwiperSlide key={item.id}>
          <article className="group cursor-pointer flex flex-col gap-5" onClick={() => openPage(item.id)}>
            <img src={item.image} alt={item.title} className="mb-2 w-full" />
            <div className="flex flex-col gap-2.5">
              {size <= 768 ? <h3 className="font-semibold group-hover:text-transparent bg-clip-text bg-gradient-to-t from-firmViolet to-firmOrange anim">{item.title}</h3> : <h2 className="font-semibold group-hover:text-transparent bg-clip-text bg-gradient-to-t from-firmViolet to-firmOrange anim">{item.title}</h2>}
              <p className="text-sm text-white/50 leading-[130%] line-clamp-3">{item.description}</p>
            </div>
            <span className="mt-auto">{formatDate(item.date)}</span>
          </article>
        </SwiperSlide>
      ))}
      <ButtonSlide />
    </Swiper>}
    {fullNews && <NewsPage idPage={idPage} />}
  </>
  );
}
