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
  const { frontmatter } = data;
  const {
    title,
    about_us,
    offerings,
    works,
    expertise,
    mission,
    video,
    clients,
    our_member,
    our_office,
  } = frontmatter;

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
              {markdownify(about_us.title, "h2", "section-title bar-left mt-4")}
              {markdownify(about_us.content, "p", "mt-10")}
            </div>
          </div>
        </div>

        {/* Offerings */}
        {offerings && (
          <div className="section container">
            <div className="animate text-center">
              <p>{offerings.subtitle}</p>
              {markdownify(offerings.title, "h2", "section-title mt-4")}
            </div>
            <div className="row mt-10 justify-center">
              <div className="lg:col-8">
                <div className="animate">
                  {/* Bullet Points */}
                  <ul className="mt-8 space-y-4">
                    {offerings.list.slice(0, 2).map((item, index) => (
                      <li
                        key={`offering-${index}`}
                        className="flex items-start"
                      >
                        <svg
                          className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-lg">{item.content}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA and Contact Section */}
                  <div className="mt-12 flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
                    {/* Explore Services Button */}
                    <a href="/services" className="btn btn-primary">
                      Explore Services
                    </a>

                    {/* Contact Info */}
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Have any question?
                        </p>
                        <a
                          href="tel:+919824111765"
                          className="text-lg font-semibold text-dark hover:text-primary"
                        >
                          +91 98241 11765
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Works */}
        <div className="section container">
          <div className="animate text-center">
            <p>{works.subtitle}</p>
            {markdownify(works.title, "h2", "section-title mt-4")}
            {markdownify(works.content, "p", "mt-10")}
          </div>
          <div className="row mt-10 justify-center">
            {works.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4")}
                  {markdownify(work.content, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        {expertise && (
          <div className="section bg-gray-100">
            {/* Banner */}
            <div className="container">
              <div className="animate text-center py-8">
                <div className="inline-block rounded-full bg-primary/10 px-6 py-3 text-dark shadow-lg">
                  <p className="mb-0">
                    {expertise.banner.split("View our recent projects")[0]}
                    <span className="font-semibold underline cursor-pointer hover:text-primary">
                      View our recent projects
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="container pb-16">
              <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
                {/* Left Side - Main Title */}
                <div className="animate md:flex-1 text-center md:text-left">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {expertise.subtitle}
                  </p>
                  {markdownify(
                    expertise.title,
                    "h2",
                    "section-title text-dark mt-4 leading-tight",
                  )}
                </div>

                {/* Right Side - Achievements */}
                <div className="animate mt-10 md:mt-0 md:flex-1">
                  <div className="space-y-8">
                    {expertise.achievements.map((achievement, index) => (
                      <div key={`achievement-${index}`} className="">
                        <h4 className="text-dark font-semibold text-lg mb-3">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {achievement.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default About;
