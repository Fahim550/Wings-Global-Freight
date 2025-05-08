<script setup lang="ts">
import Hero from '@/components/shared/Hero.vue'
</script>

<template>
  <div>
    <Hero message="Career" />
    <div class="container mx-auto px-4 grid grid-cols-2 py-8">
      <div class="col-span-1 py-24">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-blue-600 text-left">We are hiring</h2>
          <p class="mt-4 text-lg text-gray-700 text-left leading-8">
            At Wings Global Freight, we believe in nurturing and developing talent. We value
            teamwork and seek individuals with strong leadership qualities. If you're ready to
            embrace challenges and go the extra mile, you'll find the perfect opportunity with us.
          </p>
        </div>
      </div>
      <form class="py-8 col-span-1 container mx-auto divide-gray-200">
        <!-- Personal Info Section -->
        <div class="space-y-8">
          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"></div>

          <!-- Contact Info Section -->
          <div class="pt-8 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium text-gray-700"
                >First name</label
              >
              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                class="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium text-gray-700"
                >Last name</label
              >
              <input
                type="text"
                id="last-name"
                name="last-name"
                required
                class="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div class="sm:col-span-6">
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <input
                type="email"
                id="email"
                name="email"
                required
                class="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div class="sm:col-span-3">
              <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
              <select
                id="country"
                name="country"
                required
                class="mt-1 p-3 block w-full shadow-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Bangladesh</option>
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
            <div class="sm:col-span-3">
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="number"
                id="phone"
                name="phone"
                required
                class="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div class="sm:col-span-6">
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Please mention the position you are applying"
                required
                class="mt-1 p-3 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div class="sm:col-span-6">
              <label for="department" class="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select
                id="department"
                name="department"
                required
                class="mt-1 p-3 block w-full shadow-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled selected>Select a department</option>
                <option>Air Freight</option>
                <option>Ocean Freight</option>
                <option>Marketing</option>
                <option>Hr & Admin</option>
                <option>Business Development</option>
              </select>
            </div>

            <!-- Message Section -->
            <div class="sm:col-span-6">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>

            <!-- Upload File -->
            <div class="sm:col-span-6">
              <label for="resume-upload" class="block text-sm font-medium text-gray-700 mb-2"
                >Resume Upload</label
              >
              <div
                class="relative w-full sm:w-64 rounded-md border-2 border-dashed border-indigo-500 bg-gray-50 p-6 shadow-md hover:bg-indigo-50 transition"
              >
                <label
                  for="resume-upload"
                  class="flex flex-col items-center gap-2 cursor-pointer text-indigo-600 hover:text-indigo-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span class="text-sm font-medium">Upload your resume</span>
                  <span class="text-xs text-gray-500">(PDF, DOCX, max 5MB)</span>
                </label>
                <input
                  id="resume-upload"
                  name="resume"
                  type="file"
                  class="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="flex justify-end">
          <button
            type="submit"
            class="inline-flex justify-center py-3 px-8 border border-transparent text-xl font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
