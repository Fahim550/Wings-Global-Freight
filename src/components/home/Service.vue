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
  <section class="py-16 bg-white text-center">
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
          class="bg-fuchsia-700 hover:bg-fuchsia-800 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          More Services
        </button>
      </div>
    </div>
  </section>
</template>
