    <template>
        <div class="header">
            <div class="station">
               <div class="stationMark">
                 <img :src="stationMarkUrl"/>
               </div>
               <div class="stationName">beacon</div>
            </div>
            <div class="menu">
                <Menu mode="horizontal" :theme="theme" active-name="1">
                  <router-link to="/">
                  <MenuItem name="1">
                    <Icon type="home"></Icon>
                    Home
                    </MenuItem>
                      </router-link>
                    <router-link to="/blog">
                    <MenuItem name="2">
                    <Icon type="ios-paper"></Icon>
                    Blog
                    </MenuItem>
                    </router-link>
                      <router-link to="/product">
                    <MenuItem name="3">
                    <Icon type="ios-cloud"></Icon>
                    Product
                    </MenuItem>
                    </router-link>
                    <router-link to="/aboutUs">
                    <MenuItem name="4">
                    <Icon type="ios-people"></Icon>
                    About us
                    </MenuItem>
                    </router-link>
                </Menu>
            </div>
        </div>
    </template>
<script>
export default {
  data () {
    return {
      stationMarkUrl: '../../static/images/stationMark.png',
      theme: 'light'
    }
  }
}
</script>

<style>
.ivu-menu-light{
    background: none !important;
}
.header::after {
  content: "";
  display: block;
  clear: both;
}

.menu {
  float: right;
  text-align: center;
  color: #1c2438;
}

.eyeImg {
  width: 62px;
  height: 62px;
}

.theme-content {
  font-size: 16px;
  font-weight: bold;
  color:#000;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
  color: #1c2438
}

.station{
  float: left;
  margin-Left: 2%;
  width: 30%
}

.stationName{
  line-height: 63px;
  font-family: CODE Bold;
  font-size: 16px;
  margin-top: 2%;
  margin-left: 1%;
  float: left;
}

.stationMark{
  margin-top: 2%;
  float: left
}
</style>
