<template>
  <div class="container">
    <sequential-entrance fromBottom> 
      <div class="row">
        <div class="col">
          <h1 class="titulo">Contacto</h1>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="sendEmail">
        
        <div class="row">
          <div class="col-6">
            <label>Nombre*</label>
            <base-input
              :valid="banNombre"
              type="text"
              v-model="name"
              name="name"
              :required="true"
              placeholder="Tu Nombre"
            >
            </base-input>
          </div>

          <div class="col-6">
            <label>Apellido*</label>
            <base-input
              :required="true"
              type="text"
              v-model="apellido"
              name="apellido"
              placeholder="Tu Apellido"
              :valid="banApellido"
            >
            </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <label>Email*</label>
            <base-input
              :required="true"
              type="email"
              v-model="email"
              name="email"
              placeholder="Tu Email"
              :valid="banEmail"
            >
            </base-input>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <label>Mensaje*</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              required
              name="message"
              v-model="message"
              cols="30"
              placeholder="Enviame un mensaje"
            >
            </textarea>
          </div>
        </div>

        <br />
        <input ref="mandar" type="submit" value="Send" style="display: none" />
        <base-button class="boton" @click="$refs.mandar.click()"> Enviar </base-button>

        <base-alert v-if="exito" type="success">
          <strong>Gracias por ponerte en contacto!</strong> Hablamos pronto
        </base-alert>
      </form>
    </sequential-entrance>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import BaseInput from "../components/BaseInput.vue";
export default {
  components: { BaseInput },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      apellido: "",
      banNombre: null,
      banEmail: null,
      banApellido: null,
      banMensaje: null,
      exito: false,
    };
  },

  methods: {
    sendEmail(e) {
      let contador = 0;
      if (this.name.length == 0) {
        this.banNombre = false;
        contador++;
      } else {
        this.banNombre = true;
      }
      if (this.apellido.length == 0) {
        this.banApellido = false;
        contador++;
      } else {
        this.banApellido = true;
      }
      if (this.email.length == 0) {
        this.banEmail = false;
        contador++;
      } else {
        this.banEmail = true;
      }
      if (this.message.length == 0) {
        this.banMensaje = false;
        contador++;
      } else {
        this.banMensaje = true;
      }

      if (contador != 0) {
        return;
      }

      try {
        emailjs.sendForm(
          "service_3nv4b4n",
          "template_osnap2n",
          e.target,
          "user_8o41r4QuXiRdBLii7uAYa",
          {
            name: this.name,
            email: this.email,
            message: this.message,
            apellido: this.apellido,
          }
        );
        this.exito = true;
      } catch (error) {
        console.log({ error });
      }
      this.name = "";
      this.email = "";
      this.message = "";
      this.apellido = "";
      (this.banMensaje = null),
        (this.banApellido = null),
        (this.banNombre = null),
        (this.banEmail = null);
    },
  },
};
</script>

<style scoped>
    .titulo {
        text-align: center;
    }

    .boton{
        margin-bottom: 1vh;
    }
</style>