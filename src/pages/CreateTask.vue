<template>
    <div class="content" style="margin-top:3%;margin-left: 15%; margin-right: 15%;">
        <br>
        <div class="container-fluid">

            <card>
                <h4 slot="header" class="card-title">Create New Task</h4>

                <form v-on:submit.prevent="created">
                    <div class="row">
                        <div class="col-md-12">
                           <div class="form-group">
                            <label>Description</label>
                            <textarea rows="3" class="form-control" border-input placeholder="Here your description of the task" 
                                    v-model="task.description"></textarea>
                           </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-5">
                            <base-input type="text" label="Task Priority" placeholder="Select the priority">
                                <select class="form-control" placeholder="Priority" v-model="task.priority">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>5</option>
                                    <option>8</option>
                                    <option>13</option>
                                </select>
                            </base-input>
                        </div>

                        <div class="col-md-5">
                            <base-input type="text" label="Status" placeholder="TO DO" :disabled="true"></base-input>
                        </div>

                        <div class="col-md-5">
                            <base-input type="text" label="Responsible" placeholder="Select a responsible">
                                <select class="form-control" placeholder="Member" v-model="task.responsable">
                                    <option v-for="member in members" :value="member._name">{{ member._name }}</option>
                                </select>
                            </base-input>
                        </div>
                    </div>

                    
                    <div class="text-center">
                        <button type="submit" class="btn btn-success btn-fill float-right" @click.prevent="created">
                            Create Task
                        </button>
                    </div>
                    <div class="clearfix"></div>
                </form>
            </card>


        </div>
       
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
            task: {
                description: '',
                priority: '',
                status: '',
                responsable: ''
            },
            members:null,
        }
    },
    methods: {
        created(){
            axios.post('http://localhost:3000/tasks',{
                description: this.task.description,
                priority: this.task.priority,
                status: this.task.status,
                responsable: this.task.responsable
            }).then(res => {
                console.log(res);
                this.$router.push('/admin/overview');
            }).catch(err => {
                this.msg = err.response.data.message;
                console.log(err);
            });
        },
        list(){
            axios.get('http://localhost:3000/members')
                .then(res => this.members = res.data.obj);
        }
    },
    mounted(){
       this.list();
    }
}

</script>
<style scoped></style>
