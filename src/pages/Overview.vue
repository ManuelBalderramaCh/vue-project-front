<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Capacity</p>
              <h4 class="card-title">105GB</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-light-3 text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Revenue</p>
              <h4 class="card-title">$1,345</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>Last day
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-vector text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Errors</p>
              <h4 class="card-title">23</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-clock-o"></i>Last day
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Followers</p>
              <h4 class="card-title">+45</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Updated now
            </div>
          </stats-card>
        </div>

      </div>
      <div class="row">
        <div class="col-md-8">
          <chart-card :chart-data="lineChart.data" :chart-options="lineChart.options"
            :responsive-options="lineChart.responsiveOptions">
            <template slot="header">
              <h4 class="card-title">Project Progress</h4>
              <p class="card-category">4 weeks performance</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Open
                <i class="fa fa-circle text-danger"></i> Click
                <i class="fa fa-circle text-warning"></i> Click Second Time
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Status Statistics</h4>
              <p class="card-category">Last Campaign Performance</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Finished
                <i class="fa fa-circle text-danger"></i> Not finished
                <i class="fa fa-circle text-warning"></i> To do
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </template>
          </chart-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <chart-card :chart-data="barChart.data" :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions" chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">2023 tasks</h4>
              <p class="card-category">All tasks including not finished</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Requirements completed
                <i class="fa fa-circle text-danger"></i> Requirements failed
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-check"></i> Data information certified
              </div>
            </template>
          </chart-card>
        </div>

        <div class="col-md-6">
          <card>
            <template slot="header">
              <h5 class="title">Tasks</h5>
              <p class="category">Front End development</p>
            </template>
            <l-table :data="tableData.data" :columns="tableData.columns">
              <template slot="columns"></template>

              <template slot-scope="{row}">
                <td>
                  <base-checkbox v-model="row.checked"></base-checkbox>
                </td>
                <td>{{ row.title }}</td>
                <td class="td-actions text-right">
                  <button type="button" class="btn-simple btn btn-xs btn-info" v-tooltip.top-center="editTooltip">
                    <i class="fa fa-edit"></i>
                  </button>
                  <button type="button" class="btn-simple btn btn-xs btn-danger" v-tooltip.top-center="deleteTooltip">
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </template>
            </l-table>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </div>
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartCard from 'src/components/Cards/ChartCard.vue'
import StatsCard from 'src/components/Cards/StatsCard.vue'
import LTable from 'src/components/Table.vue'

export default {
  components: {
    LTable,
    ChartCard,
    StatsCard
  },
  data() {
    return {
      editTooltip: 'Edit Task',
      deleteTooltip: 'Remove',
      pieChart: {
        data: {
          labels: ['40%', '20%', '40%'],
          series: [40, 20, 40]
        }
      },
      lineChart: {
        data: {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
            [287, 385, 490, 492, 554, 586, 698, 695],
            [67, 152, 143, 240, 287, 335, 435, 437],
            [23, 113, 67, 108, 190, 239, 307, 308]
          ]
        },
        options: {
          low: 0,
          high: 800,
          showArea: false,
          height: '245px',
          axisX: {
            showGrid: false
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc(value) {
                return value[0]
              }
            }
          }]
        ]
      },
      barChart: {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: '245px'
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc(value) {
                return value[0]
              }
            }
          }]
        ]
      },
      tableData: {
        data: [
          { title: 'Agregar botones de editar/eliminar en projects list y users list"', checked: false },
          { title: 'Generar un nuevo ColumnsList.vue para mostrar las user history y agregarla a la side bar (Puedes guiarte con el apartado de icons en la side bar)', checked: false },
          {
            title: 'Cambiar el dashboard, me parece que se ve bien, quitar lo de arriba, podemos usar ya varias cosas de aqui',
            checked: false
          },
          { title: 'Agregar creacion de proyecto y de usuario', checked: false },
          { title: 'Agregar el login y estilizarlo', checked: false },
          { title: 'No se como haremos para designar que proyecto se muestre en el dashboard, por si quiere cambiar de proyecto, tal vez poner a mero arriba de que proyectos mios (del usuario) y que le piquen y te muestre el que es ahi mismo', checked: false }
        ]
      }
    }
  }
}
</script>
<style></style>
