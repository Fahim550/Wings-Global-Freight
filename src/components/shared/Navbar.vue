<script setup>
import logo from '@/assets/image/wings_logo.png'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)
const scrolled = ref(false)

const dropdowns = reactive({
  about: false,
  member: false,
})

function toggleDropdown(menu) {
  dropdowns[menu] = !dropdowns[menu]
}

function handleScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <div class="bg-navy h-10 text-white flex items-center justify-between px-4 text-sm">
      <!-- Left side: Email -->
      <div>
        <a href="mailto:info@example.com" class="hover:underline">info@wingsfreightbd.com</a>
      </div>

      <!-- Right side: Social Icons -->
      <div class="flex items-center space-x-4">
        <a href="#" target="_blank" aria-label="Facebook" class="hover:text-blue-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.2 22 17.06 22 12.07z"
            />
          </svg>
        </a>
        <a href="#" target="_blank" aria-label="Twitter" class="hover:text-sky-400">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.35 8.43 8.43 0 0 1-2.7 1.03A4.22 4.22 0 0 0 16.1 4c-2.34 0-4.23 1.9-4.23 4.24 0 .33.04.66.11.97-3.51-.18-6.62-1.86-8.7-4.42a4.3 4.3 0 0 0-.57 2.13 4.24 4.24 0 0 0 1.88 3.53 4.2 4.2 0 0 1-1.91-.53v.05c0 2.03 1.45 3.72 3.37 4.1a4.28 4.28 0 0 1-1.9.07 4.24 4.24 0 0 0 3.96 2.94 8.49 8.49 0 0 1-5.27 1.82c-.34 0-.67-.02-1-.06A11.98 11.98 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.35-.02-.53A8.38 8.38 0 0 0 22.46 6z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/wings-global-freight-limited/"
          target="_blank"
          aria-label="LinkedIn"
          class="hover:text-blue-300"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3V9zm7 0h3.6v1.8h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.45 4.45 5.6V21h-4v-5.3c0-1.25-.02-2.85-1.8-2.85-1.8 0-2.1 1.4-2.1 2.75V21h-4V9z"
            />
          </svg>
        </a>
      </div>
    </div>

    <nav
      :class="[
        'fixed  w-full z-50 transition-all duration-100',
        scrolled
          ? 'top-0 bg-white shadow-md text-black'
          : 'top-10 bg-white/10 backdrop-blur-md text-white',
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo and Brand Name -->
          <div class="flex items-center">
            <img class="w-16 h-16" :src="logo" alt="Logo" />
            <!-- <span class="ml-2 font-bold text-xl text-gray-800">Engineer Association of Bahubal</span> -->
          </div>
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-4">
            <RouterLink
              to="/"
              class="text-inherit hover:text-primary transition-colors duration-50"
            >
              Home
            </RouterLink>

            <!-- Wings Freight Dropdown -->
            <div class="relative group">
              <button class="text-inherit hover:text-primary transition-colors duration-50">
                Wings Freight
              </button>
              <ul
                class="absolute left-0 mt-2 w-48 bg-light border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50"
              >
                <RouterLink
                  to="/about"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-light"
                >
                  About
                </RouterLink>
                <RouterLink
                  to="/our-vision"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-light"
                >
                  Our Vision
                </RouterLink>
                <!-- <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light">
                  CSR
                </RouterLink>
                <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light">
                  Compliance
                </RouterLink>
                <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light">
                  Human Resource
                </RouterLink>
                <RouterLink
                  to="/location"
                  class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light"
                >
                  Location
                </RouterLink> -->
              </ul>
            </div>

            <!-- Services Dropdown -->
            <div class="relative group">
              <button class="text-inherit hover:text-primary transition-colors duration-50">
                Services
              </button>
              <div
                class="absolute left-0 mt-2 w-56 bg-light backdrop-blur border border-gray-200 rounded-md shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-out z-50"
              >
                <RouterLink
                  to="/service"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-light"
                >
                  Services
                </RouterLink>
                <RouterLink
                  to="/import-service"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-light"
                >
                  Import Service
                </RouterLink>
                <!-- <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light">
                  Air Freight
                </RouterLink>
                <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light">
                  Multimodal
                </RouterLink>
                <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light">
                  Warehousing
                </RouterLink>

                <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light">
                  Customs Brokerage
                </RouterLink>
                <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700  hover:bg-primary  hover:text-light">
                  Quality Control Platform
                </RouterLink> -->
              </div>
            </div>

            <RouterLink
              to="/career"
              class="text-inherit hover:text-primary transition-colors duration-50"
            >
              Career
            </RouterLink>
            <RouterLink
              to="/projects"
              class="text-inherit hover:text-primary transition-colors duration-50"
            >
              Projects
            </RouterLink>
            <!-- <RouterLink
              to="/home"
              class="text-inherit hover:text-primary transition-colors duration-50"
            >
              Gallery
            </RouterLink> -->
            <RouterLink
              to="/contact"
              class="text-inherit hover:text-primary transition-colors duration-50"
            >
              Contact Us
            </RouterLink>

            <RouterLink
              to="/"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span
                class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-navy group-hover:h-full"
              ></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span
                class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
              >
                <svg
                  class="w-5 h-5 text-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span
                class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
              >
                Booking
              </span>
            </RouterLink>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              type="button"
              class="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  v-if="!isMobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <RouterLink
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
            >Home</RouterLink
          >

          <div>
            <button
              @click="toggleDropdown('about')"
              class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray- hover:text-blue-600 focus:outline-none"
            >
              Wings Freight
            </button>
            <div v-if="dropdowns.about" class="pl-4">
              <RouterLink
                to="/about"
                class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
                >About
              </RouterLink>
              <RouterLink
                to="/our-vision"
                class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
                >Our Vision
              </RouterLink>
            </div>
          </div>

          <div>
            <button
              @click="toggleDropdown('member')"
              class="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600 focus:outline-none"
            >
              Service
            </button>
            <div v-if="dropdowns.member" class="pl-4">
              <RouterLink
                to="/Service"
                class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
                >Service</RouterLink
              >
              <RouterLink
                to="/"
                class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
                >Import Service</RouterLink
              >
            </div>
          </div>

          <RouterLink
            to="/career"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
            >Career</RouterLink
          >

          <RouterLink
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
            >Project</RouterLink
          >

          <!-- <RouterLink
            to="/home"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
            >Gallery</RouterLink
          > -->

          <RouterLink
            to="/contact"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-blue-600"
            >Contact Us</RouterLink
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* Add any additional styling if necessary */
</style>
