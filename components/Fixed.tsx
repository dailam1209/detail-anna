import React from 'react'

const Fixed = () => {
  return (
    <div className='flex justify-between items-center
    '>
        <div className='left flex items-center'>
            <img className='w-[7.5rem] h-[7.5rem] mr-[2rem] object-cover' src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
            <div className=''>
                <p className='text-[1rem] font-extrabold leading-[1.4625rem] mb-[0.5rem]'>GK – 0123459</p>
                <p>560.000</p>
                <ul className="list-color flex mt-[0.75rem]">
            <li
              className="color-detail color-detail-product-1 border-[100%] mr-[0.5rem]"
            >
              <svg
                className="w-[1.25rem] h-[1.25rem]"
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
              className="color-detail color-detail-product-2  border-[100%] mr-[0.5rem] active"
            >
              <svg
                className="w-[1.25rem] h-[1.25rem]"
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
              className="color-detail color-detail-product-3 border-[100%] mr-[0.5rem] "
            >
              <svg
                className="w-[1.25rem] h-[1.25rem]"
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height=""
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="#6E402A" />
              </svg>
            </li>
            <li className="color-detail color-detail-product-4  border-[100%] mr-[0.5rem]">
              <svg
                className="w-[1.25rem] h-[1.25rem]"
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height=""
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="#6E402A" />
              </svg>
            </li>
            <li className="color-detail color-detail-product-5  border-[100%] mr-[0.5rem]">
              <svg
                className="w-[1.25rem] h-[1.25rem]"
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
                className="w-[1.25rem] h-[1.25rem]"
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
            </div>
        </div>
        <div className='right flex items-center'>
            <p className='text-[1.875rem] font-[850] leading-[2.25rem] text-[#55D5D2] mr-[3.25rem]'>320.000đ</p>
            <div className='py-[0.94rem] px-[1.88rem] bg-[#55D5D2] rounded-[3.125rem]'>
                <span className='text-[1rem] leading-[1.5rem] font-[800] text-white'>Thêm vào giỏ hàng</span>
            </div>
        </div>
    </div>
  )
}

export default Fixed