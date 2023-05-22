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
                                <td>{{ row.name }}</td>
                                <td>{{ row.email }}</td>
                                <td>{{ row.project }}</td>
                                <td>{{ row.team }}</td>
                                <td>{{ row.role }}</td>
                                <td>
                                    <v-button type="button" class="btn-simple btn btn-xs btn-info"
                                        v-tooltip.top-center="editTooltip">
                                        <i class="fa fa-edit"></i>
                                    </v-button>
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

const tableColumns = ['Id', 'Name', 'Email', 'Project', 'Team', 'Role', 'Edit']
const tableData = [{
    id: 1,
    name: 'Miguel Cortinas',
    email: 'mike@uach.mx',
    project: 'Niger',
    team: 'Ratongas',
    role: 'Developer',
    edit: '' //Boton,
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
  