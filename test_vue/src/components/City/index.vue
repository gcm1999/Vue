<template>
  <div>
    <div class="header">
      城市选择
      <!-- <router-link to="/"> -->
      <div class="iconfont back-icon">&#xe624;</div>
      <!-- </router-link> -->
    </div>

    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" />
    </div>

    <div class="list" ref="list">
      <div class="content">
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div
              class="button-wrapper"
              v-for="(item, index) in cityList.hotCities"
              :key="item.id"
            >
              <div class="button">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="content" v-for="(value, key) in cityList.cities">
            <div class="title border-topbottom">{{ key }}</div>
            <div class="item-list" v-for="(item, index) in value">
              <div class="item border-topbottom">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import "@/assets/styles/reset.css";
import "@/assets/styles/border.css";
import "@/assets/styles/iconfont.css";
import axios from "axios";
// import { ref, onMounted, reactive, toRef, nextTick } from "vue";
export default {
  name: "City",
  data() {
    return {
      cityList: {},
    };
  },
  mounted() {
    this.getCityList();
    this.$nextTick(() => {
      new BScroll(this.$refs.list);
    });
    // console.log(this.$refs.list);
  },
  methods: {
    getCityList() {
      axios.get("/api/mock/city.json").then((res) => {
        this.cityList = res.data.data;
      });
    },
  },
};
</script>
<style lang="stylus" scoped>

// @import '~@/assets/styles/varibles.styl';

    .item-list
        .item
            line-height .76rem
            padding-left .2rem
            color #666

    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-topbottom
        &:before
            border-color #ccc

    .title
        line-height .44rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .list
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        // background red
        overflow hidden
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                width 33.33%
                float left
                .button
                    padding .1rem 0
                    text-align center
                    margin .1rem
                    border .02rem solid #ccc


    .search
        height .72rem
        padding 0 0.1rem
        background $bgColor
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            border-radius .06rem
            color #666
            padding 0 .1rem
            text-align center


    .header
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        position relative
        .back-icon
            position absolute
            top 0
            left 0
            width 0.64rem
            text-align center
            font-size .4rem
            color #fff
</style>
