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
