import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className="px-6 border-2 md:px-20 py-24 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className='flex flex-col justify-center'>
            <p className="small-text">
              Start Here with Price Tracker
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="ml-2 inline-block"
              />  
            </p>
            <h1 className='head-text'>Unleash the Power of <span className='text-primary'>PriceTracker</span></h1>
            <p className='mt-6'>
              Discover the best deals on the web with our stunning price tracker ecommerce site. 
              Find the perfect products at unbeatable prices, all in one place.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">
          Trending <span className='text-primary'>Products</span>
        </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {/* Trending Products */}
        </div>
      </section>
    </>
  )
}

export default Home