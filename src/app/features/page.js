import React from 'react'
import Navbar from '../home/components/Navbar'
import Image from 'next/image';

export const metadata = {
  title: 'Features',
}

const page = () => {
  return (
    <div className='main' >
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="section1 mt-56 justify-center">
        <div className="title font-bold text-7xl text-center">
          <p className='text-[#E23744]'>Your favourite</p>
          <p>food ordering partner.</p>
        </div>
        <div className="mt-20 features-images flex justify-around">
          <div className="easy-to-order">
            <Image
              src="/images/eto.png"
              width={400}
              height={400}
              alt="Easy To Order"
              className="focus:border-none active:border-none rounded-xl"
            />
            <p className='text-[#E23744] text-3xl font-bold ml-24 '>Easy To Order</p>
          </div>
          <div className="time-saving">
            <Image
              src="/images/ts1.png"
              width={400}
              height={400}
              alt="Time Saving"
              className="focus:border-none active:border-none rounded-xl"
            />
            <p className='text-[#E23744] text-3xl font-bold ml-28'>Time Saving</p>
          </div>
          <div className="best-quality">
            <Image
              src="/images/bq1.png"
              width={400}
              height={400}
              alt="Best Quality"
              className="focus:border-none active:border-none rounded-xl"
            />
            <p className='text-[#E23744] text-3xl font-bold ml-32'>Best Quality</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default page
