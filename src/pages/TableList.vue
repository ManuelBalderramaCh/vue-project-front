<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Projects</h4>
              <p class="card-category">Here is a list of active projects</p>
            </template>

              <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                <thead>
                  <tr>
                    <th scoped="col"> Project Name</th>
                    <th scoped="col"> Project Manager</th>
                    <th scoped="col"> Product Owner</th>
                    <th scoped="col"> Application Date</th>
                    <th scoped="col"> Start Up Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="project in projects" :key="project._id">
                    <td>{{ project._projectName }}</td>
                    <td>{{ project._projectManager }}</td>
                    <td>{{ project._projectOwner }}</td>
                    <td>{{ project._applicationDate }}</td>
                    <td>{{ project._startUpDate }}</td>
                    <td><router-link to="/admin/overview" tag="button"
                                        class="btn btn-light btn-sm">Ir</router-link></td>
                  </tr>
                </tbody>
              </table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Card from 'src/components/Cards/Card.vue'
import axios from 'axios';

export default {
  components: {
    Card
  },
  data() {
    return {
      projects: null,
    };
  },
  methods: {
    list(){
      axios.get('http://localhost:3000/projects')
      .then(res => this.projects = res.data.obj);
    }
  },
  mounted(){
    this.list();
  }
}
</script>
<style scoped></style>
