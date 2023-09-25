import React from 'react'
import Image from 'next/image';
import '../../styles/global.css';

const Section1 = () => {
  return (
    <div className="main font-sans">
        <div className="top-section flex justify-evenly items-center">
            <div className="titles">
                <div className="main-title">
                    <p className='text-8xl font-bold' ><span className='text-[#E23744]' >Food</span><span>Topia</span></p>
                </div>
                <div className='border-b-[1.5px] border-gray-400 mt-6'></div>
                <div className="quotes">
                    <p className='text-2xl text-[#E23744] mt-6' >Waiting in a queue in the canteen!?</p>
                    <p className='text-2xl text-[#E23744] mt-1' >Place your order on FoodTopia and get it instantly.</p>
                </div>
            </div>
            <div className="food-image">
                <Image
                    src="/images/samosa.jpg"
                    width={400}
                    height={400}
                    alt="FoodTopia Cover Logo"
                    className="focus:border-none active:border-none rounded-xl"
                />
            </div>
        </div>
    </div>
  )
}

export default Section1
