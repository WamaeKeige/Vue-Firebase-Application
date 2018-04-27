<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h3>Vue and FireBase Application</h3>
      <hr>
      <div class="form-group">
          <label for="name">Name</label>
          <input
                  type="text"
                  id="name"
                  class="form-control" v-model="user.name">
      </div>
      <div class="form-group">
          <label for="email">Email Address</label>
          <input
                  type="text"
                  id="email"
                  class="form-control" v-model="user.email" >
      </div>
      <div class="form-group">
          <label for="age">Age</label>
          <input
                  type="number"
                  id="age"
                  class="form-control" v-model="user.age">
      </div>
      <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
                  type="number"
                  id="phone"
                  class="form-control" v-model="user.phone">
      </div>
      <div class="row">
              <button class="btn btn-primary btn-lg" @click="submit">Submit ! </button>
            <hr />
          <button class="btn btn-success btn-lg" @click="fetchData">Get Data!</button>
      </div>
    <hr />
    <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush" v-for="u in users">
    <li class="list-group-item">{{ u.name}}</li>
    <li class="list-group-item">{{ u.email}}</li>
    <li class="list-group-item">{{ u.phone}}</li>
    <li class="list-group-item">{{ u.age}}</li>
  </ul>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      user: {
        name: '',
        email: '',
        age: '',
        phone: ''
      },
      users:[]
    };
  },
  methods: {
    submit() {
      /**this.$http.post('data.json', this.user).then(response =>{
        console.log(response)
      }, error => {
        console.log(error);
      });**/
      this.resource.saveAlt(this.user);
    },
    fetchData(){
      this.$http.get('data.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const resultArray = [];
        for (let key in data){
         resultArray.push(data[key]);
      }
      this.users = resultArray;
    });
  },
  created(){
    const customActions = {
      saveAlt: {method: 'POST', url:'alternative.json'}
    };
    this.resource = this.$resource('data.json', {}, customActions);
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
