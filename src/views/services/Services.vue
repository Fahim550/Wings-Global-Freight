<script setup>
import Hero from '@/components/shared/Hero.vue'
const services = [
  {
    title: 'Ocean Freight',
    image: 'https://i.ibb.co/yFLcqrLn/ocean-freight.jpg', // update with actual path
    description:
      'We have a dedicated team for ocean freight to give you the best service available. Our team ensures seamless co-ordination between off-dock, Port and ICD operators.',
  },
  {
    title: 'Air Freight',
    image: 'https://i.ibb.co/7NNf7hDv/airfreight.jpg', // update with actual path
    description:
      'Our air freight team ensures every shipment is handled with care on a priority basis in Bangladesh with a lot of appreciation from major carriers which made us the pioneer of air freight operation in Bangladesh.',
  },
  {
    title: 'Multi-modal',
    image: 'https://i.ibb.co/5ghNczgS/multi-modal.jpg', // update with actual path
    description:
      'Our expertise of multi-modal services safeguards you the best mode of transport combination which reduces the transit time through various transport mode to numerous destinations and ensures the best value for money.',
  },
  {
    title: 'Warehousing',
    image: 'https://i.ibb.co/FCKb9Zw/warehousing.jpg', // update with actual path
    description:
      'We at Expo Freight understand your supply chain challenges and realize that warehousing and inventory control are very important aspects of your business. We have over 205,000 Square Feet of Warehouse Space.',
  },
  {
    title: 'Import Service',
    image: 'https://i.ibb.co/1G3XXL6L/import.jpg', // update with actual path
    description:
      'We deliver comprehensive supply chain solutions along with proactive customer service by offering competitive rates for various origins for both sea and air space allocations from major carriers.',
  },
  {
    title: 'Customs Brokerage',
    image: 'https://i.ibb.co/FkSLyNvJ/custom.jpg', // update with actual path
    description:
      'We provide solutions to complex situations in the commercial world for getting through all steps of custom formalities, duty assessments, and tax calculations.',
  },
]
</script>
<template>
  <Hero message="Service" />
  <section class="bg-light text-center">
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-semibold mb-12 text-secondery">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img :src="service.image" alt="Service" class="w-full h-52 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex relative h-full justify-center bg-[url('../assets/image/laptop.jpg')] items-center bg-cover bg-center bg-no-repeat"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="p-6 relative z-10">
        <div
          class="flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700"
        >
          <div class="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
            <h3 class="mb-2 text-2xl font-bold text-gray-100">Subscribe to Newsletter</h3>
            <p class="text-gray-700 dark:text-gray-400">
              Provide your email to get email notification when we launch new products or publish
              new articles
            </p>
          </div>
          <div class="w-full px-1 flex-0 md:w-auto lg:w-1/2">
            <form novalidate="">
              <input type="hidden" name="tags" value="earlyaccess" />
              <div class="flex flex-col sm:flex-row">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  class="flex-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
                <button
                  type="submit"
                  class="w-full px-6 py-4 mt-5 text-gray-900 text-lg bg-white rounded-md sm:mt-0 sm:w-auto whitespace-nowrap"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
