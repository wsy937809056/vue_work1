<template>
  <div id="app">
    <h2 class="titles">品牌管理</h2>
    <table class="titles table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>编号</th>
          <th>资产名称</th>
          <th>价格</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="val in list" :key="val.id">
          <td>
            <span>{{val.id}}</span>
          </td>
          <td>
            <span>{{val.name}}</span>
          </td>
          <td>
            <span v-if="val.price<100">{{val.price}}</span>
            <span v-else class="colors">{{val.price}}</span>
          </td>
          <td>
            <span>{{val.time}}</span>
          </td>
          <td>
            <span class="deletes">删除</span>
          </td>
        </tr>
      </tbody>
    </table>
    <form action="" class="form-inline">
      <label>
        <input type="type" v-model="name" class="form-control" placeholder="资产名称">
      </label>
      <label>
        <input type="type" v-model="num" class="form-control" placeholder="0">
      </label>
      <input type="button" value="添加资产" class="btn btn-primary" @click="addBtn">
    </form>
    
  </div>
</template>

<script>

export default {
    data(){
      return{
        list:[
          { id: 100, name: "外套", price: 199, time: new Date('2010-08-12')},
          { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01') },
          { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22') },
          { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12') }
        ],
        name:'',
        num:'',
      }
    },
    methods:{
  }
}
</script>

<style scoped>
  .titles{
    text-align: center;
  }
  .colors{
    color: red;
  }
  .deletes{
    color: rgb(6,127,255);
    cursor: pointer;
  }
</style>