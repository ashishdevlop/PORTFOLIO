import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProfilePic1 from "../../img/profile1.jpg";
import ProfilePic2 from "../../img/profile2.jpg";
import ProfilePic3 from "../../img/profile3.jpg";
import ProfilePic4 from "../../img/profile4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  const clients = [
    {
      img: ProfilePic1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nisi, et quas ipsam dolorum sequi dolorem, velit, eligendi beatae dolore perferendis. Voluptate placeat totam voluptatum assumenda inventore. Nesciunt, quibusdam obcaecati!",
    },
    {
      img: ProfilePic2,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nisi, et quas ipsam dolorum sequi dolorem, velit, eligendi beatae dolore perferendis. Voluptate placeat totam voluptatum assumenda inventore. Nesciunt, quibusdam obcaecati!",
    },
    {
      img: ProfilePic3,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nisi, et quas ipsam dolorum sequi dolorem, velit, eligendi beatae dolore perferendis. Voluptate placeat totam voluptatum assumenda inventore. Nesciunt, quibusdam obcaecati!",
    },
    {
      img: ProfilePic4,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nisi, et quas ipsam dolorum sequi dolorem, velit, eligendi beatae dolore perferendis. Voluptate placeat totam voluptatum assumenda inventore. Nesciunt, quibusdam obcaecati!",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span> Exceptional Work </span>
        <span> from me ...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Pagination]}
        // modules={{ Pagination }}
        slidesPerView={1}
        // pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
