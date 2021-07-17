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
  height: 100vh;
}

.container-content {
  margin-top: 80px;
  padding: 0 30px;
}
</style>
