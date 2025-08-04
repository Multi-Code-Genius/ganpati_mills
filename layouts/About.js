"use client";

import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";

const About = ({ data }) => {
  const { frontmatter } = data || {};
  const {
    title,
    about_us,
    why_choose,
    textile_expertise,
  } = frontmatter || {};

  // Safety check - if no data, show loading or error
  if (!frontmatter || !about_us) {
    return (
      <section className="section pt-0">
        <div className="container">
          <div className="text-center py-20">
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section pt-0">
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={about_us.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="left-4 top-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="right-10 top-20 z-[-1]"
                />
                <Circle
                  className="right-12 top-1/2 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="left-12 top-1/2 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 md:order-1 lg:col-4">
              <p>{about_us.subtitle}</p>
              {markdownify(about_us.title, "h2", "text-4xl font-bold text-dark")}
              {markdownify(about_us.content, "p", "text-lg text-gray-600 mt-4")}
              <ul className="list-disc ml-5 mt-4 space-y-2">
                {about_us.features?.map((feature, idx) => (
                  <li key={`feature-${idx}`} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={about_us.button?.link} 
                className="mt-6 inline-block bg-primary py-2 px-4 text-white rounded-lg shadow hover:bg-primary-600 transition duration-300"
              >
                {about_us.button?.label}
              </a>
              <div className="mt-6 text-lg text-primary font-semibold">
                Call for enquiries: <a href={`tel:${about_us.phone}`}>{about_us.phone}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        {why_choose && (
          <div className="section container py-12">
            <div className="text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                {why_choose.subtitle}
              </p>
              {markdownify(why_choose.title, "h2", "text-3xl font-bold text-dark mb-8")}
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {why_choose.features?.map((feature, index) => (
                <div key={`why-${index}`} className="bg-white shadow-lg p-6 rounded-lg max-w-[300px] text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="inline-block rounded-full bg-primary/10 px-6 py-3 text-dark shadow-lg">
                <p className="mb-0">
                  {why_choose.banner}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Textile Expertise */}
        {textile_expertise && (
          <div className="section bg-gray-100 py-12">
            <div className="container">
              <div className="text-center mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                  {textile_expertise.subtitle}
                </p>
                {markdownify(textile_expertise.title, "h2", "text-3xl font-bold text-dark mb-8")}
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {textile_expertise.achievements?.map((achievement, idx) => (
                  <div key={`achievement-${idx}`} className="bg-white text-center shadow-lg p-6 rounded-lg max-w-[350px]">
                    <h4 className="text-lg font-semibold mb-4 text-primary">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </section>
    </>
  );
};

export default About;
