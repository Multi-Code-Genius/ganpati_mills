"use client";

import Circle from "@layouts/components/Circle";
import { markdownify } from "@lib/utils/textConverter";

const ShortIntro = ({ intro }) => {
  return (
    <section className="section pt-0 py-16 md:py-20">
      <div className="container-xl">
        <div className="relative px-4 py-16 md:py-20 lg:py-24">
          <div className="text-center">
            <div className="animate max-w-4xl mx-auto">
              <p className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase">
                {intro.subtitle}
              </p>
              {markdownify(
                intro.title,
                "h2",
                "mt-4 section-title text-3xl md:text-4xl lg:text-5xl",
              )}
              {markdownify(
                intro.description,
                "p",
                "mt-8 md:mt-10 text-gray-600 text-base md:text-lg leading-relaxed",
              )}
            </div>

            {/* Stats Section */}
            <div className="animate mt-16 md:mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
                {intro.stats?.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Decorative Circles */}
          <div className="bg-theme absolute left-0 top-0 w-full h-full -z-10">
            <Circle
              className="left-[5%] md:left-[10%] top-12"
              width={32}
              height={32}
              fill={false}
            />
            <Circle
              className="left-[2%] md:left-[3%] top-[30%]"
              width={60}
              height={60}
            />
            <Circle
              className="bottom-[52%] left-[15%] md:left-[22%]"
              width={20}
              height={20}
            />
            <Circle
              className="bottom-[35%] left-[10%] md:left-[15%]"
              width={40}
              height={40}
              fill={false}
            />
            <Circle
              className="bottom-[6%] left-[3%] md:left-[6%]"
              width={50}
              height={50}
              fill={false}
            />
            <Circle
              className="right-[8%] md:right-[12%] top-[12%]"
              width={20}
              height={20}
            />
            <Circle
              className="right-[2%] top-[30%]"
              width={60}
              height={60}
              fill={false}
            />
            <Circle
              className="right-[15%] md:right-[19%] top-[50%]"
              width={30}
              height={30}
              fill={false}
            />
            <Circle
              className="right-[25%] md:right-[33%] top-[52%]"
              width={20}
              height={20}
            />
            <Circle
              className="bottom-[18%] right-[3%] md:right-[5%]"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortIntro;
