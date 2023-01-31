# Tienda

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Usuarios 
#### Usuario admin
#### email": "ariel@ariel.com"
#### "password": "123456"
#### Cliente 
#### "email": "Leslie69@yahoo.com"
#### "password": "SdVVgwuWq1FGBQk"

***
## Caracteristicas propias

Existen tres tipos de usuario
- admin
+ cliente
- visitante (que no se registra)

Utilizé 
+ Pinia
+ Composables
+ Script Setup
+ Guards (solo para una ruta-> se me complico y no dio el tiempo)
+ Rutas Hijas

Resumen: 
Un usuario puede comprar y pagar los cursos, pero hay un bug que no me dio el tiempo de desarrollarlo, es que un mismo usuario no puede volver a pagar por el mismo curso, es mas no lo hace, pero no te avisa nada el sistema.
El sistema carece de alertas no llegue a tiempo, para manejar los toast.

La Idea original estaba relacionada con la estructura de carpetas:
+ API con las apis
+ composables -> para que sean consumidas desde toda la aplicacion
+ Guards -> para que maneje los accesos a las rutas
+ Modulos -> donde estarian como quedarian formadas las paginas segun el usuario ( asi que quedo a medias pero tambien funciona)
+ Router donde estarian separadas segun el usuario (solo una parte)
+ Views -> vistas generales
+ Componets
    + shared : menu, tablas, footer etc
    + dahsboard: componentes solo del dashboard
    + Auth: autorizacion y registro

    
