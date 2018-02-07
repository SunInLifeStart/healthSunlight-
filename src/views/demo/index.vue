<template>
  <div class="dashboard-container">

    <div>{{count}}</div>
    <button @click="increment()">add</button>

    <div>
      <h1>多关键字搜索框</h1>
      <a href="https://github.com/matiastucci/vue-input-tag">input-tag api</a>
      <input-tag :tags.sync="tagsArray" style="display:inline" placeholder='请输入'></input-tag>
      <button>搜索</button>
      {{tagsArray}}
      <br>
      <br>
    </div>

    <div>
      <h1>日历</h1>
      <a href="https://github.com/GeoffZhu/vue-event-calendar">日历 api</a>
      <vue-event-calendar :events="demoEvents" @day-changed="handleDayChanged" @month-changed="handleMonthChanged">
      </vue-event-calendar>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import InputTag from 'vue-input-tag' // 多关键字搜索框
import 'vue-event-calendar/dist/style.css' // 1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar' // 日历
import Vue from 'vue'

// 日历
Vue.use(vueEventCalendar, {
  locale: 'en',
  color: 'orange', // Set main color
  className: 'selected-day', // (default: 'selected-day')
  weekStartOn: '1' // Can be: 1, 2, 3, 4, 5, 6, 0 (default: 0)
}) // 可以设置语言，支持中文和英文

export default {
  components: { InputTag },
  computed: {
    ...mapGetters(['name', 'roles', 'count'])
  },
  data() {
    return {
      // 多关键字搜索框
      tagsArray: [],
      // 日历数据
      demoEvents: [
        {
          date: '2016/12/15',
          title: 'eat',
          desc: 'longlonglong description'
        },
        {
          date: '2016/11/12',
          title: 'this is a title'
        }
      ]
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('add', '2')
    },
    // 月回调--日历
    handleMonthChanged(month) {
      console.log(month)
    },
    // 天回调--日历
    handleDayChanged(day) {
      console.log(day)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
