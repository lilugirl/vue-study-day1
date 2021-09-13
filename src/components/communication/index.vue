<template>
  <div>
    <h2>组件通讯</h2>
    <child-1 msg="some msg from parent" @some-event="onSomeEvent"></child-1>
    <child2
      ref="child2"
      msg="some msg from parent"
      @some-event="onSomeEvent"
    ></child2>
  </div>
</template>
<script>
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
export default {
  provide() {
    return {
      foo: "foo from grandpa",
      grandpa: this,
    };
  },
  components: {
    Child1,
    Child2,
  },
  methods: {
    onSomeEvent(msg) {
      console.log("comunication ", msg);
    },
  },
};
</script>
