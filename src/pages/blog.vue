<template>
  <div class="container">
    <headerComponent></headerComponent>
    <div class="blogHeader">
      <div class="blogTips">
        <div class="blogTitle">Blog</div>
        <div class="blogSlogan">enjoy the beauty of code . . .</div>
      </div>
      <div class="card">
        <cardComponent></cardComponent>
      </div>
    </div>
    <div class="list">
      <blogList></blogList>
    </div>
  </div>
  </div>
</template>

<script>
import headerComponent from '../components/header.vue'
import cardComponent from '../components/card.vue'
import blogList from '../pages/blogList.vue'
export default {
  components: {
    headerComponent,
    cardComponent,
    blogList
  }
}
</script>

<style>
.blogTitle {
  margin-left: 5%;
  line-height: 80px;
  font-family: CODE Bold;
  font-size: 45px;
}

.blogSlogan {
  margin-left: 5%;
  line-height: 30px;
  font-family: CODE Bold;
  font-size: 20px;
}

.blogTips {
  float: left;
  margin-left: 5%;
  width: 30%;
}

.blogHeader {
  width:100%
}

.card {
  margin-left: 5%;
  float: left;
}

.list {
  margin-top: 2%;
  margin-left: 3%;
}
</style>
