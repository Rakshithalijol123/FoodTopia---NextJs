import React from "react";
import Navbar from "../home/components/Navbar";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

export const metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <div className="main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="title">
        <p className="text-7xl font-bold text-center mt-12">
          {" "}
          <span className="text-[#E23744]">About</span>{" "}
          <span className="text-[#E23744] font-bold"> Food</span>
          <span className="font-bold">Topia</span>
        </p>
      </div>
      <div className="section1 flex justify-between mt-20 pl-12">
        <Image
          src="/images/foodtopia-logo.png"
          width={350}
          height={350}
          alt="Time Saving"
          className="focus:border-none active:border-none rounded-xl"
        />
        <div className="about-content1 px-48">
          <p className="text-2xl">
            Welcome to <span className="text-[#E23744] font-bold">Food</span>
            <span className="font-bold">Topia</span>, your one-stop destination
            for hassle-free food ordering from your college canteen! We
            understand that college life can be busy and demanding, and finding
            a convenient way to satisfy your cravings shouldn't be an additional
            challenge. That's why we've created{" "}
            <span className="text-[#E23744] font-bold">Food</span>
            <span className="font-bold">Topia</span>, a platform designed to
            make your dining experience on campus easier and more enjoyable.
          </p>
        </div>
      </div>
      <div className="section2">
        <p className="text-[#E23744] font-bold text-2xl pl-16">Our Story: </p>
        <p className="px-16 pr-40 mt-4">
          <span className="text-[#E23744] font-bold">Food</span>
          <span className="font-bold">Topia</span> was born out of a simple
          idea: to provide students with a convenient and efficient way to order
          food from their college canteen. We realized that students often face
          long lines, limited time between classes, and the stress of balancing
          academics and social life. With Foodtopia, we set out to streamline
          the food ordering process and offer a solution that fits seamlessly
          into your daily routine.
        </p>
      </div>
      <div className="section3 mt-8">
        <p className="text-[#E23744] font-bold text-2xl pl-16">Our Mission: </p>
        <p className="px-16 pr-40 mt-4">
          Our mission at Foodtopia is clear: to enhance your college dining
          experience by offering a quick, reliable, and user-friendly platform
          for ordering food. We are committed to:
        </p>
        <div className="mission-points px-20 pr-40 mt-4">
          <ul>
            <li className="mt-2">
              <span className="font-bold">Convenience: </span> We strive to
              eliminate the hassle of waiting in long lines. With Foodtopia, you
              can place your order in advance and pick it up at your
              convenience.
            </li>
            <li className="mt-2">
              <span className="font-bold">Variety: </span> We collaborate with
              your college canteen to provide a diverse menu that caters to all
              tastes and dietary preferences.
            </li>
            <li className="mt-2">
              <span className="font-bold">Quality: </span> We prioritize the
              quality and freshness of the food you receive. Our partners in the
              college canteen share our commitment to serving delicious and
              wholesome meals.
            </li>
            <li className="mt-2">
              <span className="font-bold">Affordability: </span> We understand
              the importance of budget-friendly options for students. Foodtopia
              offers competitive pricing to ensure you can enjoy tasty meals
              without breaking the bank.
            </li>
          </ul>
        </div>
        <div className="how mt-8">
          <p className="text-[#E23744] font-bold text-2xl pl-16">
            How Foodtopia Works:{" "}
          </p>
          <p className="px-16 pr-40 mt-4">
            Using Foodtopia is as easy as 1-2-3:
          </p>
          <div className="mission-points px-20 pr-40 mt-4">
            <ul>
              <li className="mt-2">
                <span className="font-bold">Browse Menus: </span> Explore the
                menus of your college canteen through our user-friendly app or
                website. Discover a wide range of options, from classic comfort
                foods to healthy alternatives.
              </li>
              <li className="mt-2">
                <span className="font-bold">Place Your Order: </span> Once
                you've made your selection, simply place your order and
                customize it to your preferences. Choose your pickup time, add
                any special instructions, and proceed to checkout.
              </li>
              <li className="mt-2">
                <span className="font-bold">Pick Up and Enjoy: </span> Arrive at
                your college canteen at the designated time to collect your
                freshly prepared meal. No more waiting in lines – your food will
                be ready and waiting for you.
              </li>
            </ul>
          </div>
        </div>
        <div className="touch mt-8">
          <p className="text-[#E23744] font-bold text-2xl pl-16">
              Get In Touch: {" "}
          </p>
          <p className="px-20 pr-40 mt-4">We value your feedback and are always here to assist you. If you have any questions, concerns, or suggestions, please don't hesitate to reach out to our customer support team. Your satisfaction is our top priority.</p>
          <p className="px-20 pr-40 mt-4">Thank you for choosing Foodtopia as your go-to food ordering platform. We look forward to serving you and making your college dining experience more enjoyable, convenient, and delicious.</p>
        </div>
      </div>
      <div className="section4 mt-16 bg-gray-400">
        <div className="flex justify-between mx-16">
          <div className="end-title mt-10">
            <p className="text-2xl font-bold mb-8" ><Link href="/home"><span className="text-[#E23744]">Food</span><span>Topia</span></Link></p>
            <p className="text-md text-white">Our job is to fulfill your tummy</p>
            <p className="text-md text-white">with delicious food and without</p>
            <p className="text-md text-white">having to wait in the canteen.</p>
          </div>
          <div className="get-in-touch mt-10">
            <p className="text-2xl font-bold text-white mb-4" >Get In Touch</p>
            <p className="text-md text-white">Questions or Feedback?</p>
            <p className="text-md text-white">We'd Love to hear from you</p>
            
            {/* <button className="border rounded-lg"><a href="mailto:RakshitKHalijol@gmail.com">E-mail Address</a></button> */}
            <button className="border-2 mb-4 text-xl text-[#E23744] border-white rounded-xl px-8 py-2 inline-block font-semibold hover:bg-white hover:text-[#E23744] mt-4 "><Link href="mailto:RakshitKHalijol@gmail.com"> <MdEmail className="inline mb-1 mr-3 text-2xl" /> E-mail</Link></button>
          </div>
        </div>
        <p className="text-center text-white" >©Copyright 2023 FoodTopia</p>
      </div>
    </div>
  );
};

export default page;
