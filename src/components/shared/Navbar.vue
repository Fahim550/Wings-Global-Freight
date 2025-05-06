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
  <nav
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md text-black' : 'bg-white/10 backdrop-blur-md text-white',
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
          <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>

          <!-- Wings Freight Dropdown -->
          <div class="relative group">
            <button class="text-gray-700 hover:text-blue-600 px-4 py-2 inline-block">
              Wings Freight
            </button>
            <ul
              class="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50"
            >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >About</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Our Vision</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >CSR</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Compliance</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Human Resource</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Location</RouterLink
              >
            </ul>
          </div>

          <!-- Services Dropdown -->
          <div class="relative group">
            <button class="text-gray-700 hover:text-blue-600 focus:outline-none px-4 py-2">
              Services
            </button>
            <div
              class="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50"
            >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Services</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Air Freight</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Multimodal</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Warehousing</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Import Service</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Customs Brokerage</RouterLink
              >
              <RouterLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Quality Control Platform</RouterLink
              >
            </div>
          </div>

          <a href="#" class="text-gray-700 hover:text-blue-600">Career</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">News</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Gallery</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Contact Us</a>

          <RouterLink
            to="/"
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span
              class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
            ></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-green-400"
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
                class="w-5 h-5 text-green-400"
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
              >Booking</span
            >
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
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
          >Home</a
        >
        <div>
          <button
            @click="toggleDropdown('about')"
            class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            About Us
          </button>
          <div v-if="dropdowns.about" class="pl-4">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              >Our Activities</a
            >
          </div>
        </div>
        <div>
          <button
            @click="toggleDropdown('member')"
            class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            Member
          </button>
          <div v-if="dropdowns.member" class="pl-4">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              >Membership Registration</a
            >
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              >How to Get Membership</a
            >
          </div>
        </div>
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
          >Committees</a
        >
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
          >Job Board</a
        >
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
          >Gallery</a
        >
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
          >News & Update</a
        >
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
          >Contact Us</a
        >
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
          >Login</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Add any additional styling if necessary */
</style>
