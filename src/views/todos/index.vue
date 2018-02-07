<template>
  <div class="app-container">
    <div>todos</div>
    <input type="text" v-model="searchCriteria.title">
    <button @click="searchList(searchCriteria.title)">search</button>
    <input type="checkbox" v-model="checkAllStatus" @change="selectAll()">
    <ul v-for="item in list">
      <li>
        <input type="checkbox" v-model="item.checked" @change="selectOne(item)">
        <span>{{item.title}}--{{item.checked}}</span>
      </li>
    </ul>
    {{list}}
  </div>
</template>

<script>

  export default {
    data() {
      return {
        searchCriteria: {
          title: '2222',
          id: ''
        },
        list: [{
          title: 'qqqqq'
        },
        {
          title: '2222'
        },
        {
          title: '3333'
        }],
        checkAllStatus: false
      }
    },

    created() {
      // this.fetchData()
    },
    methods: {
      // 全选
      selectAll() {
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].checked = this.checkAllStatus
        }
      },
      // 单选
      selectOne(item) {
        this.checkAllStatus = this.list.every((data) => {
          return data.checked
        })
      },
      // 查询列表
      searchList(data) {
        this.$store.dispatch('Test', data).then(data => {
          console.log(data)
          this.list = data
        })
        // this.$store.dispatch('GetTodos', data).then((data) => {
        //   console.log(data, 'success')
        //   this.list = data.todos;
        //   //   this.fetchData()
        // }).catch(() => {

        // })
      }
    }
  }

</script>
