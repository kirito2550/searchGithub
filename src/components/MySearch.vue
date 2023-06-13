<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" 
        placeholder="検索したいユーザー名を入力"
        v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'MySearch',
    data() {
      return {
        keyWord:''
      }
    },
    methods: {
      searchUsers(){
        // 请求前更新list的数据
        this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
        axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            // 请求成功后更新list的数据s
            console.log('成功',response.data.items);
            this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
            
          },error =>{
            // 请求失败后更新list的数据
            console.log('失败',error.message);
            this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
          }
        )
        
      }
    },
}
</script>

<style lang="css">
  input {
    width: 200px;
  } 
</style>


