import Vue from 'vue';
import Router from 'vue-router';
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import cursosPorId from "./views/cursosPorId";
import AddRole from "./components/AddRole";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/cursosPorId",
      name: "cursos-por-id",
      component: cursosPorId
    },
    {
      path: "/registro",
      name: "signup",
      component: SignUp
    },
    {
      path: "/",
      alias: "/iniciar-sesion",
      name: "login",
      component: Login
    },
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "nuevo-rol",
          name: "add-role",
          component: AddRole
        }
      ]
    }
  ]
})
