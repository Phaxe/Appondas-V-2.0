"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "./Tech.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  headingVariant,
  cardText
} from "@/Animations/AnimationsVariants/Variants";
const TechStack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  const controlsX = useAnimation();
  const [refX, inViewX] = useInView();
  useEffect(() => {
    if (inViewX) {
      controlsX.start("visible");
    } else {
      controlsX.stop();
    }
  }, [controlsX, inViewX]);
  return (
    <div className="bg-white responsive m-auto mb-10 border rounded-md">
      <div
        className="flex flex-col items-center justify-center py-14 
    "
      >
        <motion.div
          ref={ref}
          variants={headingVariant}
          initial="hidden"
          animate={controls}
          className="mb-10"
        >
          <h1 className="text-center py-5 text-3xl font-medium w-[80%] m-auto max-sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-900 via-sky-600 to-sky-900">
            Tech stack that serves you well today and when you grow 10x in the
            next 24 months.
          </h1>
          <p className="text-center text-xl text-yahia-700 w-[60%] m-auto max-sm:text-base">
            Get an unbiased perspective on the best frameworks and tools for
            your project. With 70+ completed projects, we’ve seen enough to save
            you from trouble.
          </p>
        </motion.div>
        {/* <div className="mb-16">
        <ul className="grid grid-cols-4 items-center gap-16 mt-10
        max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <li><Image src='/react.svg' width={200} height={200}/></li>
            <li><Image src='/nodejs.svg' width={200} height={200}/></li>
            <li><Image src='/typescript.svg' width={200} height={200}/></li>
            <li><Image src='/native.svg' width={200} height={200}/></li>
            <li><Image src='/net.svg' width={200} height={200}/></li>
            <li><Image src='/mysql.svg' width={200} height={200}/></li>
            <li><Image src='/php-logo.svg' width={200} height={200}/></li>
            <li><Image src='/amazon.svg' width={200} height={200}/></li>
        </ul>
      </div> */}
        <motion.div
          ref={refX}
          variants={cardText}
          initial="hidden"
          animate={controlsX}
        class="card-swiper">
          <div class="card-groups">
            <div class="card-group" data-index="0" data-status="active">
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
            </div>
            <div class="card-group" data-index="1" data-status="unknown">
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
            </div>
            <div class="card-group" data-index="2" data-status="unknown">
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
              <div class="little-card card"></div>
              <div class="big-card card"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
