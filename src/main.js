import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "@tanstack/vue-query";
import PrimeVue from 'primevue/config';

import "primeflex/primeflex.css";
import 'primevue/resources/themes/saga-blue/theme.css'  

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import App from './App.vue'
import router from './router'


import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import Checkbox from 'primevue/checkbox';
import Avatar from 'primevue/avatar';
import SplitButton from 'primevue/splitbutton';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Panel from 'primevue/panel';
import SelectButton from 'primevue/selectbutton';
import ToggleButton from 'primevue/togglebutton';
import Textarea from 'primevue/textarea';
import OverlayPanel from 'primevue/overlaypanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputMask from 'primevue/inputmask';
import DataView from 'primevue/dataview';
import Badge from 'primevue/badge';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin)
app.use(router)
app.use(PrimeVue);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Menubar', Menubar);
app.component('Checkbox', Checkbox);
app.component('Avatar', Avatar);
app.component('SplitButton', SplitButton);
app.component('Carousel', Carousel);
app.component('Card', Card);
app.component('Image', Image);
app.component('Panel', Panel);
app.component('SelectButton', SelectButton);
app.component('ToggleButton', ToggleButton);
app.component('Textarea', Textarea);
app.component('OverlayPanel', OverlayPanel);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('InputMask', InputMask);
app.component('DataView', DataView);
app.component('Badge', Badge);
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);

app.mount('#app')
