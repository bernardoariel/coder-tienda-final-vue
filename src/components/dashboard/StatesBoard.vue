<script setup>
import { ref , onMounted} from 'vue'
import mockApi from "@/api/mockapiApi"
import mockApiCompras from "@/api/mockapiApiCompras"
import { useRouter } from 'vue-router';
const router = useRouter()
let usuarios = ref([])
let usuariosAdmin =ref([])
let cursos = ref([])
let cursosFrontend =ref([])
let porcentajeCursosFrontend = ref([])
let compras = ref([])
let sumaPrecios = ref('')
onMounted(async () => {
    
    /* usuarios */
    const {data:datauser} = await mockApi.get('/usuarios')
    usuarios.value = datauser
    usuariosAdmin.value = usuarios.value.filter(item => item.tipousuario == true);
    /* cursos */
    const {data:datacursos} = await mockApi.get('/productos')
    cursos.value = datacursos
    cursosFrontend.value = cursos.value.filter(item => item.categoria == 'frontend');
    porcentajeCursosFrontend =  Math.round((cursosFrontend.value.length / cursos.value.length) * 100)

    /* compras */
    let {data:datacompras} = await mockApiCompras.get(`/compras/`)
    compras.value = datacompras.filter(item => item.pagado == true);
	sumaPrecios = compras.value.reduce((total, item) => total + parseFloat(item.precio), 0);

})
const nuevo = (valor) =>{
    if(valor=='curso') router.push({path:'/producto/nuevo'})
    if(valor=='usuario') router.push({path:'/nuevousuario'})
}

</script>
<template>
    
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Compras</span>
                        <div class="text-900 font-medium text-xl">{{compras.length}}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">$ {{sumaPrecios}} </span>
                <span class="text-500"> es el total de las compras</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Cursos</span>
                        <div class="text-900 font-medium text-xl">{{cursos.length}}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-book text-orange-500 text-xl"></i>
                    </div>
                </div>
                <div class="flex justify-content-between ">
                    <div>
                    
                        <span class="text-green-500 font-medium">el {{porcentajeCursosFrontend}} % </span>
                        <span class="text-500"> son cursos frontend</span>
                    </div>
                    <div>
                        <Button class="p-button p-component p-button-icon-only p-button-rounded p-button-secondary p-button-text" 
                        @click="nuevo('curso')" 
                        >
                        <span class="pi pi-plus p-button-icon"></span>
                        </Button>
                       
                    </div>
                
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Usuarios</span>
                        <div class="text-900 font-medium text-xl">{{usuarios.length}}</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-users text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <div class="flex justify-content-between ">
                <div>
                
                    <span class="text-green-500 font-medium">{{usuariosAdmin.length}}  </span>
                    <span class="text-500"> usuario/s administrador/es</span>
                </div>
                <div>
                    <Button class="p-button p-component p-button-icon-only p-button-rounded p-button-secondary p-button-text" 
                        @click="nuevo('usuario')" 
                        >
                        <span class="pi pi-plus p-button-icon"></span>
                        </Button>
                       
                </div>
            </div>
            </div>
            
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Subscriciones</span>
                        <div class="text-900 font-medium text-xl">todavia nada</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-bolt text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">0 </span>
                <span class="text-500">en proceso</span>
            </div>
        </div>
    </div>
</div>
</template>


<style lang="scss" scoped>

</style>