<template>
  <div class="pl-4 prose">
    <h1>{{ msg }}</h1>
    <h2>Questions</h2>
    <ul class="list-decimal">
      <li>Share Report doesn't work (Cobb)</li>
    </ul>
    <h2>Notes</h2>
    <ul class="list-decimal">
      <li>
        Inspiration: https://demos.creative-tim.com/notus-nextjs/admin/dashboard
      </li>
    </ul>
    <h2>Requirements</h2>
    <ul class="list-decimal">
      <li>Remove "Created on" from header</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: {
    msg: String,
  },
};
</script>
