import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      //redirect: "/#Inicio",
      name: "Principal",
      component:() =>
        import( '../src/views/Principal.vue')
    },

    {
      path: "/#Inicio",
      name: "Inicio",
      component:() =>
        import('../src/views/Inicio.vue')

    },

    {
      path: "/#Conoceme",
      name: "Conoceme",
      component:()=>
        import('../src/views/Conoceme.vue')

    },

    {
      path: "/#Servicios",
      name: "Servicios",
      component:()=>
        import('../src/views/Servicios.vue')
      
    }


  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
