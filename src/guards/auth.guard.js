import { useUsuarioStore } from "../stores/usuarioStore";

const estaAutenticado = async (to,from,next) =>{
    const usuarioStore = useUsuarioStore();
    if(usuarioStore.tipo!=undefined && usuarioStore.tipo == 'admin'){

        next()
    }else{
        next({path:'/'})
    }
}

export default estaAutenticado