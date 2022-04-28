<template>
  <div class="mt-5">
    <table
      class="table table-striped table-hover table-bordered w-50 m-auto text-center">
      <thead>
        <tr>
          <th>ID JEFE</th>
          <th>DNI</th>
          <!-- <th>Ap Paterno</th>
                    <th>Ap Materno</th>
                    <th>Nombres</th> -->
          <th>Nombre Completo</th>
          <th>Sexo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados.data" :key="empleado.idJefe">
          <td>{{ empleado.idJefe }}</td>
          <td>{{ empleado.dni }}</td>
          <!-- <td>{{ empleado.apPaterno }}</td>
                    <td>{{ empleado.apMaterno }}</td>
                    <td>{{ empleado.nombres }}</td> -->
          <td>{{ empleado.nombre_completo }}</td>
          <td>{{ empleado.sexo }}</td>
        </tr>
      </tbody>
    </table>
    <pagination align="center" :data="empleados" @pagination-change-page="mostrarEmpleados" class="mt-2"/>
  </div>
</template>

<script>
import pagination from 'laravel-vue-pagination';
export default {
  name: "empleados",
  components: {
    pagination
  },
  data() {
    return {
      empleados: [],
    };
  },
  mounted() {
    this.mostrarEmpleados();
  },
  methods: {
    async mostrarEmpleados(page=1) {
      await axios.get("/api/empleado?page=" + page)
        .then((response) => {
          console.log(response);
          this.empleados = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.empleados = [];
        });
    },
  },
};
</script>