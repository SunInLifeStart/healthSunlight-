<template>
  <div class="dashboard-container">

    <h2>input 千分位</h2>model:{{price}}
    <format-input currency="¥" separator="," :precision="2" v-model="price" :max="10000000" :min="-10000000" class="w300" emptyValue="-" :minus="true"></format-input>
    <p>precision-小数点位数</p>
    <p>currency-自定义符号</p>
    <p>separator-分隔符</p>
    <p>emptyValue-值为空或0时自定义显示内容</p>
    <p>read-only="true"-只显示文本</p>
    <p>max-最大值</p>
    <p>min-最小值</p>
    <p>minus-boolean-是否启动负数和最小值</p>

    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <h2>过滤器</h2>
    <p>默认 {{2000|currency}}</p>
    <p>小数点后保留3位小数 {{2000|currency(3)}}</p>
    <p> 自定义千位分隔符{{2000|currency(3,'-')}}</p>

    <h1>{{$demo.count}}</h1>
    <button @click="decreaseCount()">-</button>
    <button @click="increaseCount()">+</button>

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
import formatInput from '@/components/formatInput/index'

// 日历
Vue.use(vueEventCalendar, {
  locale: 'en',
  color: 'orange', // Set main color
  className: 'selected-day', // (default: 'selected-day')
  weekStartOn: '1' // Can be: 1, 2, 3, 4, 5, 6, 0 (default: 0)
}) // 可以设置语言，支持中文和英文

export default {
  components: { InputTag, formatInput },
  computed: {
    ...mapGetters(['name', 'roles', '$demo'])
  },
  data() {
    return {
      price: '',
      fileList2: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
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
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    increaseCount() {
      this.$store.dispatch('IncreaseCount')
    },
    decreaseCount() {
      this.$store.dispatch('DecreaseCount')
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
.w300 {
  width: 300px;
}
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
