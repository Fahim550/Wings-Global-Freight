<script setup>
import best from '@/assets/image/best.jpg'
import fast from '@/assets/image/fast.jpeg'
import service from '@/assets/image/service.jpg'
</script>

<template>
  <div class="container mx-auto relative overflow-hidden pt-16 pb-32 space-y-24 text-black">
    <div class="flex flex-col justify-center items-center gap-2">
      <h1 class="text-4xl font-bold text-blue-500">Why Choose Us</h1>
      <p class="text-xl font-semibold">
        We provide seamless, reliable logistics solutions that keep your supply chain moving.
      </p>
    </div>
    <div class="relative">
      <div
        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
      >
        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div class="mt-6">
              <h3 class="mt-6 text-3xl font-bold">Faster, Safe and Trusted Logistics</h3>
              <p class="mt-4 text-lg">
                To ensure you always have access to the space you need at the best rates, we’ve
                built strong partnerships with top airlines and shipping companies worldwide.
              </p>
              <div class="mt-6">
                <a
                  class="inline-flex rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-700 hover:ring-purple-700"
                  href="/login"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              loading="lazy"
              width="647"
              height="486"
              class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              style="color: transparent"
              :src="fast"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div
        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
      >
        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
          <div>
            <div class="mt-6">
              <h3 class="mt-6 text-3xl font-bold">Best In Industry</h3>
              <p class="mt-4 text-lg">
                With years of hands-on logistics experience and a global network, we set the
                standard in freight forwarding, warehousing, and transport solutions.
              </p>
              <div class="mt-6">
                <a
                  class="inline-flex rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-700 hover:ring-purple-700"
                  href="/login"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              alt="Inbox user interface"
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

    <div class="relative">
      <div
        class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
      >
        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div class="mt-6">
              <h3 class="mt-6 text-3xl font-bold">24/7 Customer Support</h3>
              <p class="mt-4 text-lg">
                No matter the time or day, our customer service team is ready to assist you. We’re
                committed to making your logistics journey smooth and stress-free.
              </p>
              <div class="mt-6">
                <a
                  class="inline-flex rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-700 hover:ring-purple-700"
                  href="/login"
                >
                  Learn More
                </a>
              </div>
            </div>
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
</template>
