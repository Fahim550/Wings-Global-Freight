<script setup>
import about1 from '@/assets/image/about1.jpg'
import best from '@/assets/image/best.jpg'
import mdpic from '@/assets/image/mdpic.jpg'
import service from '@/assets/image/service.jpg'
import Hero from '@/components/shared/Hero.vue'
import { ref } from 'vue'

const showModal = ref(false)
const videoSrc = ref('')

const openModal = () => {
  videoSrc.value = 'https://www.youtube.com/embed/DWRcNpR6Kdc?autoplay=1'
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  videoSrc.value = ''
}
</script>

<template>
  <div>
    <Hero message="About" />

    <!-- About MD Section -->
    <div class="py-10 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Left Column (Image + MD Info) -->
          <div>
            <img :src="mdpic" alt="Managing Director" class="w-full rounded shadow" />
            <div class="bg-blue-600 text-white text-center py-4 mt-4">
              <h4 class="text-xl font-semibold">
                MD. NURUL AMIN<br />
                <span class="text-sm">Managing Director</span>
              </h4>
            </div>
          </div>

          <!-- Right Column (Text Content) -->
          <div>
            <h6 class="text-blue-600 uppercase font-bold text-sm tracking-widest">About Us</h6>
            <h1 class="text-3xl font-bold mt-2 mb-4">
              We are confident to handle your logistics needs.
            </h1>
            <p class="text-gray-700 leading-relaxed mb-6">
              The ever-changing world of the Clearing and Forwarding Sector requires its players to
              constantly be on the lookout for more innovative and sophisticated ways to stay in the
              game. As our sector goes hand in hand with transportation and logistics, it goes
              without saying that remaining dynamic, effective, and efficient to meet our clients'
              needs is mandatory.
              <br /><br />
              At Wings Global Freight Ltd., we not only pride ourselves in possessing and
              maintaining these traits but also in always improving our services so as to not only
              meet but exceed our clients‘ expectations. This keeps us well ahead of the game. As
              you go through our profile, we are confident that you will want us to handle your
              "ImpoExpo" and logistics needs.
            </p>

            <a
              href="profile/Wings Global Freight Ltd-Corporate Profile.pdf"
              target="_blank"
              class="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Download Our Profile
            </a>

            <!-- Video Play Button -->
            <div class="flex items-center mt-6 space-x-4">
              <button
                @click="openModal"
                class="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <span
                  class="absolute inset-0 rounded-full border-4 border-white animate-ping"
                ></span>
                <svg class="w-6 h-6 text-white z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M6.5 5.5a1 1 0 011.493-.87l6 4a1 1 0 010 1.74l-6 4A1 1 0 016.5 13.5v-8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <h5 class="text-lg font-semibold">Play Video</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
      >
        <div class="bg-white rounded shadow-lg max-w-3xl w-full p-4 relative">
          <button
            @click="closeModal"
            class="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          >
            &times;
          </button>
          <div class="aspect-w-16 aspect-h-9">
            <iframe class="w-full h-full" :src="videoSrc" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Sections -->
    <div class="container mx-auto relative overflow-hidden pt-16 pb-32 space-y-24 text-black">
      <!-- Section 1 -->
      <div class="relative bg-white py-16">
        <div class="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-24 lg:px-8">
          <!-- Left Column: Text -->
          <div class="max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:py-16">
            <h3 class="text-3xl font-bold">What We Offer</h3>
            <p class="mt-4 text-lg text-gray-700">
              Expo Freight Bangladesh delivers 360° freight forwarding solutions, including:
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
                :src="about1"
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
                :src="best"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="relative">
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
                :src="service"
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
<style scoped>
/* Tailwind's aspect ratio plugin is required OR manually add this: */
.aspect-w-16 {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}
.aspect-h-9 iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
