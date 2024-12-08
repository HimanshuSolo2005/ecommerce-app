import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever, where style meets timeless quality. Our brand is dedicated to creating high-quality clothing that speaks to individuality, elegance, and confidence. Each piece is crafted with an emphasis on comfort, durability, and design, allowing you to express your unique personality without compromise.</p>
          <p>At Forever, we believe that fashion should be accessible and sustainable, evolving with trends while maintaining a classic appeal. Our collection is thoughtfully designed to be versatile, catering to both everyday wear and special occasions. Join us on this journey to celebrate fashion that lasts - because style, like memories, is Forever.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to inspire confidence and individuality through timeless, sustainable fashion. We aim to create high-quality clothing that empowers people to express their true selves while contributing to a more eco-conscious world. By combining innovative design with ethical practices, we strive to make fashion that not only feels good but also makes a positive impact on the planet and our community. Our commitment is to ensure that each piece is crafted to stand the test of time, embodying a spirit of style that truly lasts — because with Forever, fashion is forever.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600' >At Forever, we stand behind the quality and craftsmanship of every piece we create. We are committed to providing you with clothing that not only looks great but also lasts. Each item is carefully inspected and made to meet our high standards for durability, fit, and finish.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600' >Our fabrics are carefully selected to be both comfortable and durable, making them ideal for daily wear. We create designs that transition effortlessly from work to leisure, adapting to your lifestyle with timeless appeal. Plus, with easy-care materials, you can spend less time worrying about upkeep and more time looking and feeling your best.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600' >At Forever, exceptional customer service is at the heart of everything we do. We’re dedicated to making every interaction as seamless and satisfying as possible, from the moment you explore our collection to long after your purchase. Our team is here to provide personalized support, whether you need styling advice, have questions about sizing, or require assistance with an order.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About