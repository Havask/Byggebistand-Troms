import React from "react";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col pt-12 lg:pt-16 pb-2 lg:pb-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-sm font-bold tracking-wider text-[#308453] uppercase bg-clip-text bg-gradient-to-r from-[#308453] to-[#4CAF50] text-transparent"
        >
          {props.preTitle}
        </motion.div>
      )}

      {props.title && (
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white relative"
        >
          <span className="bg-clip-text bg-gradient-to-r from-[#308453] to-[#4CAF50] text-transparent">
            {props.title}
          </span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-[#308453] to-transparent" />
        </motion.h2>
      )}

      {props.children && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl pt-4 pb-0 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
        >
          {props.children}
        </motion.p>
      )}
    </Container>
  );
};