import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import mockApi from "@/api/mockapiApi"
import { useUsuarioStore } from './usuarioStore'



export const useLoginStore = defineStore('login', () => {
    
    let cargarUser = async (usuario) => {
        const {data} = await mockApi.get('/usuarios')
        console.log('data::: ', data);
        // const { data } = await getUsuario();
        const user = data.find(user => user.email === usuario );

        if (!user) return 
            
        // localStorage.setItem('user', JSON.stringify({ email: user.email }))
        /* store */
        const usuarioStore = useUsuarioStore();
        const {agregarUsuario} = usuarioStore
        agregarUsuario(user)
            
    
          
    }

  return {
    cargarUser
  }
})


