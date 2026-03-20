import {AppConstants} from "../../../utils/AppConstants";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle'
import 'swiper/bundle'


const SliderComponent = () => {
    let imageUrl = AppConstants.BASE_IMG_URL + "slider/"
    return(
        <Swiper
            spaceBetween={-50}
            slidesPerView={5}
            effect={"coverflow"}
            coverflowEffect={{
                rotate:30,
                slideShadows:true,
                stretch:"10%",
                depth:100,
                scale:1
            }}
            loop={true}
            autoplay={{
                delay:2000
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 5,
                }
            }}
        >
            <SwiperSlide>
                <div style={{
                    backgroundImage: "url("+imageUrl + "1.jpg)",
                    width:"100%",
                    height:"50vh"
                }}>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{
                    backgroundImage: "url("+imageUrl + "2.jpg)",
                    width:"100%",
                    height:"50vh"
                }}>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{
                    backgroundImage: "url("+imageUrl + "3.jpg)",
                    width:"100%",
                    height:"50vh"
                }}>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{
                    backgroundImage: "url("+imageUrl + "4.jpg)",
                    width:"100%",
                    height:"50vh"
                }}>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{
                    backgroundImage: "url("+imageUrl + "1.jpg)",
                    width:"100%",
                    height:"50vh"
                }}>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{
                    backgroundImage: "url("+imageUrl + "2.jpg)",
                    width:"100%",
                    height:"50vh"
                }}>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{
                    backgroundImage: "url("+imageUrl + "3.jpg)",
                    width:"100%",
                    height:"50vh"
                }}>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{
                    backgroundImage: "url("+imageUrl + "4.jpg)",
                    width:"100%",
                    height:"50vh"
                }}>

                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderComponent;