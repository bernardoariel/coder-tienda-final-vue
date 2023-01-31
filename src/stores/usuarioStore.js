import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLoginStore } from './loginStore'

export const useUsuarioStore = defineStore('usuario', () => {
  const email = ref()
  const tipo = ref()
  const foto = ref()
  const nombre = ref()
  const usuarioLocal = ref()

  
  let agregarUsuario = (user)=>{
    email.value = user.email
    tipo.value = (user.tipo)?'admin':'cliente'
    foto.value = user.image
    nombre.value = user.nombre
  }

  let borrarUsuario = ()=>{
    email.value =''
    tipo.value =''
    foto.value =''
    nombre.value =''
  }
  let existeUsuario = () =>{
    let user = localStorage.getItem('user');
    if (user) {
      let parsedUser = JSON.parse(user);
      const {cargarUser} = useLoginStore();
      cargarUser(parsedUser.email)
      console.log('parsedUser::: ', parsedUser);
      return parsedUser.email
    } else {
      console.log('No hay usuario guardado en el localStorage');
      return false;
    }
  }
  
  

  return {email,tipo,foto,nombre ,agregarUsuario, borrarUsuario,existeUsuario}
})
