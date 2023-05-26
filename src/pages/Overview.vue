<template>
  <div class="container" style="max-width: 600px">
    <h2 class="text-center mt-5">Task List</h2>

    <router-link to="/admin/create-task" class="btn btn-dark btn-sm"> Create New Task</router-link>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Priority</th>
          <th scope="col">Responsible</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task._id">
        <td>{{ task._description }}</td>
        <td>To Do</td>
        <td>{{ task._priority }}</td>
        <td>{{ task._responsable }}</td>
        <td><button type="button" tag="button" class="btn btn-info btn-sm">Edit</button></td>
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
   
  },
  mounted(){
    this.list();
  }
};
</script>

<style scoped>

</style>