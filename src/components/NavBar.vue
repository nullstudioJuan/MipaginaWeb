<template>
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
                    <a @click="irInicio()" class="nav-link active nav-link-icon" href="/#Inicio">
                        Inicio
                    </a>
                </li>
                <li class="nav-item">
                    <a  class="nav-link nav-link-icon" href="#Conoce"  v-smooth-scroll>
                        Conóceme
                    </a>
                </li>
               <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#"  v-smooth-scroll>
                        Portafolio
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#Servicios"  v-smooth-scroll>
                        Servicios
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#"  v-smooth-scroll>
                        Contacto
                    </a>
                </li>

            </ul>
        </base-nav>
    </div>
</template>

<script>
import baseDropdown from '../components/BaseDropdown'
import baseNav from '../components/BaseNav'
import closeButton from '../components/CloseButton'


export default {
    components:{
        baseDropdown: baseDropdown,
        baseNav: baseNav,
        closeButton: closeButton
    },

    methods:{
        irInicio(){
            window.scroll({
                top: 0,  
                behavior: 'smooth'
                });
        }

    }


}
</script>

<style  scoped>
    
</style>