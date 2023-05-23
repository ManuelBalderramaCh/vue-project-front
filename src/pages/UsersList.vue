<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h4 class="card-title">Active users</h4>
                            <p class="card-category">Here is a list of users in projects</p>
                        </template>
                        
                        <table class="table-hover table-striped" style="padding: 15%; width: 100%; margin-left: 1%;">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Project</th>
                                    <th scope="col">Ability</th>
                                    <th scope="col">CURP</th>
                                    <th scope="col">RFC</th>
                                    <th scope="col">ROLE</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="member in members" :key="member._id">
                                <td>{{ member._name }}</td>
                                <td>{{ member._lastName }}</td>
                                <td>{{ member._email }}</td>
                                <td>{{ member._team }}</td>
                                <td>{{ member._project }}</td>
                                <td>{{ member._abilities }}</td>
                                <td>{{ member._curp }}</td>
                                <td>{{ member._rfc }}</td>
                                <td>{{ member._role }}</td>
                                <td><router-link to="/admin/user" tag="button"
                                        class="btn btn-light btn-sm">Editar</router-link></td>
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
            members: null
        }
    },
    methods: {
        list(){
            axios.get('http://localhost:3000/members')
            .then(res => this.members = res.data.obj);
        }
    },
    mounted(){
        this.list();
    }
};
</script>
<style scoped></style>
  