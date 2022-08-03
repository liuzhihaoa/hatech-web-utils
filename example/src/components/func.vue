<template>
  <div class="example_func">
    <div 
      class="title" 
      v-text="title" 
    />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped>
.example_func {
  border: 1px solid #eee;
  display: table;
}
.title {
  border-bottom: 1px solid #eee;
  padding: 10px;
}
.content {
  padding: 10px 20px;
}
</style>