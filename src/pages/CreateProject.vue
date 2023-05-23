<template>
    <div class="content">
        <div class="container-fluid">

            <card>
                <h4 slot="header" class="card-title">New Project</h4>
                <p class="card-category">We recommend to finish a project first before creating a new one</p>
                <br>

                <form v-on:submit.prevent="created">
                    <div class="row">
                        <div class="col-md-5">
                            <base-input type="text" label="Project Name" :disabled="false" placeholder="Project Name"
                                v-model="project.projectName">
                            </base-input>
                        </div>

                        <div class="col-md-3">
                            <base-input type="text" label="Project Manager" placeholder="Select a PM">
                                <select class="form-control" placeholder="Select a PM"  v-model="project.projectManager">
                                    <option>Select a PM</option>
                                    <option>Manuel</option>
                                    <option>Eduardo</option>
                                    <option>Edgar</option>
                                </select>
                            </base-input>
                        </div>

                        <div class="col-md-4">
                            <base-input type="text" label="Product Owner" placeholder="Select a PO">
                                <select class="form-control" placeholder="Select a PO" v-model="project.projectOwner">
                                    <option>Select a PO</option>
                                    <option>Manuel</option>
                                    <option>Eduardo</option>
                                    <option>Edgar</option>
                                </select>
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <base-input type="text" label="Application Date" placeholder="dd/mm/yyyy"
                                v-model="project.applicationDate">
                            </base-input>
                        </div>

                        <div class="col-md-4">
                            <base-input type="text" label="Start Up Date" placeholder="dd/mm/yyyy"
                                v-model="project.startUpDate">
                            </base-input>
                        </div>

                        <div class="col-md-4">
                            <base-input type="text" label="Developers List" placeholder="Select a Developer">
                                <select class="form-control" placeholder="Select a Developer" v-model="project.developer">
                                    <option>Select a developer</option>
                                    <option>Manuel</option>
                                    <option>Eduardo</option>
                                    <option>Edgar</option>
                                </select>
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Description</label>
                                <textarea rows="5" class="form-control border-input"
                                    placeholder="Here can be your description" v-model="project.description">
                                                                                                                                                            </textarea>
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-success btn-fill float-right" @click.prevent="created">
                            Create Project
                        </button>
                    </div>
                    <div class="clearfix"></div>

                </form>
            </card>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Card from 'src/components/Cards/Card.vue'

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
                description: ``
            }
        }
    },
    methods: {
        updateProfile() {
            alert('Your data: ' + JSON.stringify(this.project))
        },
        created(){
            axios.post('http://localhost:3000/projects',{
                projectName: this.project.projectName,
                applicationDate: this.project.applicationDate,
                startUpDate: this.project.startUpDate,
                projectManager: this.project.projectManager,
                projectOwner: this.project.projectOwner,
                developer: this.project.developer,
                description: this.project.description
            }).then(res =>{
                console.log(res);
                this.$router.push('/admin/overview')
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
        }
    },
    mounted(){
        
    }
}

</script>
<style></style>
