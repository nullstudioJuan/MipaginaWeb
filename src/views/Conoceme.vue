<template>
  <div class="container ct-example-row ">
    <sequential-entrance fromBottom>
      <div class="row">
        <div class="w-100"></div>
        <div class="col img fade-in">
          <img src="https://i.ibb.co/RCcZ8v6/Yoxd.jpg" alt="Yoxd" border="0" />
        </div>
          
        <div class="col">
          <h1>Acerca de mi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat
            numquam facere sunt! Molestiae, quo ut magnam esse alias fuga
            voluptatum quae sint consequatur minus. Est, reprehenderit unde .
            Magni, odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
            totam necessitatibus facilis possimus doloribus blanditiis officia
            ducimus cupiditate rerumeius eos cumque quibusdam in a modi iste quae
            inventore non.
          </p>
          <progress-bar
            class="barra"
            type="default"
            :value="valorHTML"
            label="HTML5"
          ></progress-bar>
          <progress-bar
            class="barra"
            type="default"
            :value="valorCSS"
            label="CSS3"
          ></progress-bar>
          <progress-bar
            class="barra"
            type="default"
            :value="valorJs"
            label="Javascript"
          ></progress-bar>
          <progress-bar
            class="barra2"
            type="default"
            :value="valorVue"
            label="VUEJS"
          ></progress-bar>
        </div>
        
      </div>
      <div class="row">
        <div class="offset-0 col-2">
          <base-button class="boton" @click="irAbajo()" type="primary"
            >Contactame</base-button
          >
        </div>
        <div class="offset-3 offset-sm-2 offset-md-1 col-2">
          <base-button class="botoncv boton" @click="descargar" type="primary"
            >Descarga mi CV</base-button
          >
        </div>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
  import axios from "axios";
  import progressBar from '../components/BaseProgress'
  export default {
    data(){
      return{
        valorHTML:0,
        valorCSS:0,
        valorJs:0,
        valorVue:0
      }
    },


    created(){
       this.aumentar();
    },

      components:{
        progressBar:progressBar
      },

      methods:{
        aumentar(){
          for(let i= 0; i < 80; i++){
            setTimeout(() => { this.valorHTML++ }, 2000);
          }

          for(let i= 0; i < 80; i++){
            setTimeout(() => { this.valorCSS++ }, 2500);
          }

          for(let i= 0; i < 80; i++){
            setTimeout(() => { this.valorJs++ }, 3000);
          }

          for(let i= 0; i < 80; i++){
            setTimeout(() => { this.valorVue++ }, 3500);
          }
        },

        forceFileDownload(response, cv){
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', cv)
            document.body.appendChild(link)
            link.click()
        },
            
        descargar(){
          axios({
                method: 'get',
                url: 'https://bucket-para-pagina.s3.us-east-2.amazonaws.com/Juan+Carlos+Herrera+Pro+CV+ES.pdf',
                responseType: 'arraybuffer'
            })
            .then(response => {
                let cv = "Juan+Carlos+Herrera+Pro+CV+ES.pdf"
                this.forceFileDownload(response, cv)
                
            })
            .catch(() => console.log('Error al obtener CV'))
            },

        irAbajo(){
         window.scrollBy(0, window.innerHeight*3);
         console.log(window.innerHeight)
         
        }
      }
  }
</script>

<style  scoped>
.botoncv {
  background-color: gray;
  border-color: gray;
  margin-left: 2vh;
}

.boton {
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.barra {
  margin-bottom: -2vh;
  margin-top: -2vh;
}

.barra2 {
  margin-bottom: -1vh;
  margin-top: -2vh;
}

img {
  max-width: 100%;
  min-width: 300px;
  height: auto;
}

.fade-in {

  animation: fadeIn ease 10s;
  -webkit-animation: fadeIn ease 10s;
  -moz-animation: fadeIn ease 10s;
  -o-animation: fadeIn ease 10s;
  -ms-animation: fadeIn ease 10s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}



</style>