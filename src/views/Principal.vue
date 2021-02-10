<template>
    <div id="scrollable">
        <div style="position: relative">
        <base-nav  :transparent=banNav type="primary" effect="dark" title="Juan Carlos Herrera Pro" expand>
            

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a> Juan Carlos Herrera Pro 
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                    <a v-smooth-scroll  class="nav-link active nav-link-icon" href="#Inicio">
                        Inicio
                    </a>
                </li>
                <li class="nav-item">
                    <a  v-smooth-scroll class="nav-link nav-link-icon" href="#Conoce">
                        Conóceme
                    </a>
                </li>
               <li  class="nav-item">
                    <a v-smooth-scroll class="nav-link nav-link-icon" href="#Portafolio">
                        Portafolio
                    </a>
                </li>
                <li class="nav-item">
                    <a v-smooth-scroll class="nav-link nav-link-icon" href="#Servicios">
                        Servicios
                    </a>
                </li>
                <li class="nav-item">
                    <a v-smooth-scroll class="nav-link nav-link-icon" href="#Contacto">
                        Contacto
                    </a>
                </li>
            <!--<li class="nav-item">
                    <a v-smooth-scroll class="nav-link nav-link-icon" href="">
                        {{x}} x {{y}} barra: {{z}}
                    </a>
                </li> -->

            </ul>
        </base-nav>
    </div>

    <div class="scroll-container">
         <app-inicio id="Inicio"></app-inicio>
        <br id="Conoce">
        <hr style="width:75%;">
        <app-conoce v-if="banConoceme"></app-conoce>
        <br>
        <hr id="Portafolio"  style="width:75%;">
        <div class="separacion"></div>
        <app-portafolio v-if="banPortafolio"></app-portafolio>
        <div class="separacion"></div>
        <hr id="Servicios" style="width:75%;">
        <div class="separacion"></div>
        <app-servicios v-if="banServicios"></app-servicios>
        <div class="separacion"></div>
        <hr style="width:75%;">
        <div class="separacion"></div>
        <app-contacto id="Contacto" v-if="banContactame"></app-contacto>
        <app-footer></app-footer>
    </div>
   
        
      
    </div>
</template>

<script>

import navBar from '../components/NavBar'
import Inicio from './Inicio'
import Conoceme from './Conoceme' 
import Portafolio from './Portafolio'
import Servicios from './Servicios'
import Contatame from './Contactame'
import Footer from './AppFooter'
import baseDropdown from '../components/BaseDropdown'
import baseNav from '../components/BaseNav'
import closeButton from '../components/CloseButton'

import VueScreenSize from 'vue-screen-size'

export default {

  mixins: [VueScreenSize.VueScreenSizeMixin],

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
 
        /*this.x =this.$vssWidth;

        this.y =this.$vssHeight;

        this.z = window.scrollY;*/
        
        if(window.scrollY > 100){
            this.banNav = false;
            this.banConoceme = true;
        }else{
            this.banNav = true;
        }

        if(window.scrollY > (this.$vssHeight*0.9)){
            this.banPortafolio = true;
        }

        if(window.scrollY > this.$vssHeight + (this.$vssHeight*0.75)){
            this.banServicios = true;
        }

        if(window.scrollY > 2*(this.$vssHeight) + (this.$vssHeight*0.65)){
            this.banContactame = true;
        }

    }
  },

    components:{
        appNav: navBar,
        appInicio: Inicio,
        appConoce: Conoceme,
        appPortafolio: Portafolio,
        appServicios:Servicios,
        appContacto:Contatame,
        appFooter:Footer,
         baseDropdown: baseDropdown,
        baseNav: baseNav,
        closeButton: closeButton
    },

    data(){
        return{
            contadorScroll:0,
            banNav:true,
            y:0,
            x:0,
            z:0,
            banConoceme:false,
            banPortafolio:false,
            banServicios:false,
            banContactame:false
        }
    }
}
</script>

<style  scoped>
    .separacion{
        margin-bottom: 10vh;
        margin-top: 10vh;
    }
    .scroll-container{
        
        scroll-behavior: smooth;
    }

  
 
</style>