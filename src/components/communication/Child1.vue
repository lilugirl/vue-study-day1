<template>
  <div>
    <h3>child1</h3>
    <button @click="$emit('some-event', 'some msg from child1')">点击</button>
  </div>
</template>
<script>
export default {};
</script>
