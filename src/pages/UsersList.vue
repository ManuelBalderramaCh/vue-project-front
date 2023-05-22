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
                        <l-table class="table-hover table-striped" :columns="table1.columns" :data="table1.data">
                            <template slot-scope="{row}">
                                <td>{{ row.id }}</td>
                                <td>{{ row.firstName }}</td>
                                <td>{{ row.lastName }}</td>
                                <td>{{ row.email }}</td>
                                <td>{{ row.team }}</td>
                                <td>{{ row.project }}</td>
                                <td>{{ row.ability }}</td>
                                <td>{{ row.curp }}</td>
                                <td>{{ row.rfc }}</td>
                                <td>{{ row.role }}</td>
                                <td>
                                    <router-link to="/admin/user" tag="button"
                                        class="btn btn-light btn-sm">Editar</router-link>
                                </td>
                            </template>
                        </l-table>
                    </card>

                </div>

            </div>
        </div>
    </div>
</template>
<script>

import LTable from 'src/components/Table.vue'
import Card from 'src/components/Cards/Card.vue'

const tableColumns = ['Id', 'First Name', 'Last Name', 'Email', 'Team', 'Project', 'Ability', 'Curp,', 'RFC', 'Role', 'Edit']
const tableData = [{
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    team: '',
    project: '',
    ability: '',
    curp: '',
    rfc: '',
    role: '',
}]
export default {
    components: {
        LTable,
        Card
    },
    data() {
        return {
            table1: {
                columns: [...tableColumns],
                data: [...tableData]
            },
            table2: {
                columns: [...tableColumns],
                data: [...tableData]
            }
        }
    }
}
</script>
<style></style>
  