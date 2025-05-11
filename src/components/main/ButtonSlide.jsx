import { useSwiper } from 'swiper/react';

export default function ButtonSlide() {
    const swiper = useSwiper();

    return (<div className='flex items-center gap-5'>
        <button type="button" className=' py-4 cursor-pointer' onClick={() => swiper?.slidePrev()}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.39458 20.3559L19.3534 31.3147L21.4438 29.2244L14.0533 21.834H31.1781L31.1781 18.8778L14.0533 18.8778L21.4438 11.4874L19.3534 9.39706L8.39458 20.3559Z" fill="white" />
            </svg>
        </button>
        <button type="button" className=' py-4 cursor-pointer' onClick={() => swiper?.slideNext()}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M31.6054 20.3559L20.6466 31.3147L18.5562 29.2244L25.9467 21.834L8.82189 21.834L8.82189 18.8778L25.9467 18.8778L18.5562 11.4874L20.6466 9.39706L31.6054 20.3559Z" fill="white" />
            </svg>
        </button>
    </div>
    );
}