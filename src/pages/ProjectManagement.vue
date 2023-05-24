<template>
    <card>
      <h4 slot="header" class="card-title">Edit Project</h4>
      <form>
        <div class="row">
          <div class="col-md-5"> 
            <base-input type="text" v-model="project._projectName" label="Project Name" :disabled="false" placeholder="Project Name" :value="project._projectName">
            </base-input>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-4">
            <base-input type="email" v-model="project._projectManager" label="Project Manager" :disabled="false" placeholder="Project Manager" :value="project._projectManager">
            </base-input>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-3">
            <base-input type="text" v-model="project._projectOwner" label="Product Owner" placeholder="Product Owner" :value="project._projectOwner">
            </base-input>
          </div>
          <div class="col-md-3">
            <base-input type="text" v-model="project._applicationDate" label="Application Date" placeholder="Application Date" :value="project._applicationDate" >
            </base-input>
          </div>
          <div class="col-md-3">
            <base-input type="text" v-model="project._startUpDate" label="Start Up Date" placeholder="Start Up Date" :value="project._startUpDate">
            </base-input>
          </div>
          <div class="col-md-3">
            <base-input type="text" v-model="project._developer" label="Developers List" placeholder="Developers List" :value="project._developer">
            </base-input>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-5">
            <base-input type="text" v-model="project._description" label="About Me" placeholder="About Me" :value="project._description" >
            </base-input>
          </div>
        </div>
  
        
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="edit(project._id)">
            Update Project
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </card>
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
        project: {
                  projectName: '',
                  applicationDate: '',
                  startUpDate: '',
                  projectManager: '',
                  projectOwner: '',
                  developer: '',
                  description: '',
              },
        id: this.$route.params.id,
      }
    },
    methods: {
      list(){
        axios.get('http://localhost:3000/projects/' + this.id)
        .then(res => this.project = res.data.obj);
      },
      edit(projectId){
            axios.put(`http://localhost:3000/projects/${projectId}`, {
                projectName: this.project._projectName,
                applicationDate: this.project._applicationDate,
                startUpDate: this.project._startUpDate,
                projectManager: this.project._projectManager,
                projectOwner: this.project._projectOwner,
                developer: this.project._developer,
                description: this.project._description,
            })
            .then(res => {
                console.log(res);
                this.$router.push('/admin/table-list')
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
        }
    },
    mounted(){
      this.list();
    }
  }
  
  </script>
  <style></style>
