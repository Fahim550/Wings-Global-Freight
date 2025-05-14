<script setup lang="ts">
import Hero from '@/components/shared/Hero.vue'
</script>

<template>
  <section class="text-gray-600 body-font relative">
    <Hero message="Contact" />
    <!-- Map Section -->
    <div
      class="container mx-auto w-full py-8 h-[400px] md:h-[500px] rounded-lg overflow-hidden relative flex items-end justify-center"
    >
      <iframe
        class="w-full h-full"
        frameborder="0"
        title="map"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2865.8679174734552!2d90.39171443704583!3d23.821688001184402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a8355676fb%3A0x8eb0a4e2f91509e0!2sWasi%20Tower!5e0!3m2!1sen!2sbd!4v1746733324502!5m2!1sen!2sbd"
      ></iframe>
      <div
        class="bg-white mx-auto absolute flex flex-wrap py-2 rounded shadow-md h-[100px] sm:h-[170px] overflow-y-auto"
      >
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">572/k, Wasi Tower, Level-8, ECB Chattar, Dhaka 1206, Bangladesh</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-red-500 leading-relaxed">info@wingsfreightbd.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+8809611 678 068</p>
          <p class="leading-relaxed">+8801711 504 103</p>
        </div>
      </div>
    </div>

    <div class="gap-2 bg-light px-5 py-24 w-full flex flex-col md:flex-row justify-center">
      <!-- Contact Info -->
      <div class="md:w-1/2 w-full lg:pb-0 pb-10">
        <h2 class="text-[32px] md:text-[38px] font-bold mb-5">
          Contact <span class="text-secondery">Us</span>
        </h2>
        <p class="pb-5 md:pr-20">
          &quot; Everything starts with a need. Whether you're launching a new business and seeking
          a reliable freight solution, looking to switch your current logistics provider, or simply
          have a rate inquiry — we're here to help. No matter the reason, our team is always ready
          to support you every step of the way. &quot;
        </p>
        <div class="space-y-4">
          <div>
            <h4 class="text-lg font-medium">Email</h4>
            <p class="flex items-center gap-2 hover:underline">
              <MdOutlineEmail class="text-blue-500" /> info@wingsfreightbd.com
            </p>
          </div>
          <div>
            <h4 class="text-lg font-medium">Contact</h4>
            <p class="flex items-center gap-2">
              <FaPhoneAlt class="text-blue-500" /> +8801711 504 103
              <FaPhoneAlt class="text-blue-500" /> +8809611 678 068
            </p>
          </div>
          <div>
            <h4 class="text-lg font-medium">Address</h4>
            <p class="flex items-center gap-2">
              <FaMapMarkerAlt class="text-blue-500" /> 572/k, Wasi Tower, Level-8, ECB Chattar,
              Dhaka 1206, Bangladesh
            </p>
          </div>
        </div>
      </div>

      <div class="md:w-1/2 w-full flex p-6 justify-center items-center">
        <div class="w-full flex flex-col bg-white p-6 rounded-xl shadow-xl">
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            class="text-white bg-secondery border-0 w-24 py-2 px-6 focus:outline-none hover:bg-navy rounded text-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
