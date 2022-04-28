const Tiendas = () => import('./components/Tiendas.vue');
const Historial = () => import('./components/Historial.vue');
const Empleados = () => import('./components/Empleados.vue');

export const routes = [
{
    name: 'Home',
    path: '/',
    component: Empleados
},
{
    name: 'Tiendas',
    path: '/tiendas',
    component: Tiendas
},
{
    name: 'Historial',
    path: '/historial',
    component: Historial
}
];