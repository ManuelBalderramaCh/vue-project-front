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
                        </l-table>
                    </card>

                </div>

                <div class="col-12">
                    <card class="card-plain">
                        <template slot="header">
                            <h4 class="card-title">Table on Plain Background</h4>
                            <p class="card-category">Here is a subtitle for this table</p>
                        </template>
                        <div class="table-responsive">
                            <l-table class="table-hover" :columns="table2.columns" :data="table2.data">
                            </l-table>
                        </div>
                    </card>
                </div>

                <div class="col-12">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h4 class="card-title">Small table</h4>
                            <p class="card-category">Here is a subtitle for this table</p>
                        </template>
                        <l-table class="table-hover table-striped table-sm" :columns="table1.columns" :data="table1.data">
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

const tableColumns = ['Id', 'Name', 'Email', 'Project', 'Team', 'Role', 'Edit', 'Delete']
const tableData = [{
    id: 1,
    name: 'Miguel Cortinas',
    email: 'mike@uach.mx',
    project: 'Niger',
    team: 'Ratongas',
    role: 'Developer',
    edit: '', //Boton,
    delete: '' //Boton
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
  