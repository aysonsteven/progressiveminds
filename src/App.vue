<template>
  <div id="app">
    <header>
      <span class="brand" @click="goHome">LOGO</span> 
      <span class="right" @click="goLogin">Login</span>     
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goHome(){
      this.$router.push('/')
    },
    goLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.brand{
  float: left;
}
.right{
  float: right;
  cursor: pointer;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
    text-align: center;
    overflow: auto;
    height: calc(100vh - 40px);
    box-sizing: border-box;
}

main::-webkit-scrollbar{
    width: 4px;
}

main::-webkit-scrollbar-thumb{
    background-color: #264e8e;
}
header {
  margin: 0;
  height: 40px;
  padding: 0 13px 0 24px;
  background-color: #0c377c;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 0.5;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  cursor: pointer;
}
</style>
