<template>
<div class="container">
<headerComponent></headerComponent>
<div class="title" :style="indexGroundImg">I'm not gonna die here</div>
<div class="central">
  <div class="switch">
    <ButtonGroup size="large" shape="circle">
        <Button type="default">Blog</Button>
        <Button disabled>Product</Button>
    </ButtonGroup>
  </div>
  <div class="list">
    <blogList></blogList>
  </div>
</div>
</div>
</template>

<script>
import headerComponent from '../components/header.vue'
import blogList from '../pages/blogList.vue'
export default {
  components: {
    blogList,
    headerComponent
  },
  data () {
    return {
      indexGroundImg: {
        background:
          'url(' + require('../../static/images/indexGroundImg.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        height: '50%',
        width: '100%',
        backgroundSize: 'cover'
      }
    }
  }
}
</script>

<style>
  .title{
    text-align: center;
    height: 50%;
    line-height: 380px;
    font-family: CODE Bold;
    font-size: 45px;
  }

  html, body{
    height: 100%;
  }

  .switch{
    margin-top: 2%;
    margin-left: 2%;
  }

  .list{
    margin-top: 2%;
    margin-left: 2%;
  }

</style>
