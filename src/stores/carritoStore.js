import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCarritoStore = defineStore('carrito', () => {
  let cursoStore = ref([]);
 
  let agregarCursoCarrito = (curso) => {
    if (!curso) return;
    const cursoExistente = cursoStore.value.find(c => c.id === curso.id);
    if (cursoExistente) {
      console.log(`El curso con id "${curso.id}" ya existe en el carrito.`);
      return;
    }
    cursoStore.value.push(curso);
    console.log('cursoStore.value::: ', cursoStore.value);
  };
  let borrarCarrito = () =>{
    cursoStore.value=[]
  }
  return {
    cursoStore,
    agregarCursoCarrito,
    borrarCarrito
  };
});
