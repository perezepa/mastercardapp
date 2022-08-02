import React, {useState, useEffect} from 'react';
import '../App.css';

// Importar imagenes
import img1 from '../img/BL-Martercard-Evento-LOGO1.png';
import img2 from '../img/BL-Martercard-Evento-Asset-Mobile1.png';
import img3 from '../img/BL-Martercard-Evento-Asset-Desktop.png';

const FuturoCripto = () => {

    return ( 
        <div className=' relative border h-boxmain md:relative h-boxmain-sm h-boxmain-md h-boxmain-lg h-boxmain-xl 2xl:h-96'>
            <div className=' absolute w-full bg-gray h-full flex justify-center items-start px-1 xl:pt-0 '>
                <div className=' absolute w-full h-64 flex flex-col justify-start items-center md:grid grid-cols-2 md:grid-rows-1 pl-xl'>
                    <div className=' pt-6 md:col-start-1 col-end-2 row-start-1 row-end-1 md:flex-col md:self-start md:justify-self-left md:pl-8 md:pt-14 xl:pt-14 xl:pl-0'>
                        <img className='w-20 h-8 object-contain md:object-left' loading="lazy" decoding="async" src={img1} lazyalt="imagen" />
                    </div>
                    <div className=' w-auto h-24 pt-6 md:col-start-1 col-end-2 row-start-1 row-end-1 md:flex-col md:pl-8 xl:pt-8 xl:pl-0'>
                        <h2 className='text-4xl font-medium leading-8 text-white text-center flex flex-col md:text-left md:text-5xl md:font-medium md:tracking-wide wh2-lg size-h2-lg wh2-xl xl:font-medium size-h2-xl lineheight-h2-xl xl:tracking-wider 2xl:text-8xl 2xl:leading-none' >El futuro de la criptoeconomía <span className='text-lg col-yellow-primary text-center leading-8 pt-1 md:text-left md:text-2xl md:tracking-normal lg:text-3xl xl:pt-3 2xl:text-4xl 2xl:pt-3' >en América Latina y el Caribe</span></h2>
                    </div>
                    <div className=' w-3/4 h-auto pt-12 object-cover sm:pt-4 md:col-start-2 md:col-end-3 md:row-start-1 row-end-1 md:w-full md:object-cover md:h-80 md:pt-0 xl:pt-0'>
                        <picture>
                            <img className='w-auto h-auto m-auto md:hidden ' loading="lazy" decoding="async" src={img2} lazyalt="imagen" />
                            <img className='hidden md:block md:m-auto md:object-cover m-imgdesktop-md m-imgdesktop-xl' loading="lazy" decoding="async" src={img3} lazyalt="imagen" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FuturoCripto;