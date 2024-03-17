// import React from "react";
// import { Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import patientAvatar from "../../assets/images/patient-avatar.png";
// import { Histar } from "react-icons/hi";

// const Testimonial = () => {
//   return (
//     <div className="mt-[30px] lg:mt-[55px]">
//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   Muhibur Rahman
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonial;



import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
import { useEffect, useState } from 'react';



const Testimonial = () => {

  const [pad2,setPad2] = useState("4rem")
  const [page2,setPage2] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPad2("1rem")
        setPage2(1)
      } else {
        setPad2("1rem");
        setPage2(3)
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div className="mt-[30px] lg:mt-[55px]">
     <Splide
      hasTrack={false}
            aria-label="..."
            options={{
              perPage: page2,
            padding:pad2,
              pagination: true,
             autoplay:true,
             rewindSpeed:12,
             perMove:1

            }}
     >

      <SplideTrack>
      <SplideSlide>
          <div className="py-[30px] mx-[40px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical serives from them .They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical serives from them .They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical serives from them .They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical serives from them .They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical serives from them .They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                  <HiStar className="text-yellowColor gap-[2px]" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical serives from them .They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SplideSlide>
      </SplideTrack>
      </Splide>
    </div>
  );
};
export default Testimonial;

