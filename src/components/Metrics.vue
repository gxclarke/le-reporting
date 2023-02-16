<script setup>
import { onMounted, computed } from "vue";
import { initTooltips, initPopovers } from "flowbite";

onMounted(() => {
  initTooltips();
  initPopovers();
});

const metrics = computed(() => [
  {
    title: "Searches",
    value: "327,640",
    icon: "magnifying-glass",
    iconClass: "bg-pink-500",
  },
  {
    title: "Resources Accessed",
    value: "328,126",
    icon: "eye",
    tooltip:
      "Resources that are opened, downloaded, favorited, added to a collection/folder, or played in a collection or folder. Resources accessed by users who start the Player through a link (typically students) are only recorded at the district or account level.",
    iconClass: "bg-blue-500",
  },
  {
    title: "Collection Plays",
    value: "71,263",
    icon: "play",
    iconClass: "bg-orange-500",
    tooltip:
      "The number of Collections and Folders that are played by teachers and students. Non-authenticated users (typically students) are only recorded at the district or account level.",
    secondaryValue: "37",
    secondaryText: "collections assigned",
  },
  {
    title: "Collections Saved",
    value: "8,249",
    icon: "square-plus",
    iconClass: "bg-purple-500",
    secondaryValue: "48",
    secondaryText: "collections published",
  },
]);
</script>

<template>
  <div class="px-4 md:px-10 mx-auto w-full">
    <div class="flex flex-wrap">
      <div
        v-for="(model, index) in metrics"
        :key="model.title"
        class="w-full lg:w-6/12 xl:w-3/12 px-4"
      >
        <div
          class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full max-w-full flex-grow flex-1">
                <h5 class="text-gray-400 uppercase font-bold text-xs">
                  {{ model.title }}
                  <span
                    v-if="model.tooltip"
                    :data-tooltip-target="'metric-tooltip-' + index"
                    class="text-blue-600"
                    ><font-awesome-icon icon="circle-info"
                  /></span>
                </h5>
                <div
                  :id="'metric-tooltip-' + index"
                  role="tooltip"
                  class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  {{ model.tooltip }}
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <span
                  class="font-semibold text-xl text-gray-700"
                  :class="model.secondaryValue ? 'text-xl' : 'text-2xl'"
                  >{{ model.value }}</span
                >
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
                  :class="[model.iconClass]"
                >
                  <font-awesome-icon :icon="model.icon" />
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-400">
              <span class="text-gray-400">{{ model.secondaryValue }}</span
              >&nbsp;{{ model.secondaryText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Metrics",
};
</script>

