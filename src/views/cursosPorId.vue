<template>
  <div class="container-fluid mt-2">
    <h1>Consulta tus cursos</h1>

    <div class="row">
      <button v-on:click="fetch">Consultar cursos</button>
      <router-view></router-view> 
    </div>
    <br>
    <table class = "table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Curso</th>
                <th>Rol</th>
                <th>Periodo</th>
            </tr>
        </thead>
        <tbody v-for="cursoPorId of cursosPorId" v-bind:key="cursoPorId.id">
            <tr>
                <td>{{ cursoPorId.user.names }}</td>
                <td>{{ cursoPorId.user.surnames }}</td>
                <td>{{ cursoPorId.course.courseName }}</td>
                <td>{{ cursoPorId.role.roleName }}</td>
                <td>{{ cursoPorId.period.periodName }}</td>
            </tr>
        </tbody>

    </table>
  </div>
</template>

<script>
import Axios from 'axios'

  export default{
    name: "cursosPorId",

    data (){
        return {
            cursosPorId: []
        };
    },

    // beforeCreate( ){
    //   if( !localStorage.getItem( 'token' ) ){
    //     this.$router.push( {name: 'cursosPorId'} )
    //   }
    

    methods: {
        fetch(){
            let url = "http://localhost:8080/cursosPorId/" + localStorage.getItem('user_id');
            console.log(url);
            Axios
            .get(url)
                .then(res => {
                    this.cursosPorId = res.data;
                     console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>