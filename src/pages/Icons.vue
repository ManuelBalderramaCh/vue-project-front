<template>
  <div class="container">
    <h2 class="text-center mt-5"></h2>

    <div class="d-flex">
    <input type="text" placeholder="Enter task" class="form-control">
    <button class="btn btn-warning rounded-0">SUBMIT</button>

  </div>
  <br>

  <table class="table table-bordered mt-5">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center">#</th>
      <th scope="col" class="text-center">#</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Finalizar proyecto para ahorita</td>
      <td>To-do</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div class="text-center">
          <span class="fa fa-trash"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>


  </div>

  
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import axios from 'axios';
export default {
  components: {
    Card
  }
}
</script>
<style scoped></style>
