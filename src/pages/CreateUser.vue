<template>
    <div class="content">
        <div class="container-fluid">

            <card>
                <h4 slot="header" class="card-title">New User</h4>
                <form>
                    <div class="row">
                        <div class="col-md-5">
                            <base-input type="text" label="Project Name" :disabled="false" placeholder="Project Name"
                                v-model="user.name">
                            </base-input>
                        </div>
                        <div class="col-md-3">
                            <base-input type="text" label="Project Manager" placeholder="Project Manager"
                                v-model="user.projectManager">
                            </base-input>
                        </div>
                        <div class="col-md-4">
                            <base-input type="email" label="Product Owner" placeholder="Product Owner"
                                v-model="user.productOwner">
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <base-input type="text" label="Application Date" placeholder="dd/mm/yyyy"
                                v-model="user.applicationDate">
                            </base-input>
                        </div>
                        <div class="col-md-4">
                            <base-input type="text" label="Start Up Date" placeholder="dd/mm/yyyy"
                                v-model="user.startUpDate">
                            </base-input>
                        </div>
                        <div class="col-md-4">
                            <base-input type="text" label="Developers List" placeholder="Select a Developer"
                                v-model="user.developer">
                                <select class="form-control" placeholder="Select a Developer">
                                    <option>Select a role</option>
                                    <option>Product owner</option>
                                    <option>Project Manager</option>
                                    <option>Developer</option>
                                </select>
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Description</label>
                                <textarea rows="5" class="form-control border-input"
                                    placeholder="Here can be your description" v-model="user.description">
                                                                                                                                                                    </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-success btn-fill float-right" @click.prevent="updateProfile">
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
import Card from 'src/components/Cards/Card.vue'

export default {
    components: {
        Card
    },
    data() {
        return {
            user: {
                name: '',
                applicationDate: '',
                startUpDate: '',
                projectManager: '',
                productOwner: '',
                developer: '',
                description: ``
            }
        }
    },
    methods: {
        updateProfile() {
            alert('Your data: ' + JSON.stringify(this.user))
        }
    }
}

</script>
<style></style>
