<template>
  <div>
    <Row>
      <div v-for="item in blogList" :key="item.id">
        <Col span="8">
          <Card class="card">
            <div class="articleTitle"  @click="getBlogInfo(item)">
              <h3>{{item.title}}</h3>
            </div>
          </Card>
        </Col>
      </div>
    </Row>
  </div>
</template>
<script>
export default {
  mounted () {
    this.getBlogList()
  },
  data () {
    return {
      blogList: [],
      blogId: '0',
      modal: false
    }
  },
  methods: {
    getBlogInfo (blog) {
      this.$Modal.success({
        title: blog.title + '    ' + blog.author,
        content: blog.content,
        width: 80,
        okText: 'STAR',
        closable: true,
        fullscreen: true
      })
    },
    getBlogList () {
      this.$ajax({
        method: 'get',
        url: '/blog/topic/' + this.blogId
      }).then(
        r => {
          if (r.data.result === true) {
            this.blogList = r.data.data
          }
        }
      ).catch()
    }
  }
}
</script>
<style>
a,button,input{
  color: #1c2438;
}

.card{
  margin-top: 5%;
  width:80%
}

.articleTitle{
  text-align:center
}
</style>
