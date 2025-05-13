<script setup>
import Hero from '@/components/shared/Hero.vue'
</script>

<template>
  <div>
    <Hero message="About" />

    <!-- Feature Sections -->
    <div class="relative overflow-hidden space-y-24 text-black">
      <!-- Section 1 -->
      <div class="relative bg-purple-100 py-16">
        <div class="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-24 lg:px-8">
          <!-- Left Column: Text -->
          <div class="max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:py-16">
            <h3 class="text-3xl font-bold">What We Offer</h3>
            <p class="mt-4 text-lg text-gray-700">
              Wings Freight Bangladesh delivers 360° freight forwarding solutions, including:
            </p>
            <ul class="mt-4 space-y-2 list-disc list-inside text-base text-gray-700">
              <li>Air and Sea Freight</li>
              <li>Groupage & Consolidation</li>
              <li>SeaAir Hybrid Services</li>
              <li>Warehousing & CFS Facilities</li>
              <li>3PL/4PL Logistics</li>
              <li>Import Services</li>
              <li>Project & Bulk Cargo Handling</li>
              <li>End-to-End Supply Chain Management</li>
            </ul>
          </div>

          <!-- Right Column: Image -->
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="relative lg:h-full">
              <img
                src="https://i.ibb.co/dswzL7sd/about1.jpg"
                alt="Freight services"
                class="w-full h-auto rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:inset-0 lg:w-full lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2 -->

      <div class="relative">
        <div
          class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
        >
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div class="mt-6">
              <h3 class="text-3xl font-bold">Comprehensive Freight Solutions</h3>
              <p class="mt-4 text-lg">
                From Air and Sea Freight to advanced 3PL/4PL logistics and warehousing, we provide
                integrated services tailored for every stage of your supply chain. Backed by modern
                facilities and industry expertise, our operations are built for scale and speed.
              </p>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Best in Industry"
                loading="lazy"
                width="647"
                height="486"
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                style="color: transparent"
                src="https://i.ibb.co/MDN1LxSL/best.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="relative bg-purple-100 py-16">
        <div
          class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
        >
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div class="mt-6">
              <h3 class="text-3xl font-bold">24/7 Customer Support</h3>
              <p class="mt-4 text-lg">
                No matter the time or day, our customer service team is ready to assist you. We’re
                committed to making your logistics journey smooth and stress-free.
              </p>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width="646"
                height="485"
                class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style="color: transparent"
                src="https://i.ibb.co/9k61fTxp/service.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
