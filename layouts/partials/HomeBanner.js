"use client";

import Circle from "@layouts/components/Circle";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect } from "react";

const HomeBanner = ({ banner: bannerData }) => {
  useEffect(() => {
    const ctx2 = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 },
      )
        .fromTo(
          ".banner-subtitle",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.3",
        )
        .fromTo(
          ".banner-production-info",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.3",
        )
        .fromTo(
          ".banner-btn-group",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.3",
        )
        .fromTo(
          ".newsletter",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.3",
        );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannerBg,
          {
            y: 0,
          },
          {
            y: -position,
          },
        )
        .fromTo(
          bannerContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          "<",
        )
        .fromTo(
          ".banner-bg .circle",
          {
            y: 0,
          },
          {
            y: position,
          },
          "<",
        );
    });

    return () => ctx2.revert();
  }, []);

  return (
    <section className="section banner pt-0 min-h-screen flex items-center">
      <div className="container-xl w-full">
        <div className="relative">
          <div className="bg-theme banner-bg col-12 absolute left-0 top-0 min-h-screen">
            <Circle
              className="circle left-[10%] top-12"
              width={32}
              height={32}
              fill={false}
            />
            <Circle
              className="circle left-[2.5%] top-[29%]"
              width={85}
              height={85}
            />
            <Circle
              className="circle bottom-[48%] left-[22%]"
              width={20}
              height={20}
            />
            <Circle
              className="circle bottom-[37%] left-[15%]"
              width={47}
              height={47}
              fill={false}
            />
            <Circle
              className="circle bottom-[13%] left-[6%]"
              width={62}
              height={62}
              fill={false}
            />
            <Circle
              className="circle right-[12%] top-[15%]"
              width={20}
              height={20}
            />
            <Circle
              className="circle right-[2%] top-[30%]"
              width={73}
              height={73}
              fill={false}
            />
            <Circle
              className="circle right-[19%] top-[48%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="circle right-[33%] top-[54%]"
              width={20}
              height={20}
            />
            <Circle
              className="circle bottom-[20%] right-[3%]"
              width={65}
              height={65}
            />
          </div>
          <div className="row overflow-hidden rounded-2xl min-h-screen flex items-center">
            <div className="col-12">
              <div className="row relative justify-center">
                <div className="banner-content col-12 md:col-10 lg:col-8 xl:col-6 py-16 md:py-20 text-center mx-auto px-4 md:px-6">
                  {markdownify(
                    bannerData.title,
                    "h1",
                    "mb-6 banner-title opacity-0",
                  )}
                  {markdownify(
                    bannerData.subtitle,
                    "p",
                    "mb-10 banner-subtitle opacity-0 text-xl font-medium text-gray-700",
                  )}
                  <div className="banner-production-info opacity-0 mb-8">
                    <div className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full inline-block shadow-sm">
                      <span className="font-semibold text-sm">
                        {bannerData.production_info}
                      </span>
                    </div>
                  </div>
                  <div className="banner-btn-group opacity-0 flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                    <Link
                      className="btn btn-primary w-full sm:w-auto"
                      href={bannerData.cta_primary.href}
                    >
                      {bannerData.cta_primary.label}
                    </Link>
                    <Link
                      className="btn btn-secondary w-full sm:w-auto"
                      href={bannerData.cta_secondary.href}
                    >
                      {bannerData.cta_secondary.label}
                    </Link>
                  </div>
                  <div className="newsletter opacity-0 mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-4 sm:px-0">
                    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <input
                          type="email"
                          className="flex-1 w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder={bannerData.newsletter.placeholder}
                        />
                        <button className="btn btn-primary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base min-w-[60px] sm:min-w-[80px] flex items-center justify-center">
                          →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
