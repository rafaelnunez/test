<template>
  <div class="container">
    <div class="container-content">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
