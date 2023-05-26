<template>
  <div class="container" style="max-width: 1000px">
    <h2 class="text-center">Task List</h2>

    <router-link to="/admin/create-task" class="btn btn-dark btn-sm"> Create New Task</router-link>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Status</th>
          <th scope="col">Responsible</th>
          <th scope="col">Priority</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task._id">
        <td>{{  task._status  }}</td>
        <td>{{ task._responsable }}</td>
        <td>{{ task._priority }}</td>
        <td>{{ task._description }}</td>
        <td><button type="button" tag="button" class="btn btn-info btn-sm" @click="edit(task._id)">Edit</button></td>
        <td><button type="button" tag="button" class="btn btn-danger btn-sm" @click="deleteTask(task._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      tasks:null
    }
  },

  methods: {

    list(){
      axios.get('http://localhost:3000/tasks')
        .then(res=> this.tasks = res.data.obj);
    },
    edit(taskId){
      axios.get(`http://localhost:3000/tasks/${taskId}`)
        .then(res => {
          console.log(res);
          this.$router.push(`/admin/task/${taskId}`)
        }).catch( err => {
          this.msg = err.response.data.message;
          console.log(err);
        })
    },
    deleteTask(taskId){
      axios.delete(`http://localhost:3000/tasks/${taskId}`)
        .then(res => {
          console.log(res);
        }).catch( err => {
          this.msg = err.response.data.message;
          console.log(err);
        })
        this.list();
    }
  },
  mounted(){
    this.list();
  }
};
</script>

<style scoped>

</style>