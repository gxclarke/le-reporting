<script setup>
import { onMounted } from "vue";
import { Tabs } from "flowbite";

onMounted(() => {
  const elements = [
    {
      id: "1",
      triggerEl: document.querySelector("#profile-tab"),
      targetEl: document.querySelector("#profile"),
    },
    {
      id: "3",
      triggerEl: document.querySelector("#dashboard-tab"),
      targetEl: document.querySelector("#dashboard"),
    },
    {
      id: "3",
      triggerEl: document.querySelector("#settings-tab"),
      targetEl: document.querySelector("#settings"),
    },
    {
      id: "4",
      triggerEl: document.querySelector("#contacts-tab"),
      targetEl: document.querySelector("#contacts"),
    },
  ];

  const options = {
    defaultTabId: "3",
    activeClasses: "text-blue-600 hover:text-blue-600 border-blue-600 bg-white",
    inactiveClasses: "text-white hover:bg-gray-700",
  };

  console.log(elements);

  /*const tabs =*/ new Tabs(elements, options);
});

const tabs = [
  { key: "profile", title: "Content Providers" },
  { key: "dashboard", title: "Grade Levels" },
  { key: "settings", title: "Teachers" },
  { key: "contacts", title: "Something" },
];
</script>
      
<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center"
      id="myTab"
      data-tabs-toggle="#myTabContent"
      role="tablist"
    >
      <li
        v-for="model in tabs"
        :key="model.key"
        class="mr-2"
        role="presentation"
      >
        <button
          class="inline-block p-4 rounded-t-lg"
          :id="model.key + '-tab'"
          type="button"
          role="tab"
          :aria-controls="model.key"
          aria-selected="false"
        >
          {{ model.title }}
        </button>
      </li>
    </ul>
  </div>
</template>