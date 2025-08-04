"use client";

import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Features = ({ features }) => {
  const paginationRef = useRef(null);
  return (
    <section className="section py-16 md:py-20">
      <div className="container text-center">
        <div className="animate max-w-4xl mx-auto">
          <p className="uppercase text-primary font-semibold text-sm md:text-base tracking-wider">{features.sub_title}</p>
          {markdownify(features.title, "h2", "mt-4 section-title text-3xl md:text-4xl lg:text-5xl")}
          {markdownify(features.description, "p", "mt-8 md:mt-10 text-gray-600 text-base md:text-lg leading-relaxed")}
        </div>
        
        {/* Stats Section */}
        <div className="animate from-left mt-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Established Badge */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20 shadow-sm">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full mb-4">
                    <span className="text-primary font-semibold text-sm">Since 1998</span>
                  </div>
                  <p className="text-gray-700 font-medium">Established in 1998, delivering excellence in fabric manufacturing.</p>
                </div>
              </div>
            </div>
            
            {/* Production Stats Badge */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20 shadow-sm">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-primary">3,00,000+</span>
                  </div>
                  <p className="text-gray-700 font-medium">Meters of fabric produced daily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate from-right relative mt-10">
          <Swiper
            slidesPerView={1}
            pagination={{
              type: "bullets",
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: true,
            }}
            // autoplay={{ delay: 3000 }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {features.list.map((item, index) => (
              <SwiperSlide key={"feature-" + index}>
                <div className="feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
                  <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                    <FeatherIcon icon={item.icon} />
                  </div>
                  <h3 className="h4 mb-5 mt-6">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative mt-9 flex justify-center">
            <div className="pagination " ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
