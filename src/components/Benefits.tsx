import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

interface BenefitProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    title: string;
    desc: string;
    image: any;
    bullets: BenefitProps[];
  };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data, imgPos = "left" } = props;

  return (
    <Container className="flex flex-wrap mb-20 pt-32 lg:pt-40 lg:gap-10 lg:flex-nowrap">
      {/* Image Section */}
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div className="w-full max-w-lg mx-auto">
          <Image
            src={data.image}
            width={521}
            height={521}
            alt="Benefits"
            className="object-cover rounded-lg shadow-lg"
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div className="w-full max-w-lg mx-auto">
          <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            <p className="mt-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {data.desc}
            </p>
          </div>

          {/* Bullet Points Grid (2x4 Layout) */}
          <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.bullets.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-[#308453] rounded-md w-11 h-11">
                  {React.cloneElement(item.icon, {
                    className: "w-7 h-7 text-indigo-50",
                  })}
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};