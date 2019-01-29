        <template>
            <Card style="width:350px">
                <p slot="title">
                    <Icon type="ios-book" />
                    HOT blogs
                </p>
                <a href="#" slot="extra" @click.prevent="changeLimit">
                    <Icon type="ios-loop-strong"></Icon>
                    Change
                </a>
                <ul>
                    <li v-for="item in recommendedBlogs" :key="item.url">
                        <a :href="item.url" target="_blank">{{ item.blog.title }}</a>
                        <span>
                            <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.count >= 1"></Icon><Icon type="ios-star-half" v-else></Icon>
                            {{ item.count }}
                        </span>
                    </li>
                </ul>
            </Card>
        </template>
<script>
export default {
  mounted () {
    this.changeLimit()
  },
  data () {
    return {
      recommendedBlogNum: 6,
      recommendedBlogs: []
    }
  },
  methods: {
    changeLimit () {
      this.$ajax({
        method: 'get',
        url: '/blog/blog/recommended/' + this.recommendedBlogNum
      }).then(
        r => {
          if (r.data.result === true) {
            this.recommendedBlogs = r.data.data
          }
        }
      ).catch()
    }
  }
}
</script>
