<template>
    <div class="content" style="margin-top:3%;margin-left: 15%; margin-right: 15%;">
        <br>
        <div class="container-fluid">

            <card>
                <h4 slot="header" class="card-title">Create New member</h4>

                <form>
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
                            <base-input type="text" label="First Name" placeholder="First Name" v-model="member.firstName">
                            </base-input>
                        </div>
                        <div class="col-md-4">
                            <base-input type="text" label="Last Name" placeholder="Last Name" v-model="member.lastName">
                            </base-input>
                        </div>
                        <div class="col-md-3">
                            <base-input type="text" label="Birth Day" placeholder="DD/MM/YYYY" v-model="member.birthDate">
                            </base-input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <base-input type="text" label="Role's List" placeholder="Select a role" v-model="member.role">
                                <select class="form-control" placeholder="Project's List">
                                    <option>Select a role</option>
                                    <option>Product Owner</option>
                                    <option>Project Manager</option>
                                    <option>Developer</option>
                                </select>
                            </base-input>
                        </div>

                        <div class="col-md-3">
                            <base-input type="text" label="Team" placeholder="Select a Team" v-model="member.team">
                                <select class="form-control" placeholder="Team">
                                    <option>Select a team</option>
                                    <option>Team 1</option>
                                    <option>Team 2</option>
                                    <option>Team 3</option>
                                </select>
                            </base-input>
                        </div>

                        <div class="col-md-3">
                            <base-input type="text" label="Project's List" placeholder="Select a Project"
                                v-model="member.project">
                                <select class="form-control" placeholder="Team">
                                    <option>Select a project</option>
                                    <option>P 1</option>
                                    <option>P 2</option>
                                    <option>P 3</option>
                                </select>
                            </base-input>
                        </div>

                        <div class="col-md-3">
                            <base-input type="text" label="Ability" placeholder="Select an ability"
                                v-model="member.ability">
                                <select class="form-control" placeholder="Team">
                                    <option>Select a ability</option>
                                    <option>Product Owner</option>
                                    <option>Project Manager</option>
                                    <option>Developer</option>
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
                        <button type="submit" class="btn btn-success btn-fill float-right" @click.prevent="updateProfile">
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
import Card from 'src/components/Cards/Card.vue'

export default {
    components: {
        Card
    },
    data() {
        return {
            member: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                birthDate: '',
                role: '',
                team: '',
                project: '',
                ability: '',
                curp: '',
                rfc: '',
                address: '',
            }
        }
    },
    methods: {
        updateProfile() {
            alert('Your data: ' + JSON.stringify(this.member))
        }
    }
}

</script>
<style scoped></style>
