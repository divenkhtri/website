"use client";

import React from "react";

import Slider from "react-infinite-logo-slider";

import Image from "next/image";

const SixthSection = () => {
  return (
    <div className="py-20">
      <Slider
        width="200px"
        duration={40}
        pauseOnHover={true}
        blurBorders={true}
      >
        <Slider.Slide>
          <Image
            src="/images/logo/apachesbeam.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/gcp.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/nextjs.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/terraform.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/materialUI.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/apachesbeam.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/gcp.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/nextjs.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/terraform.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
        <Slider.Slide>
          <Image
            src="/images/logo/materialUI.svg"
            alt="Facebook"
            width={150}
            height={150}
            className="px-3"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default SixthSection;
