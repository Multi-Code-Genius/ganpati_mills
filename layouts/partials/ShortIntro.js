"use client";

import Circle from "@layouts/components/Circle";
import { markdownify } from "@lib/utils/textConverter";
import Counter from "@components/Counter";
import { useRouter } from "next/navigation";

const ShortIntro = ({ intro }) => {
  const router = useRouter();

  return (
    <section className="section pt-0 py-8 md:py-12 lg:py-16">
      <div className="container-xl">
        <div className="relative px-4 py-8 md:py-12 lg:py-16">
          <div className="text-center">
            <div className="animate max-w-3xl mx-auto">
              <p className="text-primary font-semibold text-xs md:text-sm tracking-wider uppercase">
                {intro.subtitle}
              </p>
              {markdownify(
                "Delivering Excellence in Fabric Manufacturing",
                "h1",
                "mt-4 section-title text-3xl md:text-4xl lg:text-5xl font-bold",
              )}
              {markdownify(
                "Providing high-quality fabrics across the globe.",
                "p",
                "mt-4 md:mt-6 text-gray-600 text-sm md:text-base lg:text-lg font-medium",
              )}
              <button
                onClick={() => router.push("/services/digital-printing")}
                className="mt-6 cursor-pointer inline-block bg-primary text-white font-semibold py-3 px-6 text-sm md:text-base rounded-lg shadow-md hover:bg-primary-600 transition-colors duration-300"
              >
                View Products ➔
              </button>
            </div>

            {/* Stats Section */}
            <div className="animate mt-12 md:mt-16 lg:mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
                {intro.stats?.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-4">
                      <Counter end={stat.number} duration={2000} />
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Decorative Circles */}
          <div className="bg-theme absolute left-0 top-0 w-full h-full -z-10 hidden sm:block">
            <Circle
              className="left-[5%] md:left-[10%] top-12"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="left-[2%] md:left-[3%] top-[30%]"
              width={40}
              height={40}
            />
            <Circle
              className="bottom-[52%] left-[15%] md:left-[22%]"
              width={15}
              height={15}
            />
            <Circle
              className="bottom-[35%] left-[10%] md:left-[15%]"
              width={25}
              height={25}
              fill={false}
            />
            <Circle
              className="bottom-[6%] left-[3%] md:left-[6%]"
              width={30}
              height={30}
              fill={false}
            />
            <Circle
              className="right-[8%] md:right-[12%] top-[12%]"
              width={15}
              height={15}
            />
            <Circle
              className="right-[2%] top-[30%]"
              width={40}
              height={40}
              fill={false}
            />
            <Circle
              className="right-[15%] md:right-[19%] top-[50%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="right-[25%] md:right-[33%] top-[52%]"
              width={15}
              height={15}
            />
            <Circle
              className="bottom-[18%] right-[3%] md:right-[5%]"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortIntro;
