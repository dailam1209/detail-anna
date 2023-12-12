"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowSlideLeft, ArrowSlideRight, ArrowTopRight, ColorPink } from "@/app/icons";

export interface numberArrow {
  number: number
}

const SlideProduct: React.FC<numberArrow> = ({number}) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        breakpoints={{
          // 1024: {
          //   slidesPerView: 2,
          // },
          // 1224: {
          //   slidesPerView: 1,
          // },
         
        }}
        navigation={{
          prevEl: `.prev-${number}`,
          nextEl: `.next-${number}`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper  h-[28.06587rem] pl-[0rem] "
      >
        <SwiperSlide className="slide-hover w-auto ">
          <div className="relative">
            <div className="overflow-hidden rounded-[1rem]">
            <img
              className="h-[20.375rem] object-cover min-w-full"
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            </div>

           
            <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide">
              <div className="flex ml-[1rem]">
                <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]">
                  <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Gọng kính
                  </p>
                </div>
                  <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem]">
                    <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Siêu Sale 10.10
                    </p>
                  </div>
              </div>
              <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide">
                <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem]">GK – 380CK081</span>
                {/* list color */}
                <div className="flex justify-between mb-[0.75rem]">
                  <ul className="flex ">
                    <li>
                      <ColorPink/>
                    </li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                  </ul>
                  <span className="line-through">440.000đ</span>
                </div>
                {/* button */}
                <div>
                  
                </div>
                <div className="price-product-slide flex bg-[#55D5D2] justify-between px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                  <p className="text-[1.5rem] font-[850] text-white">320.000đ</p>
                  <div className="arrow-peoduct-slide p-[0.5rem]">
                    <ArrowTopRight/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-hover  ">
          <div className="relative">
            <div className="overflow-hidden rounded-[1rem]">
            <img
              className="h-[20.375rem] object-cover  "
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            </div>

           
            <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide">
              <div className="flex ml-[1rem]">
                <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]">
                  <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Gọng kính
                  </p>
                </div>
                  <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem]">
                    <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Siêu Sale 10.10
                    </p>
                  </div>
              </div>
              <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide">
                <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem]">GK – 380CK081</span>
                {/* list color */}
                <div className="flex justify-between mb-[0.75rem]">
                  <ul className="flex ">
                    <li>
                      <ColorPink/>
                    </li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                  </ul>
                  <span className="line-through">440.000đ</span>
                </div>
                {/* button */}
                <div>
                  
                </div>
                <div className="price-product-slide flex bg-[#55D5D2] justify-between px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                  <p className="text-[1.5rem] font-[850] text-white">320.000đ</p>
                  <div className="arrow-peoduct-slide p-[0.5rem]">
                    <ArrowTopRight/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       <SwiperSlide className="slide-hover ">
          <div className="relative">
            <div className="overflow-hidden rounded-[1rem]">
            <img
              className="h-[20.375rem] object-cover  "
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            </div>

           
            <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide">
              <div className="flex ml-[1rem]">
                <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]">
                  <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Gọng kính
                  </p>
                </div>
                  <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem]">
                    <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Siêu Sale 10.10
                    </p>
                  </div>
              </div>
              <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide">
                <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem]">GK – 380CK081</span>
                {/* list color */}
                <div className="flex justify-between mb-[0.75rem]">
                  <ul className="flex ">
                    <li>
                      <ColorPink/>
                    </li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                  </ul>
                  <span className="line-through">440.000đ</span>
                </div>
                {/* button */}
                <div>
                  
                </div>
                <div className="price-product-slide flex bg-[#55D5D2] justify-between px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                  <p className="text-[1.5rem] font-[850] text-white">320.000đ</p>
                  <div className="arrow-peoduct-slide p-[0.5rem]">
                    <ArrowTopRight/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
       <SwiperSlide className="slide-hover ">
          <div className="relative">
            <div className="overflow-hidden rounded-[1rem]">
            <img
              className="h-[20.375rem] object-cover  "
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            </div>

           
            <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide">
              <div className="flex ml-[1rem]">
                <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]">
                  <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Gọng kính
                  </p>
                </div>
                  <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem]">
                    <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Siêu Sale 10.10
                    </p>
                  </div>
              </div>
              <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide">
                <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem]">GK – 380CK081</span>
                {/* list color */}
                <div className="flex justify-between mb-[0.75rem]">
                  <ul className="flex ">
                    <li>
                      <ColorPink/>
                    </li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                  </ul>
                  <span className="line-through">440.000đ</span>
                </div>
                {/* button */}
                <div>
                  
                </div>
                <div className="price-product-slide flex bg-[#55D5D2] justify-between px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                  <p className="text-[1.5rem] font-[850] text-white">320.000đ</p>
                  <div className="arrow-peoduct-slide p-[0.5rem]">
                    <ArrowTopRight/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       <SwiperSlide className="slide-hover  ">
          <div className="relative">
            <div className="overflow-hidden rounded-[1rem]">
            <img
              className="h-[20.375rem] object-cover  "
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            </div>

           
            <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide">
              <div className="flex ml-[1rem]">
                <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]">
                  <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Gọng kính
                  </p>
                </div>
                  <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem]">
                    <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Siêu Sale 10.10
                    </p>
                  </div>
              </div>
              <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide">
                <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem]">GK – 380CK081</span>
                {/* list color */}
                <div className="flex justify-between mb-[0.75rem]">
                  <ul className="flex ">
                    <li>
                      <ColorPink/>
                    </li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                  </ul>
                  <span className="line-through">440.000đ</span>
                </div>
                {/* button */}
                <div>
                  
                </div>
                <div className="price-product-slide flex bg-[#55D5D2] justify-between px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                  <p className="text-[1.5rem] font-[850] text-white">320.000đ</p>
                  <div className="arrow-peoduct-slide p-[0.5rem]">
                    <ArrowTopRight/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       <SwiperSlide className="slide-hover  ">
          <div className="relative">
            <div className="overflow-hidden rounded-[1rem]">
            <img
              className="h-[20.375rem] object-cover  "
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            </div>

           
            <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide">
              <div className="flex ml-[1rem]">
                <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]">
                  <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Gọng kính
                  </p>
                </div>
                  <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem]">
                    <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Siêu Sale 10.10
                    </p>
                  </div>
              </div>
              <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide">
                <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem]">GK – 380CK081</span>
                {/* list color */}
                <div className="flex justify-between mb-[0.75rem]">
                  <ul className="flex ">
                    <li>
                      <ColorPink/>
                    </li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                  </ul>
                  <span className="line-through">440.000đ</span>
                </div>
                {/* button */}
                <div>
                  
                </div>
                <div className="price-product-slide flex bg-[#55D5D2] justify-between px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                  <p className="text-[1.5rem] font-[850] text-white">320.000đ</p>
                  <div className="arrow-peoduct-slide p-[0.5rem]">
                    <ArrowTopRight/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       <SwiperSlide className="slide-hover ">
          <div className="relative">
            <div className="overflow-hidden rounded-[1rem]">
            <img
              className="h-[20.375rem] object-cover  "
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            </div>

           
            <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide">
              <div className="flex ml-[1rem]">
                <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]">
                  <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Gọng kính
                  </p>
                </div>
                  <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem]">
                    <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Siêu Sale 10.10
                    </p>
                  </div>
              </div>
              <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide">
                <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem]">GK – 380CK081</span>
                {/* list color */}
                <div className="flex justify-between mb-[0.75rem]">
                  <ul className="flex ">
                    <li>
                      <ColorPink/>
                    </li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                  </ul>
                  <span className="line-through">440.000đ</span>
                </div>
                {/* button */}
                <div>
                  
                </div>
                <div className="price-product-slide flex bg-[#55D5D2] justify-between px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                  <p className="text-[1.5rem] font-[850] text-white">320.000đ</p>
                  <div className="arrow-peoduct-slide p-[0.5rem]">
                    <ArrowTopRight/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       <SwiperSlide className="slide-hover ">
          <div className="relative">
            <div className="overflow-hidden rounded-[1rem]">
            <img
              className="h-[20.375rem] object-cover  "
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            </div>

           
            <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide">
              <div className="flex ml-[1rem]">
                <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]">
                  <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Gọng kính
                  </p>
                </div>
                  <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem]">
                    <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
                    Siêu Sale 10.10
                    </p>
                  </div>
              </div>
              <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide">
                <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem]">GK – 380CK081</span>
                {/* list color */}
                <div className="flex justify-between mb-[0.75rem]">
                  <ul className="flex ">
                    <li>
                      <ColorPink/>
                    </li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                    <li><ColorPink/></li>
                  </ul>
                  <span className="line-through">440.000đ</span>
                </div>
                {/* button */}
                <div>
                  
                </div>
                <div className="price-product-slide flex bg-[#55D5D2] justify-between px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
                  <p className="text-[1.5rem] font-[850] text-white">320.000đ</p>
                  <div className="arrow-peoduct-slide p-[0.5rem]">
                    <ArrowTopRight/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={`prev-${number} max-lg:left-[-1.2rem] max-lg:z-[2] text-red-800 top-[62%] absolute left-[-5.2rem] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}>
        <ArrowSlideLeft/>
      </div>
    <div className={`next-${number} max-lg:right-[-1.2rem] max-lg:z-[2] text-red-800 top-[62%] absolute right-[-5.2rem] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}><ArrowSlideRight/></div>
    </>
  );
};

export default SlideProduct;

export const SlideProductMobile = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full rounded-[1rem] overflow-hidden"
      >
        <SwiperSlide className="w-full">
            <img
              className="h-full w-full object-cover  max-sm:min-w-full"
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
        </SwiperSlide>
        <SwiperSlide className="">
            <img
              className="h-full w-full object-cover "
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>
    </>
  );
};

