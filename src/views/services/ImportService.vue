<script setup>
import importService from '@/assets/image/import-service.jpg'
import Hero from '@/components/shared/Hero.vue'
</script>
<template>
  <Hero message="Import Service" />
  <div class="relative bg-purple-100 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-24 lg:px-8">
      <!-- Left Column: Text -->
      <div class="max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:py-16">
        <h3 class="text-3xl font-bold text-purple-500">Import Service</h3>
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
            :src="importService"
            alt="Freight services"
            class="w-full h-auto rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:inset-0 lg:w-full lg:h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
