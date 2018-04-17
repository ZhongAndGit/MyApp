<template>
    <div id="search">
      <div><button class="iconfont icon-shengyin"></button></div>
      <div><input  @keyup="get($event)"
                 type="text" placeholder="搜索音乐"></div>
      <div><button class="iconfont  icon-sousuo"></button></div>
    </div>
</template>
<style>
  @import '../../../assets/font/iconfont.css';
  button{
    border:0px;
    background-color:transparent;
    color: white;
    outline: none;
    width: 100%;
    height: 100%;
    display: inline-table
  }
  #search{
    background: black;
    width: 100%;
    margin: 0;
    display: flex;
    height: 6vh;
    line-height: 6vh;
    justify-content: space-around;
  }
    #search input{
      width: 90%;
      height: 2rem;
      border-radius: 1rem;
      border-style: none;
      font-size: 1rem;
      padding: 0 1rem;
      outline: none;
    }
</style>
<script>
  export default{
      methods:{
          get:function(ev){
              console.log(ev)
            this.$http.jsonp('http://musicapi.leanapp.cn/search?keywords='+ev.key,{
              jsonp:'cb'     //第二个参数
            }).then(function(res){    //成功
              this.myData=res.data.s;
            },function(res){      //错误
              console.log(res)
            });
          }
      }
  }
</script>
