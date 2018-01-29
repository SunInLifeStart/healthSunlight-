<template>
  <div class="app-container">
    <el-input v-model="keyword" @keyup.native.enter="fetchData"></el-input>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template scope="scope">
          <el-button @click.native="update(scope.row.id)">update</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column>

    </el-table>
    <el-pagination layout="prev, pager, next" @current-change="fetchData" @size-change="fetchData" :current-page.sync="page" :page-size="pageSize" :total="total">
    </el-pagination>
    <el-input v-model="name"></el-input>
    <el-button type="primary" @click.native="add">add</el-button>
    <el-button type="primary" @click.native="del">delete</el-button>

  </div>
</template>

<script>
import { getProduct, createProduct, updateProduct } from '../../../api/product'

export default {
  name: 'product',
  data() {
    return {
      page: 1,
      pageSize: 10,
      total: 0,
      name: '',
      keyword: '',
      list: null,
      listLoading: true
    }
  },
  computed: {
    start() {
      return (this.page - 1) * this.pageSize
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getProduct(this.start, this.pageSize, this.keyword).then(result => {
        this.list = result.items
        this.total = result.total
        this.listLoading = false
      }, err => {
        this.listLoading = false

      })
    },
    add() {
      createProduct(this.name).then(result => {
        this.fetchData()
        console.log('success')
      }).catch(() => {

      })


    },

    update(id) {
      updateProduct(id, 'update').then(result => {
        this.fetchData()
      }).catch(() => {

      })
    },
    del() {
      this.$store.dispatch('DeleteProduct', [1, 2]).then(() => {
        console.log('success')
        this.fetchData()
      }).catch(() => {

      })
    }
  }
}
</script>
