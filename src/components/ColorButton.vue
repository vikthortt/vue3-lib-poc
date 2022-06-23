<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'initial'
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <button>{{text}}</button>
</template>

<style scoped>
  button {
    color: v-bind(color)
  }
</style>