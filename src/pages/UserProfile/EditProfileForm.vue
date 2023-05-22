<template>
  <card>
    <h4 slot="header" class="card-title">Edit Profile</h4>

    <form>
      <div class="row">
        <div class="col-md-5">
          <base-input type="text" label="Project" :disabled="true" placeholder="Light dashboard" v-model="user.project">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" label="Team" placeholder="Team" v-model="user.username">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="email" label="Email" placeholder="Email" v-model="user.email">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <base-input type="text" label="First Name" placeholder="First Name" v-model="user.firstName">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" label="Last Name" placeholder="Last Name" v-model="user.lastName">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" label="Birth Day" placeholder="Birth Day" v-model="user.lastName">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" label="Role" placeholder="Role" v-model="user.lastName">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5">
          <base-input type="text" label="Ability" placeholder="Ability" v-model="user.city">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" label="CURP" placeholder="CURP" v-model="user.address">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" label="RFC" placeholder="RFC" v-model="user.address">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input type="text" label="Address" placeholder="Home Address" v-model="user.address">
          </base-input>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
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
        project: 'Niger',
        username: 'mike@uach.mx',
        email: '',
        firstName: 'Miguel',
        lastName: 'Cortinas',
        address: 'Melbourne, Australia',
        city: 'melbourne',
        country: 'Australia',
        postalCode: '',
        aboutMe: `En el gabacho se reparte la ch y la pizza Puro Belicon.`
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
