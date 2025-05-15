<script setup>
import logo from '@/assets/image/wings_logo.png'
</script>

<template>
  <footer>
    <div class="bg-navy py-8 text-white">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap justify-between">
          <!-- Company Logo & Description -->
          <div class="px-4 my-4 w-full xl:w-1/5">
            <a href="/" class="flex items-center space-x-2 mb-6">
              <img :src="logo" alt="WINGS GLOBAL FREIGHT" class="w-12 h-12 object-contain" />
              <span class="text-white text-lg font-semibold">WINGS GLOBAL FREIGHT</span>
            </a>
            <p class="text-sm text-justify">
              WINGS GLOBAL FREIGHT is committed to providing reliable, efficient, and secure
              logistics and freight forwarding solutions across the globe. We connect businesses
              with world-class supply chain services powered by technology and trust.
            </p>
          </div>

          <!-- Company Links -->
          <div class="px-4 my-4 w-full sm:w-auto">
            <h2 class="text-xl font-semibold pb-2 mb-4 border-b-4 border-blue-600 text-white">
              Company
            </h2>
            <ul class="space-y-2 text-sm">
              <li><a href="/about" class="hover:text-blue-400">About Us</a></li>
              <li><a href="/terms" class="hover:text-blue-400">Terms &amp; Conditions</a></li>
              <li><a href="/privacy" class="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/contact" class="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>

          <!-- Blog Links -->
          <div class="px-4 my-4 w-full sm:w-auto">
            <h2 class="text-xl font-semibold pb-2 mb-4 border-b-4 border-blue-600 text-white">
              Resources
            </h2>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-blue-400">Global Shipping Tips</a></li>
              <li><a href="#" class="hover:text-blue-400">Freight Forwarding 101</a></li>
              <li><a href="#" class="hover:text-blue-400">Import/Export Guidelines</a></li>
              <li><a href="#" class="hover:text-blue-400">How to Track Shipments</a></li>
              <li><a href="#" class="hover:text-blue-400">Visit Our Blog</a></li>
            </ul>
          </div>

          <!-- Social Media -->
          <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <h2 class="text-xl font-semibold pb-2 mb-4 border-b-4 border-blue-600 text-white">
              Connect With Us
            </h2>
            <div class="flex space-x-2">
              <a
                href="#"
                class="h-9 w-9 flex items-center justify-center border border-gray-400 rounded-full hover:text-blue-400 hover:border-blue-400"
              >
                <!-- Facebook -->

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-4 h-4"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="h-9 w-9 flex items-center justify-center border border-gray-400 rounded-full hover:text-blue-400 hover:border-blue-400"
              >
                <!-- Twitter -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-4 h-4"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M459.4 151.7c.3 4.6.3 9.1.3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4.9 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5.9 13 .9 19.8.9 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-51.9-84.1-102.9v-1.3c13.9 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-52.9 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.1 39.3-52.6 54.3z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="h-9 w-9 flex items-center justify-center border border-gray-400 rounded-full hover:text-blue-400 hover:border-blue-400"
              >
                <!-- Instagram -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-4 h-4"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8s-26.8-12-26.8-26.8 12-26.8 26.8-26.8 26.8 12 26.8 26.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="h-9 w-9 flex items-center justify-center border border-gray-400 rounded-full hover:text-blue-400 hover:border-blue-400"
              >
                <!-- LinkedIn -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-4 h-4"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7c-29.8 0-54-24.2-54-54s24.2-54 54-54 54 24.2 54 54-24.2 54-54 54zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.5-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.5-2.9 13.1-2.9 20.7V448h-92.4s1.2-262.7 0-290.1h92.4v41.1c-.2.3-.4.6-.6.9h.6v-.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.5 39.8 106.5 125.3V448z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Line -->
        <div class="mt-8 text-center text-xs text-gray-500">
          &copy; 2025 WINGS GLOBAL FREIGHT. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
