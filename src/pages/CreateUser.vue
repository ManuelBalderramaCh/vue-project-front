<template>
    <div class="content" style="margin-top:3%;margin-left: 15%; margin-right: 15%;">
        <br>
        <div class="container-fluid">

            <card>
                <h4 slot="header" class="card-title">Create New member</h4>

                <form v-on:submit.prevent="created">
                    <div class="row">
                        <div class="col-md-4">
                            <base-input type="text" label="Email" placeholder="example@email.com" v-model="member.email">
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <base-input type="password" label="Password" placeholder="Your password here"
                                v-model="member.password">
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <base-input type="text" label="First Name" placeholder="First Name" v-model="member.name">
                            </base-input>
                        </div>
                        <div class="col-md-4">
                            <base-input type="text" label="Last Name" placeholder="Last Name" v-model="member.lastName">
                            </base-input>
                        </div>
                        <div class="col-md-3">
                            <base-input type="text" label="Birth Day" placeholder="DD/MM/YYYY" v-model="member.birthDay">
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <base-input type="text" label="Role's List" placeholder="Select a role">
                                <select class="form-control" placeholder="Project's List" v-model="member.role">
                                    <option>Select a role</option>
                                    <option>Product Owner</option>
                                    <option>Project Manager</option>
                                    <option>Developer</option>
                                </select>
                            </base-input>
                        </div>

                        <div class="col-md-3">
                            <base-input type="text" label="Project's List" placeholder="Select a Project">
                                <select class="form-control" placeholder="Team" v-model="member.project">
                                    <option>Select a project</option>
                                    <option v-for="project in projects" :value="project._projectName">{{ project._projectName }}</option>
                                </select>
                            </base-input>
                        </div>

                        <div class="col-md-3">
                            <base-input type="text" label="Ability" placeholder="Select an ability">
                                <select class="form-control" placeholder="Team" v-model="member.abilities">
                                    <option>Select a ability</option>
                                    <option>Senior</option>
                                    <option>Master</option>
                                    <option>Junior</option>
                                </select>
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <base-input type="text" label="CURP" placeholder="CURP" v-model="member.curp">
                            </base-input>
                        </div>
                        <div class="col-md-3">
                            <base-input type="text" label="RFC" placeholder="RFC" v-model="member.rfc">
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <base-input type="text" label="Address" placeholder="Home Address" v-model="member.address">
                            </base-input>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-success btn-fill float-right" @click.prevent="created">
                            Create User
                        </button>
                    </div>
                    <div class="clearfix"></div>
                </form>
            </card>


        </div>
        <footer class="footer" style="margin-top: 5%;">
            <div class="container-fluid">
                <nav>
                    <ul class="footer-menu">
                        <li>
                            <router-link :to="{ path: '/admin' }">Project Handler Dashboard</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="copyright text-center">
                    &copy; Coded with
                    <i class="fa fa-heart heart"></i> by
                    <a href="https://binarcode.com" target="_blank">Team 3</a>.
                    Designed by IS.
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
import Card from 'src/components/Cards/Card.vue';
import axios from 'axios';

export default {
    components: {
        Card
    },
    data() {
        return {
            member: {
                name: '',
                lastName: '',
                email: '',
                password: '',
                birthDay: '',
                role: '',
                project: '',
                abilities: '',
                curp: '',
                rfc: '',
                address: '',
            },
            projects: null
        }
    },
    methods: {
        updateProfile() {
            alert('Your data: ' + JSON.stringify(this.member))
        },
        listProjects(){
            axios.get('http://localhost:3000/projects')
            .then(res => this.projects = res.data.obj);
        },
        created(){
            axios.post('http://localhost:3000/members',{
                name: this.member.name,
                lastName: this.member.lastName,
                email: this.member.email,
                password: this.member.password,
                birthDay: this.member.birthDate,
                role: this.member.role,
                project: this.member.project,
                abilities: this.member.abilities,
                curp: this.member.curp,
                rfc: this.member.rfc,
                address: this.member.address,
            }).then(res => {
                console.log(res);
                this.$router.push('/login');
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
        }
    },
    mounted(){
        this.listProjects();
    }
}

</script>
<style scoped></style>
