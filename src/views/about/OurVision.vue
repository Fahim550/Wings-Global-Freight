<script setup>
import chairman from '@/assets/image/chairman.png'
import dgpic from '@/assets/image/dgpic.jpg'
import mdpic from '@/assets/image/mdpic.jpg'
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
  <section
    class="relative bg-[url('../assets/image/vision.jpg')] bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
  >
    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Hero text content -->
    <div class="relative z-10 text-center px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Our Vision</h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto">
        Home<span class="text-6xl font-bold mb-6"> . </span>Our Vision
      </p>
    </div>
  </section>

  <div class="py-10 space-y-20">
    <!-- chiarman -->
    <div class="max-w-7xl mx-auto justify-between px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Left Column (Speech) -->
        <div>
          <h6 class="text-blue-600 uppercase font-bold text-sm tracking-widest">
            A Message from Our Chairman
          </h6>
          <h1 class="text-3xl font-bold mt-2 mb-4">Our mission is to exceed your expectations.</h1>
          <p class="text-gray-700 leading-relaxed mb-6">
            At Wings Global Freight Ltd., our journey has always been driven by a singular vision —
            to connect the world through efficient and trustworthy logistics. As Chairman, I take
            immense pride in how far we have come and the values that guide us. In a world where
            borders are no longer barriers, logistics has become the backbone of global trade. Our
            team is dedicated to ensuring your cargo moves seamlessly, safely, and swiftly — no
            matter the destination. We believe in partnerships, not just transactions, and we are
            honored to be part of your business journey. Thank you for trusting us as your logistics
            partner.
          </p>
          <a
            href="https://drive.google.com/file/d/1CHnFq49dW5qDNfDjWeS-lgw4MSgv2GGs/preview"
            target="_blank"
            class="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Download Our Profile
          </a>
          <div class="flex items-center mt-6 space-x-4">
            <button
              @click="openModal('https://www.youtube.com/embed/YOUR_DIRECTOR_VIDEO')"
              class="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
            >
              <span class="absolute inset-0 rounded-full border-4 border-white animate-ping"></span>
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

        <!-- Right Column (Image + Info) -->
        <div class="flex flex-col justify-center items-center">
          <img
            :src="chairman"
            alt="Director Business Development"
            class="w-4/6 justify-center max-h-[500px] object-cover rounded shadow"
          />
          <div class="bg-blue-600 text-white text-center w-4/6 py-4 mt-4">
            <h4 class="text-xl font-semibold">
              Aukiul Islam<br />
              <span class="text-sm">Head of Business Development</span>
            </h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Managing Director Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Left Column (Image + Info) -->
        <div>
          <img
            :src="mdpic"
            alt="Managing Director"
            class="w-full max-h-[500px] object-cover rounded shadow"
          />
          <div class="bg-blue-600 text-white text-center py-4 mt-4">
            <h4 class="text-xl font-semibold">
              MD. NURUL AMIN<br />
              <span class="text-sm">Managing Director</span>
            </h4>
          </div>
        </div>

        <!-- Right Column (Speech) -->
        <div>
          <h6 class="text-blue-600 uppercase font-bold text-sm tracking-widest">
            Message from Managing Director
          </h6>
          <h1 class="text-3xl font-bold mt-2 mb-4">
            We are confident to handle your logistics needs.
          </h1>
          <p class="text-gray-700 leading-relaxed mb-6">
            In today’s fast-paced and evolving logistics landscape, staying ahead requires more than
            just experience — it demands innovation, flexibility, and a relentless commitment to
            excellence. At Wings Global Freight Ltd., we understand the critical role we play in
            your supply chain. That’s why we continuously refine our services to be smarter, faster,
            and more reliable. We don’t just deliver goods — we deliver confidence. As you explore
            our company profile, we hope you’ll see why we are the trusted choice for comprehensive
            import, export, and freight solutions
          </p>
          <a
            href="https://drive.google.com/file/d/1CHnFq49dW5qDNfDjWeS-lgw4MSgv2GGs/preview"
            target="_blank"
            class="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Download Our Profile
          </a>
          <div class="flex items-center mt-6 space-x-4">
            <button
              @click="openModal('https://www.youtube.com/embed/YOUR_MD_VIDEO')"
              class="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
            >
              <span class="absolute inset-0 rounded-full border-4 border-white animate-ping"></span>
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

    <!-- Director Business Development Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Left Column (Speech) -->
        <div>
          <h6 class="text-blue-600 uppercase font-bold text-sm tracking-widest">
            Message from Head of Business Development
          </h6>
          <h1 class="text-3xl font-bold mt-2 mb-4">Our mission is to exceed your expectations.</h1>
          <p class="text-gray-700 leading-relaxed mb-6">
            The logistics and freight forwarding industry is more competitive and complex than ever.
            At Wings Global Freight Ltd., we’ve built our foundation on adaptability, precision, and
            client-centric service. We go beyond simply managing cargo — we craft tailored solutions
            that help your business grow and thrive. By combining industry insight with cutting-edge
            practices, we ensure seamless operations at every stage. We invite you to browse our
            profile and discover how our passion and performance can support your logistics goals.
          </p>
          <a
            href="https://drive.google.com/file/d/1CHnFq49dW5qDNfDjWeS-lgw4MSgv2GGs/preview"
            target="_blank"
            class="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Download Our Profile
          </a>
          <div class="flex items-center mt-6 space-x-4">
            <button
              @click="openModal('https://www.youtube.com/embed/YOUR_DIRECTOR_VIDEO')"
              class="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
            >
              <span class="absolute inset-0 rounded-full border-4 border-white animate-ping"></span>
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

        <!-- Right Column (Image + Info) -->
        <div>
          <img
            :src="dgpic"
            alt="Director Business Development"
            class="w-full max-h-[500px] object-cover rounded shadow"
          />
          <div class="bg-blue-600 text-white text-center py-4 mt-4">
            <h4 class="text-xl font-semibold">
              Aukiul Islam<br />
              <span class="text-sm">Head of Business Development</span>
            </h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Shared Video Modal -->
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
</template>

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
