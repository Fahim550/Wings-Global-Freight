<script setup>
// import airImage from '@/assets/images/air-freight.jpg'
// import heroImage from '@/assets/image/hero.jpg'
// import multimodalImage from '@/assets/images/multi-modal.jpg'
import air from '@/assets/image/airfreight.jpg'
import multi from '@/assets/image/multi-modal.jpg'
import ocean from '@/assets/image/ocean-freight.jpeg'
const services = [
  {
    title: 'Ocean Freight',
    image: ocean, // update with actual path
    description:
      'We have a dedicated team for ocean freight to give you the best service available. Our team ensures seamless co-ordination between off-dock, Port and ICD operators.',
  },
  {
    title: 'Air Freight',
    image: air, // update with actual path
    description:
      'Our air freight team ensures every shipment is handled with care on a priority basis in Bangladesh with a lot of appreciation from major carriers which made us the pioneer of air freight operation in Bangladesh.',
  },
  {
    title: 'Multi-modal',
    image: multi, // update with actual path
    description:
      'Our expertise of multi-modal services safeguards you the best mode of transport combination which reduces the transit time through various transport mode to numerous destinations and ensures the best value for money.',
  },
]
</script>

<template>
  <section class="py-16 bg-gray-100 text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-12">Our Services</h2>
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

      <div class="mt-10">
        <button
          href="#_"
          class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span
            class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"
          ></span>
          <span
            class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"
          ></span>
          <span class="relative text-white">More Services</span>
        </button>
      </div>
    </div>
  </section>
</template>
