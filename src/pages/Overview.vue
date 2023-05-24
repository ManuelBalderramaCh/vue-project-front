<template>
  <div class="container" style="max-width: 1200px">
  
    <h2 class="text-center mt-5">Tasks Lists</h2>

  
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
        class="w-100 form-control"
      />
      <button class="btn btn-warning rounded-0" @click="submitTask">
        SUBMIT
      </button>
    </div>

    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Status</th>
          <th scope="col" style="width: 120px">Priority</th>
          <th scope="col" style="width: 120px">Responsible</th>
          <th scope="col" style="width: 120px">#</th>
          <th scope="col" style="width: 120px">#</th>
          <th scope="col" class="text-center">Tasks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task._id">
         
          <td>
            
              {{ capitalizeFirstChar(task._status) }}
          </td>
          <td>{{ task._priority }}</td>
          <td>{{ task._responsable }}</td>
          <td class="text-center"><button>
            <div @click="deleteTask(task._id)">
              <span class="fa fa-trash pointer"></span>
            </div></button>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
          <td class="text-center">
            <span :class="{ 'line-through': task.status === 'finished' }">
              {{ task._description }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],
      tasks: null
    };
  },

  methods: {
    
     list(){
      axios.get('http://localhost:3000/tasks')
      .then(res => this.tasks = res.data.obj);
    },
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },

   
     deleteTask(Taskid){
            axios.delete(`http://localhost:3000/tasks/${Taskid}`)
            .then(res => {
                console.log(res);
                this.list();
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
        },

   
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        this.tasks.push({
          name: this.task,
          status: "todo",
        });
      }

      this.task = "";
    },
  },
  mounted(){
        this.list();
    }
};
</script>

<style scoped>

</style>