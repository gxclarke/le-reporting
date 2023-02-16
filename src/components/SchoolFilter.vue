<script setup>
import { onMounted, computed } from "vue";
import { initDropdowns } from "flowbite";

onMounted(() => {
  initDropdowns();
});

const schools = computed(() => [
  "Cobb County School District",
  "CobbK12",
  "East Side Elementary School",
  "Osborne High School",
  "Kell High School",
  "Clarkdale Elementary School",
  "Russell Elementary School",
  "Riverside Elementary School",
  "Clay-Harmony Leland Elementary School",
  "South Cobb High School",
]);
</script>

<template>
  <button
    id="dropdownSchoolsButton"
    data-dropdown-toggle="dropdownSchools"
    data-dropdown-placement="bottom"
    class="text-white hover:bg-blue-700 focus:outline-none font-bold rounded-lg text-3xl px-4 py-2.5 text-center inline-flex items-center"
    type="button"
  >
    {{ schools[0] }}
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

  <div id="dropdownSchools" class="z-10 hidden bg-white rounded-lg shadow w-90">
    <div class="p-3">
      <label for="input-group-search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="input-group-search"
          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
    <ul
      class="h-48 px-3 pb-3 overflow-y-auto text-sm xtext-gray-700"
      aria-labelledby="dropdownSchoolsButton"
    >
      <li v-for="model in schools">
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >{{ model }}</a
        >
      </li>
    </ul>
  </div>
</template>