<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  overflow-y: hidden;
  width:100%;
  margin:0px;
}

body {
  min-width: 1200px;
  overflow-x: auto;
}
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  overflow: scroll;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
</style>
