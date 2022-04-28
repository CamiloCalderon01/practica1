<template>
    <div class="mt-5">
        <table class="table table-striped table-bordered table-hover w-75 m-auto text-center">
            <thead>
                <tr>
                    <th>ID Reasignacion</th>
                    <th>Motivo</th>
                    <th>Fecha Cambio</th>
                    <th>Jefe</th>
                    <th>Tienda</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="historial in historiales.data" :key="historial.idReasignaciones">
                    <td>{{ historial.idReasignaciones }}</td>
                    <td>{{ historial.motivo }}</td>
                    <td>{{ historial.fechCambio }}</td>
                    <td>{{ historial.nombreJefe }}</td>
                    <td>{{ historial.nombreOficial }}</td>
                </tr>
            </tbody>
        </table>

        <pagination align="center" :data="historiales" @pagination-change-page="mostrarHistoriales" class="mt-2"/>
    </div>
</template>

<script>
import pagination from 'laravel-vue-pagination';
export default {
    name: "historial",
    components: {
        pagination
    },
    data() {
        return {
            historiales: []
        }
    },
    mounted() {
        this.mostrarHistoriales()
    },
    methods: {
        async mostrarHistoriales(page = 1) {
            await axios.get("/api/historial?page=" + page)
                .then(response => {
                    this.historiales = response.data;
                })
                .catch(error => {
                    this.historiales = [];
                    console.log("Error: " + error)
                })
        }
    }
}
</script>