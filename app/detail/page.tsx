"use client";
import React, { useState } from "react";
import { ArrowRight, Change, Clean, Executive, Free, MapMobile } from "../icons";
import SlideProduct, { SlideProductMobile } from "@/components/SlideProduct";
import Fixed from "@/components/Fixed";
import Iterm from "@/components/Iterm";

const Detail = () => {
  const [numberInfor, setNumberInfor] = useState<number>(1);

  const handleChangeImage = (e: any) => {
    console.log("a", e);
    const getElementImage = document.querySelector(".image-current");
    console.log(getElementImage);
    if (getElementImage) {
      getElementImage.src = e.target.src;
    }
  };

  const handleChangeColor = (e: number) => {
    const getElementColor = document.querySelectorAll(".color-detail");
    const getColorCurrent = document.querySelector(
      `.color-detail-product-${e}`
    );
    document.querySelectorAll(".color-detail").forEach((item) => {
      item.classList.remove("active");
    });
    if (getColorCurrent) {
      getColorCurrent.classList.add("active");
    }
  };

  const handleHiddenInfor = (type: string, number: number) => {
    const getCurrentInfor = document.querySelector(`.infor-detail-${number}`);
    if (type == "show") {
      document.querySelectorAll(".infor-detail").forEach((item) => {
        item.classList.add("hidden");
      });
      if (number == numberInfor) {
        getCurrentInfor.classList.add("hidden");
        setNumberInfor(0);
        return 0;
      }
      if (getCurrentInfor.classList.contains("hidden")) {
        getCurrentInfor.classList.remove("hidden");
        setNumberInfor(number);
      } else {
        getCurrentInfor.classList.add("hidden");
        setNumberInfor(0);
      }
    }
  };

  document.addEventListener('scroll', function () {
    console.log(window.scrollY);
    const getElemetToShow = document.getElementById('check-scroll-to-show');
    const elementTop = getElemetToShow?.offsetTop;
    const getElementFixed = document.getElementById('fixed-product');
    console.log(elementTop);
    if(window.scrollY < elementTop && window.scrollY - elementTop  < 0 ) {
      getElementFixed.style.bottom = window.scrollY - elementTop + "px";
    }
      else if(window.scrollY < elementTop && elementTop - window.scrollY < 120) {
        getElementFixed.style.bottom =  elementTop - window.scrollY + "px";
      }
      else if(window.scrollY > elementTop  && window.scrollY < elementTop + 120) {
        getElementFixed.style.bottom = elementTop - window.scrollY + "px";
      } else if(window.scrollY > elementTop + 120) {
        getElementFixed.style.bottom = "0px";
      }
  })


  return (
    <div className="pt-[3.41rem] relative">
      {/* section 1 */}
      <div className=" flex  justify-center max-lg:px-[1rem]  max-lg:mx-[0rem] mx-[1.5rem] mb-[5rem] max-sm:block max-sm:mb-[2.25rem] max-sm:mx-0 max-sm:px-[0.75rem]">
        <div className="left-detail w-[52rem] max-lg:w-[40rem]  max-md:w-[52rem] max-md:h-[52rem] flex-col justify-center max-sm:block max-sm:w-full max-sm:h-[21.5rem] max-sm:mb-[1.5rem]">
          <div className="max-sm:h-full">
            <img
              className="image-current max-lg:[24rem] min-w-full h-full object-cover max-sm:hidden"
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            ></img>
            <div className="hidden max-sm:block max-sm:h-full max-sm:w-full">
            <SlideProductMobile/> 
            </div>
          </div>
          <ul className="flex min-w-full max-lg:h-[7.5rem] mt-[1rem] justify-between h-[12.15rem] max-sm:hidden">
            <li className=" mr-[1rem]">
              <img
                onClick={(e) => handleChangeImage(e)}
                className="flex h-full object-cover"
                src="https://images8.alphacoders.com/533/533007.png"
                alt=""
              ></img>
            </li>
            <li className="mr-[1rem]">
              <img
                onClick={(e) => handleChangeImage(e)}
                className="flex h-full object-cover"
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              ></img>
            </li>
            <li className="mr-[1rem] ">
              <img
                onClick={(e) => handleChangeImage(e)}
                className="flex h-full object-cover "
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              ></img>
            </li>
            <li>
              <img
                onClick={(e) => handleChangeImage(e)}
                className="flex h-full object-cover "
                src="https://images8.alphacoders.com/533/533007.png"
                alt=""
              ></img>
            </li>
          </ul>
        </div>
        {/* right */}
        <div className="right-detail max-lg:w-[25rem] max-lg:ml-[1.76rem]  ml-[3.76rem] max-sm:mt-[0rem] max-sm:ml-[0rem] max-sm:relative max-md:w-full">
          <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] md:border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]  max-sm:mb-[0.5rem] ">
            <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center max-sm:text-[0.625rem] ">
              Gọng kính
            </p>
          </div>
          <p className="text-[1.75rem] font-[850] text-[#454545] leading-[2.1rem] mb-[0.99rem] max-sm:text-[1.5rem] max-sm:leading-[1.95rem] max-sm:mb-[0.75rem]">
            GK – 380CK081
          </p>
          <p className="text-[1.875rem] font-[850] leading-[2.25rem] text-[#55D5D2] max-sm:hidden">
            320.000đ
          </p>
          <p className="text-[1rem] leading-[1.4rem] font-bold text-[#6A6A6A] line-through max-sm:hidden">
            640.000
          </p>
          <ul className="max-lg:mt-[1.06rem] max-lg:mb-[2.31rem] list-color flex mt-[2.06rem] mb-[3.31rem] max-sm:hidden">
            <li
              className="color-detail color-detail-product-1 border-[100%] mr-[1rem]"
              onClick={() => handleChangeColor(1)}
            >
              <svg
                className="w-[1.875rem] h-[1.875rem]"
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height=""
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="#6E402A" />
              </svg>
            </li>
            <li
              className="color-detail color-detail-product-2  border-[100%] mr-[1rem] active"
              onClick={() => handleChangeColor(2)}
            >
              <svg
                className="w-[1.875rem] h-[1.875rem]"
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height=""
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="#6E402A" />
              </svg>
            </li>
            <li
              className="color-detail color-detail-product-3 border-[100%] mr-[1rem] "
              onClick={() => handleChangeColor(3)}
            >
              <svg
                className="w-[1.875rem] h-[1.875rem]"
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height=""
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="#6E402A" />
              </svg>
            </li>
            <li className="color-detail color-detail-product-4  border-[100%] mr-[1rem]">
              <svg
                className="w-[1.875rem] h-[1.875rem]"
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height=""
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="#6E402A" />
              </svg>
            </li>
            <li className="color-detail color-detail-product-5  border-[100%] mr-[1rem]">
              <svg
                className="w-[1.875rem] h-[1.875rem]"
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height=""
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="#6E402A" />
              </svg>
            </li>
            <li className="color-detail color-detail-product-6  border-[100%] mr-1rem">
              <svg
                className="w-[1.875rem] h-[1.875rem]"
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height=""
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="#6E402A" />
              </svg>
            </li>
          </ul>
          {/* support */}
          <p className="max-lg:text-[0.95rem] max-lg:mb-[2.5rem] max-md:w-[31.625rem] text-[1rem] text-[#3F3F3F] font-bold leading-[1.5rem] mb-[3.7rem] max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
            Hướng dẫn sử dụng:<br></br> + Tháo kính bằng 2 tay hoặc những nơi có nhiệt độ
            cao làm biến dạng kính.<br></br> + Không bỏ kính vào cốp xe hoặc những nơi có
            nhiệt độ cao làm biến dạng kính.
          </p>
          {/* button */}
          <div className="max-lg:px-[0.5rem]  max-lg:py-[0.5rem] px-[1rem] py-[1.06rem] bg-[#CAF2F1]  rounded-[5rem] mb-[2.6rem] max-sm:p-0 ">
            <div className="flex justify-between items-center  h-[3.375rem]">
              <div className="wrapper-tongle-detail text-[#44AAA8] flex flex-1  justify-between px-[1.5rem] items-center rounded-[2.3125rem] bg-white h-full border-[#4DC0BD] border-[1px] max-sm:hidden ">
                <div className="max-lg:ml-[-0.95rem] max-lg:mr-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]">
                  -
                </div>
                <div className="number-add-cart-opacity"></div>
                <span className="max-lg:px-[0.5rem] number-add-cart text-[1rem] font-[800] leading-[1.5rem] font-[SVN-Nexa]">
                  08
                </span>
                <div className="number-add-cart-opacity"></div>
                <div className="max-lg:mr-[-0.95rem] max-lg:ml-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]">
                  +
                </div>
              </div>
              <div className="flex bg-[#55D5D2] max-lg:whitespace-nowrap max-lg:px-[0.75rem] max-lg:ml-[0.5rem] text-white text-[1rem] font-extrabold leading-[1.4rem] items-center px-[1.25rem] h-full rounded-[6.25rem] ml-[1.5rem] max-sm:w-full max-sm:ml-0 max-sm:justify-between">
                <p className="max-lg:mr-[0.49rem] max-lg:text-[1rem] mr-[1.49rem]">Thêm vào giỏ</p>
                <p className=" title-add-cart">120.000.000đ</p>
              </div>
            </div>
          </div>
          {/* adddress */}
          <div className="flex items-center border-t border-b border-[#55D5D2] mb-[1rem] max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:border-none ">
            <svg
              className="jumping-map max-sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 16.3584C12.6895 16.3584 13.3158 16.0822 13.6755 15.6195C16.1958 12.3776 19.2 8.10496 19.2 6.16075C19.2 3.0394 15.9701 0.5 12 0.5C8.02988 0.5 4.8 3.0394 4.8 6.16075C4.8 8.10496 7.80429 12.3776 10.3245 15.6195C10.6842 16.0822 11.3106 16.3584 12 16.3584ZM9.10601 5.77208C9.10601 4.51752 10.4043 3.49684 12 3.49684C13.5957 3.49684 14.894 4.51752 14.894 5.77208C14.894 7.02667 13.5957 8.04735 12 8.04735C10.4043 8.04735 9.10601 7.02671 9.10601 5.77208Z"
                fill="#55D5D2"
              />
            </svg>
            <div className="hidden max-sm:flex max-sm:bg-[#55D5D2] rounded-[50%] w-[1.5rem] h-[1.5rem] justify-center">
              <MapMobile/>
            </div>
            <p className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] ml-[0.62rem] text-[#55D5D2] mx-[1.5rem] my-[0.94rem] max-sm:text-[0.625rem] max-sm:font-bold max-sm:leading-[1.5rem] max-sm:my-[0px]">
              Tìm cửa hàng
            </p>
          </div>
          {/* infor */}
          <div className="all-infor-detail">
            <div>
              <div>
                <div
                  className={`flex justify-between py-[0.9375rem] ${numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'} border-[#ECECEC]`}
                  onClick={() => handleHiddenInfor("show", 1)}
                >
                  <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                    Thông tin
                  </span>
                  {numberInfor == 1 ? (
                   <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24"
                   height="25"
                   viewBox="0 0 24 25"
                   fill="none"
                 >
                   <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M6 12.5H18H6Z"
                     fill="#6A6A6A"
                   />
                   <path
                     d="M6 12.5H18"
                     stroke="#262626"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                   />
                 </svg>
                  ) : (
                    <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6 12.5H12M12 12.5H18M12 12.5V18.5M12 12.5V6.5"
                      stroke="#262626"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                    
                  )}
                </div>
                <p className="max-lg:text-[0.9rem] max-lg:w-full hidden infor-detail infor-detail-1 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
                  Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại
                  Anna Việt Nam Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử
                  dụng: + Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc
                  những nơi có nhiệt độ cao làm biến dạng kính. + Không bỏ kính
                  vào túi sách nếu không có hộp kính, vật dụng nhọn như chìa
                  khóa sẽ làm xước kính. + Không rửa kính lau kính bằng các chất
                  có tính tẩy rửa mạnh làm bong tróc lớp váng phủ
                </p>
              </div>
              <div>
                <div
                  className={`flex justify-between py-[0.9375rem] ${numberInfor !== 2 ? 'border-b-[1px]' : 'border-b-[0px]'} border-[#ECECEC] `}
                  onClick={() => handleHiddenInfor("show", 2)}
                >
                  <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                    Vận chuyển
                  </span>
                  {numberInfor == 2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 12.5H18H6Z"
                        fill="#6A6A6A"
                      />
                      <path
                        d="M6 12.5H18"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M6 12.5H12M12 12.5H18M12 12.5V18.5M12 12.5V6.5"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <p className="max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-2 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch hidden max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
                  Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại
                  Anna Việt Nam Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử
                  dụng: + Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc
                  những nơi có nhiệt độ cao làm biến dạng kính. + Không bỏ kính
                  vào túi sách nếu không có hộp kính, vật dụng nhọn như chìa
                  khóa sẽ làm xước kính. + Không rửa kính lau kính bằng các chất
                  có tính tẩy rửa mạnh làm bong tróc lớp váng phủ
                </p>
              </div>
              <div>
                <div
                  className={`flex justify-between py-[0.9375rem] ${numberInfor !== 3 ? 'border-b-[1px]' : 'border-b-[0px]'} border-[#ECECEC]`}
                  onClick={() => handleHiddenInfor("show", 3)}
                >
                  <span className=" max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                    Đổi trả
                  </span>
                  {numberInfor == 3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 12.5H18H6Z"
                        fill="#6A6A6A"
                      />
                      <path
                        d="M6 12.5H18"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M6 12.5H12M12 12.5H18M12 12.5V18.5M12 12.5V6.5"
                        stroke="#262626"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <p className="max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-3 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch flex-none hidden max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
                  Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại
                  Anna Việt Nam Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử
                  dụng: + Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc
                  những nơi có nhiệt độ cao làm biến dạng kính. + Không bỏ kính
                  vào túi sách nếu không có hộp kính, vật dụng nhọn như chìa
                  khóa sẽ làm xước kính. + Không rửa kính lau kính bằng các chất
                  có tính tẩy rửa mạnh làm bong tróc lớp váng phủ
                </p>
              </div>
              <div>
                <div
                  className={`flex justify-between py-[0.9375rem] ${numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'} border-[#ECECEC]`}
                  onClick={() => handleHiddenInfor("show", 1)}
                >
                  <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                  Chọn kính theo gương mặt
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M9 5.5L16 12.5L9 19.5" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="max-lg:mx-[0.75rem] flex justify-between text-[#454545] mx-[6.25rem] max-sm:flex-wrap max-sm:mx-0 max-sm:px-[1.5rem] max-sm:py-[1rem] max-sm:bg-[#EEFBFB]">
        <div className="flex  justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:mr-[0.5rem] max-sm:rounded-none max-sm:border-none max-sm:justify-start">
          <Executive />
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem] max-sm:px-[0.75rem]">
            Bảo hành trọn đời
          </p>
        </div>
        <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start max-sm:mr-0">
          <Change />

          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
            Đo mắt miễn phí
          </p>
        </div>
        <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)]  max-sm:mb-[1rem] max-sm:mr-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start">
          <Free />
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
            Thu cũ đổi mới
          </p>
        </div>
        <div id="check-scroll-to-show" className="flex justify-center  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start">
          <Clean />
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
            Vệ sinh và bảo quản kính
          </p>
        </div>
      </div>
      {/* section 3 */}
      <div  className="mx-[6.25rem] mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-sm:mx-0 max-sm:mb-[3.5rem]">
        <div className="flex justify-between mb-[2.62rem] items-center max-sm:mb-[1rem] max-sm:px-[0.75rem]">
          <h4 className="text-[2rem] font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem]  text-center max-sm:text-[1.25rem] ">
            TRÒNG KÍNH BỔ TRỢ
          </h4>
          <div className="flex justify-center h-full  py-[1.6rem] ">
            <ArrowRight />
            <p className="text-[1.125rem] ml-[0.62rem] text-right max-sm:hidden">Xem thêm</p>
            <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-sm:flex">Xem tất cả</p>
          </div>
        </div>
        <div className="max-sm:hidden">
          <SlideProduct number={1} />
        </div>
        <div className="hidden max-sm:flex flex-wrap px-[0.375rem]">
          <div className="w-[50%] relative px-[0.375rem] mb-[1rem]">
            <Iterm/>
          </div>
          <div className="w-[50%] relative px-[0.375rem] mb-[1rem]">
            <Iterm/>
          </div>
          <div className="w-[50%] relative px-[0.375rem] mb-[1rem]">
            <Iterm/>
          </div>
          <div className="w-[50%] relative px-[0.375rem] mb-[1rem]">
            <Iterm/>
          </div>
        </div>
        <div className="hidden justify-center h-full mt-[1rem] max-sm:flex">
            <ArrowRight />
            <p className=" text-[1.125rem] ml-[0.62rem] text-right max-sm:hidden">Xem thêm</p>
            <p className="md:hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-sm:flex">Xem tất cả</p>
          </div>
      </div>
      <div className=" mx-[6.25rem] mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-sm:mx-0 max-sm:mb-[3.5rem] ">
        <div className="flex justify-between mb-[2.62rem] items-center max-sm:mb-[1rem]">
          <h4 className="text-[2rem] font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem]  text-center max-sm:text-[1.25rem] max-sm:pl-[0.75rem]">
          GỌNG KÍNH TƯƠNG TỰ
          </h4>
        </div>
        <div className="max-sm:hidden">
          <SlideProduct number={2} />
        </div>
        <div className="hidden max-sm:flex flex-wrap px-[0.375rem]">
          <div className="w-[50%] relative px-[0.375rem] mb-[1rem]">
            <Iterm/>
          </div>
          <div className="w-[50%] relative px-[0.375rem] mb-[1rem]">
            <Iterm/>
          </div>
          <div className="w-[50%] relative px-[0.375rem] mb-[1rem]">
            <Iterm/>
          </div>
          <div className="w-[50%] relative px-[0.375rem] mb-[1rem]">
            <Iterm/>
          </div>
        </div>
        <div className="hidden justify-center h-full mt-[1rem] max-sm:flex">
            <ArrowRight />
            <p className=" text-[1.125rem] ml-[0.62rem] text-right max-sm:hidden">Xem thêm</p>
            <p className="md:hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-sm:flex">Xem tất cả</p>
          </div>
      </div>
     
      {/* section 4 */}
      <div className="mx-[6.25rem] max-md-w-full max-sm:mx-0 mb-[10rem] max-sm:pl-[0.62rem] max-sm:bg-[#EEFBFB] max-sm:pb-[2.25rem]">
        <h4 className="pt-[2.06rem] text-[2rem] font-[850] text-[#4DC0BD] max-sm:text-[1.25rem] max-sm:text-[#313131] text-left ">
          GỢI Ý CHO BẠN
        </h4>
        <div className="hidden-scollbar mt-[2.13rem] flex justify-center max-lg:overflow-x-scroll max-lg:overflow-y-hidden max-sm:overflow-x-scroll max-sm:overflow-y-hidden max-sm:h-[13rem] max-sm:mt-[1rem] relative">
          <div className="flex max-sm:left-0 absolute ">
          <div className="w-[27.5rem] mr-[2.5rem] max-sm:w-[12.75775rem] max-lg:w-[13.75775rem] max-sm:mr-[0.5rem]">
              <img
                className="w-[27.5rem] h-[24.25rem] rounded-[1.2rem] max-sm:w-[12.75775rem] max-sm:h-[11.25rem] max-sm:rounded-none"
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="suggest"
              /> 
              <p className="mt-[1rem] text-center text-[1.9rem] font-[850] leading-[2.4rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mt-[0.5rem]">
                Gọng kính
              </p>
            </div>
            <div className="w-[27.5rem] mr-[2.5rem] max-sm:w-[12.75775rem] max-sm:mr-[0.5rem]">
              <img
                className="w-[27.5rem] h-[24.25rem] rounded-[1.2rem] max-sm:w-[12.75775rem] max-sm:h-[11.25rem] max-sm:rounded-none"
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="suggest"
              />
              <p className="mt-[1rem] text-center text-[1.9rem] font-[850] leading-[2.4rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mt-[0.5rem]">
                Tròng kính
              </p>
            </div>
            <div className="w-[27.5rem] mr-[2.5rem] max-sm:w-[12.75775rem] max-sm:mr-[0.5rem]">
              <img
                className="w-[27.5rem] h-[24.25rem] rounded-[1.2rem] max-sm:w-[12.75775rem] max-sm:h-[11.25rem] max-sm:rounded-none"
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="suggest"
              />
              <p className="mt-[1rem] text-center text-[1.9rem] font-[850] leading-[2.4rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mt-[0.5rem]">
                Combo gọng + tròng kính
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section fix */}
      <div id="fixed-product" className="px-[6.25rem] fixed h-[7.5rem] w-[100%] bg-[#fff] bottom-[-7.5rem] z-50 border-t-[1px] border-[#ECECEC] max-sm:hidden items-center">
        <Fixed/>
      </div>
    </div>
  );
};

export default Detail;
