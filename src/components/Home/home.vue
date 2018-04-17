<template>
  <div id="conten" >
    <Ecar></Ecar>
    <Ctop></Ctop>
    <Clist></Clist>
  </div>
</template>
<script>
  import Ecar from './Carousel/Carousel.vue'
  import Ctop from './Search/search.vue'
  import Clist from './NewList/newList.vue'

  export default {
    components:{
      Ctop,//
      Ecar,//轮播图
      Clist //音乐榜单
    }
  }
</script>
