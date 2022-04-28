<template>
    <div class="mt-5">
        <table class="table table-striped table-bordered table-hover w-75 m-auto text-center">
            <thead>
                <tr>
                    <th>idTienda</th>
                    <th>Nombre Oficial</th>
                    <th>Correo</th>
                    <th>Calle</th>
                    <th>State</th>
                    <!-- <th>FK JEFE</th> -->
                    <th>Jefe</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tienda in tiendas.data" :key="tienda.idTienda">
                    <td>{{ tienda.idTienda }}</td>
                    <td>{{ tienda.nombreOficial }}</td>
                    <td>{{ tienda.correo }}</td>
                    <td>{{ tienda.calle }}</td>
                    <td>{{ tienda.state }}</td>
                    <!-- <td>{{ tienda.FK_idJefe }}</td> -->
                    <td>{{ tienda.nombreJefe }}</td>
                </tr>
            </tbody>
        </table>

        <pagination align="center" :data="tiendas" @pagination-change-page="mostrarTiendas" class="mt-2"/>
    </div>
</template>

<script>
import pagination from 'laravel-vue-pagination';
export default {
    name: "tiendas",
    components: {
        pagination
    },
    data() {
        return {
            tiendas: []
        }
    },
    mounted() {
        this.mostrarTiendas()
    },
    methods: {
        async mostrarTiendas(page = 1) {
            await axios.get("/api/tienda?page=" + page)
                .then(response => {
                    console.log(response);
                    this.tiendas = response.data;
                })
                .catch(error => {
                    console.log("ERROR: " + error);
                    this.tiendas = [];
                })
        }
    }
}
</script>