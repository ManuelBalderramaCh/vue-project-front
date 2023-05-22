<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Projects</h4>
              <p class="card-category">Here is a list of active projects</p>
            </template>
            <l-table class="table-hover table-striped" :columns="table1.columns" :data="table1.data">
              <template slot-scope="{row}">
                <td>{{ row.id }}</td>
                <td>{{ row.name }}</td>
                <td>{{ row.manager }}</td>
                <td>{{ row.owner }}</td>
                <td>{{ row.application }}</td>
                <td>{{ row.startup }}</td>
                <td>
                  <!-- <v-button type="button" class="btn-simple btn btn-xs btn-info" v-tooltip.top-center="editTooltip"
                    to="admin/project">
                    <i class="fa fa-edit"></i>
                  </v-button> -->
                  <router-link to="/admin/project" tag="button" class="btn btn-light btn-sm">Editar</router-link>
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

const tableColumns = ['Id', 'Name', 'Manager', 'Owner', 'Application', 'StartUp', '']
const tableData = [{
  id: 1,
  name: 'Niger',
  manager: 'Miguel Cortinas',
  owner: 'Manuel Balderrama',
  application: '20/05/2023',
  startup: '20/05/2023'
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
