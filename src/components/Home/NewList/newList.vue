<template>
    <div id="newList">
      <div>
        <p class="title">最新榜单 ＞</p>
        <div class="listData">
          <ul class="noeS">
            <li class="block_list" v-for="(item,index) in TopData" @click="toHottestList()">
              <div class="img"><img :src="item" ></div>
              <h4>{{item.name}}</h4>
              <p>{{item.copywriter}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div style="clear: both;">
        <p class="title">华语榜单 ＞</p>
        <div class="listData">
          <ul class="noeS">
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
          </ul>
        </div>
      </div>
      <div style="clear: both;">
        <p class="title">欧美榜单 ＞</p>
        <div class="listData">
          <ul class="noeS">
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
          </ul>
        </div>
      </div>
      <div style="clear: both;">
        <p class="title">日韩榜单 ＞</p>
        <div class="listData">
          <ul class="noeS">
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
            <li class="block_list">
              <div class="img"><img src="" alt=""></div>
              <h4>sssss</h4>
              <p>ffff</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
    export default {
    data () {
      return {
        // list
        TopData:[
            {
                name:'1111',
                copywriter:'11111'
            },{
                name:'22222',
                copywriter:'22222'
            },{
                name:'3333',
                copywriter:'333'
            },{
                name:'3333',
                copywriter:'333'
            },{
                name:'3333',
                copywriter:'333'
            },{
                name:'3333',
                copywriter:'333'
            },
            ]
      }
    },
    mounted(){
      this.hottest();
    },
    methods: {
      hottest(){
        axios.get('http://123.207.59.80:3000/top/playlist').then(function(res){
            console.log(res)
        }).catch(function(res){
            console.log(res)
        })
      },
      toHottestList(){

      }
    }
  }
</script>
<style>
  h4{padding: 0;margin: 0}
  ul,li{list-style: none}
    #newList{
      width: 95%;
      margin: auto;
    }
    #newList .title{
      padding-left:1rem ;
      margin-bottom: 0;
      text-align: left;
      border-left: 3px solid red;
    }
    #newList .listData>ul{
      padding: 0;
      /*display: flex;*/
      /*justify-content: space-between;*/
    }
    #newList .listData .block_list{
      float: left;
        width: 33%;
        height: 7rem;
    }
    #newList .listData .block_list .img{
        margin: auto;
        width: 5rem;
        height: 5rem;
        background:gray ;
    }
    #newList .listData .block_list h4,#newList .listData .block_list p{
      margin: 0 auto;
      width: 5rem;
      text-align: left;
    }
</style>
