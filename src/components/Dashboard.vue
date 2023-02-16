<script setup>
import { onMounted } from "vue";
import { initTabs } from "flowbite";
import SchoolFilter from "./SchoolFilter.vue";
import DateRangeFilter from "./DateRangeFilter.vue";
import Metrics from "./Metrics.vue";
import Tabs from "./Tabs.vue";
</script>

<template>
  <div class="relative max-w-7xl">
    <nav
      class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
    >
      <div
        class="w-full items-end flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
      >
        <SchoolFilter></SchoolFilter>
        <DateRangeFilter></DateRangeFilter>
      </div>
    </nav>
    <div class="relative pt-32" style="background-color: #bb0000">
      <Metrics></Metrics>
      <div class="mt-5 mb-4 px-4 md:px-10">
        <Tabs></Tabs>
      </div>
    </div>

    <div id="myTabContent">
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Profile tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Dashboard tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Settings tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Contacts tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: String,
  },
};
</script>

