<script setup>
import { onMounted } from "vue";
import { initDropdowns } from "flowbite";

onMounted(() => {
  initDropdowns();
});
</script>

<template>
  <button
    id="dropdownDataRangeButton"
    data-dropdown-toggle="dropdownDateRanges"
    data-dropdown-placement="bottom"
    class="text-white hover:bg-blue-700 focus:outline-none rounded-lg text-xl px-4 py-2.5 text-center inline-flex items-center"
    type="button"
  >
    Last 30 Days
    <svg
      class="w-4 h-4 ml-2"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>

  <div
    id="dropdownDateRanges"
    class="z-10 hidden bg-white rounded-lg shadow w-90"
  >
    <ul
      class="h-48 px-3 pb-3 overflow-y-auto text-sm xtext-gray-700"
      aria-labelledby="dropdownDataRangeButton"
    >
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Last 7 Days</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Last 30 Days</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Last 180 Days</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Last 12 Months</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Custom Range</a
        >
      </li>
    </ul>
  </div>
</template>