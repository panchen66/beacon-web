<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  #app{
    width:100%;
    height:100%;
  }

  @font-face{
    font-family: 'CODE Bold';
    src: url('/static/font/CODE Bold.otf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face{
    font-family: 'Blackbody';
    src: url('/static/font/鼎黑体.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face{
    font-family: 'FleetBlackbody';
    src: url('/static/font/卓黑.ttf');
    font-weight: normal;
    font-style: normal;
  }

  code{
    word-wrap: break-word;
    word-break: break-all;
    border-style: solid solid solid solid;
  }

  code>p {
    display: block;
    overflow-x: auto;
    color: #404040;
    -webkit-text-size-adjust: none;
}
pre code {
    white-space: pre;
    word-wrap: normal;
    display: block;
    padding: 12px;
    font-size: 12px;
}
</style>
