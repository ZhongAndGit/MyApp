<template>
  <div id="app">
    <div id="top">
      <div class="item">
        <router-link to="/myMusic"> <h2>我的音乐</h2></router-link>
      </div>
      <div class="item" >
        <router-link to="/home"> <h2>发现音乐</h2></router-link>
      </div>
      <div class="item" >
        <router-link to="/newMusic"><h2>音乐热文</h2></router-link>
      </div>
      <div class="item">
        <router-link to="/bankID"><h2>账号</h2></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style>
  @import 'assets/style/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #top {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: rgba(0,0,0,0.85);
    color: white;
  }
  #top .item {
    flex: 1;
    text-align: center;
  }
  #top .item .icon {
    color: #666;
    font-size: 1.6em;
    padding: 5px 0;
  }
  #top .item h2 {
    font-size: 10px;
    padding: 3px 0;
  }
  .active {
    color: #ffffff !important;
  }
  a{
    color: #7e8c8d;
    text-decoration: none;
  }
</style>
