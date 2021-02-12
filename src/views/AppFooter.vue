<template>
    <footer class="footer has-cards">

        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Gracias por visitar mi página</h3>
                    <h4 class="mb-0 font-weight-light">Si tienes algun comentario, ayudame a mejorar</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                   
                    <a target="_blank" rel="noopener" href="https://github.com/nullstudioJuan?tab=overview&from=2021-01-01&to=2021-01-29"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                     <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/juan-carlos-herrera-pro-9166151ab"
                       class="btn btn-neutral btn-icon-only btn-linkedin btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <hr>

            <div class="text-center">
                 <!--New footer-->
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <i class="fas fa-map-marker-alt fa-2x"></i>
                        <p>San Marcos Contla, Tlaxcala</p>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <i class="fas fa-mobile fa-2x"></i>
                        <p>+52 5565569870</p>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <i class="fas fa-envelope fa-2x"></i>
                        <p>null.studio@gmail.com</p>
                    </div>
                </div>

                <div class="social">
                    <i class="fab fa-instagram fa-2x"></i>
                    <i class="fab fa-facebook-f fa-2x"></i>
                    <i class="fab fa-twitter fa-2x"></i>
                </div>

                <div class="copyright">
                    <p>Copyright © 2019 NullStudio - All rights reserved.</p>
                </div>
            </div>
           
            <!--
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a>Juan Carlos Herrera Pro</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" rel="noopener">Telefono: 222-2388-168</a>
                        </li>
                        
                    </ul>
                </div>
                <p>Pagina diseñana y desarrollada por mi, utilizando VueJs y "Argon - Desing System" de  <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Creative Tim</a> & <a href="https://www.binarcode.com" target="_blank" rel="noopener">Binar Code</a></p>
    
            </div>
            -->
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
    .social{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .social > * {
        padding: 5%;
    }

</style>
