<template>
  <div class="home">
    home
    <child></child>
  </div>
</template>

<script>
// @ is an alias to /src
import Child from "../components/communication/index.vue";
export default {
  name: "Home",
  components: {
    Child,
  },
};
</script>
