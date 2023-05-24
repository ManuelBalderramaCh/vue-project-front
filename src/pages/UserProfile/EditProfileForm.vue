<template>
  <card>
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form>
      <div class="row">
        <div class="col-md-5"> 
          <base-input type="text" v-model="member._project" label="Project" :disabled="true" placeholder="Project Name" :value="member._project">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="email" v-model="member._email" label="Email" :disabled="true" placeholder="Email" :value="member._email">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <base-input type="text" v-model="member._name" label="First Name" placeholder="First Name" :value="member._name">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" v-model="member._lastName" label="Last Name" placeholder="Last Name" :value="member._lastName" >
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" v-model="member._birthDay" label="Birth Day" placeholder="Birth Day" :value="member._birthDay">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" v-model="member._role" label="Role" placeholder="Role" :value="member._role">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5">
          <base-input type="text" v-model="member._abilities" label="Ability" placeholder="Ability" :value="member._abilities" >
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" v-model="member._curp" label="CURP" placeholder="CURP" :value="member._curp">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text" v-model="member._rfc" label="RFC" placeholder="RFC" :value="member._rfc">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input type="text" v-model="member._address" label="Address" placeholder="Home Address" :value="member._address">
          </base-input>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="edit(member._id)">
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
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
      id: this.$route.params.id,
    }
  },
  methods: {
    list(){
      axios.get('http://localhost:3000/members/' + this.id)
      .then(res => this.member = res.data.obj);
    },
    edit(memberId){
          axios.put(`http://localhost:3000/members/${memberId}`, {
              name: this.member._name,
              lastName: this.member._lastName,
              email: this.member._email,
              project: this.member._project,
              birthDay: this.member._birthDay,
              role: this.member._role,
              abilities: this.member._abilities,
              curp: this.member._curp,
              rfc: this.member._rfc,
              address: this.member._address,
          })
          .then(res => {
              console.log(res);
              this.$router.push('/admin/users')
          }).catch(err => {
              this.msg = err.response.data.message;
              console.log(err);
          });
      }
  },
  mounted(){
    this.list();
  }
}

</script>
<style></style>
