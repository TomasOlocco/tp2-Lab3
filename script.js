const appGlobo = Vue.createApp({
  data (){
    return {      
      boton: 'Seguir',
      siguiendo: false,
      numero: 200,
      megusta: true,
      usuario: '',
      error: '',
      mensaje: '',
      comentarios: []
    }
  },
  methods: {
    seguir() {
      if (this.siguiendo) {
        this.boton = "Seguir";
      } else {
        this.boton = "Dejar de seguir";
      }
      this.siguiendo = !this.siguiendo;
    },
    like() {
      if(this.megusta) {
        this.numero++;
        this.megusta = false;
      }
    },
    agregarComentario() {
      if(this.usuario.trim() === '') {
        this.error = "Ingrese un usuario";
      }
      else {
        if(this.mensaje.trim() === '') {
          this.error = "Ingrese un comentario";
        }
        else {
          this.comentarios.push(this.usuario + ' ' + this.mensaje);
          this.mensaje='';
          this.usuario='';
        }
      }
    },
    eliminarComentario(index) {
      this.comentarios.splice(index, 1);
    }
  }
})
appGlobo.mount('#app');
  