<template>
    <div class="content">
        <div class="container-fluid">

            <card>
                <h4 slot="header" class="card-title">Project Management</h4>
                <form>
                    <div class="row">
                        <div class="col-md-5">
                            <base-input type="text" label="Project Name" :disabled="true" placeholder="Project Name"
                                v-model="project.projectName">
                            </base-input>
                        </div>
                        <div class="col-md-3">
                            <base-input type="text" label="Project Manager" placeholder="Project Manager"
                                v-model="project.projectManager">
                            </base-input>
                        </div>
                        <div class="col-md-4">
                            <base-input type="email" label="Product Owner" placeholder="Product Owner"
                                v-model="project.productOwner">
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <base-input type="text" label="Application Date" placeholder="Application Date"
                                v-model="project.applicationDate">
                            </base-input>
                        </div>
                        <div class="col-md-4">
                            <base-input type="text" label="Start Up Date" placeholder="Start Up Date"
                                v-model="project.startUpDate">
                            </base-input>
                        </div>
                        <div class="col-md-4">
                            <base-input type="text" label="Developers List" placeholder="Developer"
                                v-model="project.developer">
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>About Me</label>
                                <textarea rows="5" class="form-control border-input"
                                    placeholder="Here can be your description" v-model="project.aboutMe">
                                                                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-danger btn-fill float-right" @click.prevent="updateProfile">
                            Delete Project
                        </button>
                        <button type="submit" class="btn btn-info btn-fill float-left" @click.prevent="updateProfile">
                            Update Project
                        </button>
                    </div>
                    <div class="clearfix"></div>

                </form>
            </card>


        </div>
    </div>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'

export default {
    components: {
        Card
    },
    data() {
        return {
            project: {
                projectName: 'Niger',
                applicationDate: '20/05/2023',
                startUpDate: '20/05/2023',
                projectManager: 'Miguel',
                productOwner: 'Manuel',
                developer: 'Eduardo',
                aboutMe: `En el gabacho se reparte la ch y la pizza Puro Belicon.`
            }
        }
    },
    methods: {
        updateProfile() {
            alert('Your data: ' + JSON.stringify(this.project))
        }
    }
}

</script>
<style></style>

<template>
    <card>
      <h4 slot="header" class="card-title">Edit Project</h4>
      <form>
        <div class="row">
          <div class="col-md-5"> 
            <base-input type="text" v-model="project.projectName" label="Project Name" :disabled="false" placeholder="Project Name" :value="project.projectName">
            </base-input>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-4">
            <base-input type="email" v-model="project.projectManager" label="Project Manager" :disabled="false" placeholder="Project Manager" :value="project.projectManager">
            </base-input>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-3">
            <base-input type="text" v-model="project.productOwner" label="Product Owner" placeholder="Product Owner" :value="project.productOwner">
            </base-input>
          </div>
          <div class="col-md-3">
            <base-input type="text" v-model="project.applicationDate" label="Application Date" placeholder="Application Date" :value="project.applicationDate" >
            </base-input>
          </div>
          <div class="col-md-3">
            <base-input type="text" v-model="project.startUpDate" label="Start Up Date" placeholder="Start Up Date" :value="project.startUpDate">
            </base-input>
          </div>
          <div class="col-md-3">
            <base-input type="text" v-model="project.developer" label="Developers List" placeholder="Developers List" :value="project.developer">
            </base-input>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-5">
            <base-input type="text" v-model="project.aboutMe" label="About Me" placeholder="About Me" :value="project.aboutMe" >
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
                  productOwner: '',
                  developer: '',
                  aboutMe: '',
              },
        id: this.$route.params.id,
      }
    },
    methods: {
      list(){
        axios.get('http://localhost:3000/members/' + this.id)
        .then(res => this.project = res.data.obj);
      },
      edit(projectId){
            axios.put(`http://localhost:3000/members/${projectId}`, {
                projectName: this.project._projectName,
                applicationDate: this.project._applicationDate,
                startUpDate: this.project._startUpDate,
                projectManager: this.project._projectManager,
                productOwner: this.project._productOwner,
                developer: this.project._developer,
                aboutMe: this.project._aboutMe,
            })
            .then(res => {
                console.log(res);
                this.$router.push('/admin/projects')
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
