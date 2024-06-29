/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { Rating } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Testimonial {
  name: string;
  content: string;
  profesi: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    content: "This is an amazing product! Highly recommend to everyone.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    profesi: "Dosen",
  },
  {
    name: "Jane Smith",
    content: "Excellent service and quality. Will buy again.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    profesi: "Dosen",
  },
  {
    name: "Bob Johnson",
    content: "Good value for the price.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
    profesi: "Dosen",
  },
];

const TestimonialCarousel: React.FC = () => {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <>
      <section className="lg:mt-[180px] mt-[20vh] lg:mb-[100px] mb-[30vh] relative" id="testimonials">
        <div>
          <svg width="1440" height="1243" className="absolute top-0 left-0 object-cover lg:translate-y-[-280px] lg:translate-x-0 translate-y-[-200px] w-full z-0" viewBox="0 0 1440 1243" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-691.598 1157.95C-695.543 1134.68 -682.122 792.905 -557.782 509.924C-446.168 256.266 -186.616 111.697 117.161 294.01C442.648 489.404 723.401 509.053 949.782 452.055C1173.2 395.545 1321.77 225.274 1388.5 116.699C1533.32 -117.933 1747.25 27.199 1672.1 335.907C1636.65 479.51 1543.18 519.66 1381.21 534.56C1211.91 550.135 961.775 517.074 614.835 584.45C280.245 649.682 -96.2807 806.345 -308.006 1005.76C-533.333 1218.16 -658.564 1361 -691.598 1157.95Z"
              fill="#FFE6E6"
            />
            <defs>
              <linearGradient id="paint0_linear_832_27" x1="406.392" y1="114.937" x2="562.407" y2="1060.8" gradientUnits="userSpaceOnUse">
                <stop stopColor="#554994" />
                <stop offset="1" stopColor="#F675A8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center z-auto">
          <p className="text-xl font-semibold text-pink-400 mb-4 uppercase">Testimonials</p>
          <h2 className="text-4xl font-bold text-center mb-4">{t("Testimoni.title")}</h2>
        </div>
        <div className="w-full max-w-4xl mx-auto lg:py-10 py-11 z-50">
          <Carousel slideSize="70%" align="center" height={200} slideGap="md" controlsOffset="xl" loop dragFree withIndicators>
            {testimonials.map((testimonial, index) => (
              <Carousel.Slide key={index}>
                <div className="flex flex-col items-center justify-center lg:h-full">
                  <img src={testimonial.image} className="w-20 h-20 rounded-full object-cover" alt={testimonial.name} fetchPriority="high" loading="lazy" />
                  <p className="text-lg py-2">
                    <span className="text-[#F29393] font-bold">{testimonial.name} - </span> {testimonial.profesi}
                  </p>
                  <Rating value={testimonial.rating} color="#FFCCB3" readOnly />
                  <p className="text-lg py-2">{testimonial.content}</p>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default TestimonialCarousel;
