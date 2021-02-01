<template>
    <div >
        <div style="position: relative">
        <base-nav type="primary" effect="dark" expand>
            <a class="navbar-brand" href="#">Juan Carlos Herrera Pro</a>

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

            </ul>
        </base-nav>
    </div>

    <div class="scroll-container">
         <app-inicio id="Inicio"></app-inicio>
        <br id="Conoce">
        <hr style="width:75%;">
        <app-conoce ></app-conoce>
        <br>
        <hr id="Portafolio"  style="width:75%;">
        <div class="separacion"></div>
        <app-portafolio ></app-portafolio>
        <div class="separacion"></div>
        <hr id="Servicios" style="width:75%;">
        <div class="separacion"></div>
        <app-servicios ></app-servicios>
        <div class="separacion"></div>
        <hr style="width:75%;">
        <div class="separacion"></div>
        <app-contacto id="Contacto"></app-contacto>
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


export default {
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