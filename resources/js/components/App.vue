<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <router-link exact-active-class="active" to="/" class="nav-link navbar-brand px-3 m-auto">
            <img
                src="https://www.elempleo.com/sitios-empresariales/colombia/uis/images/logo.png"
                alt="Logo UIS"
                width="80"
                height="50"
            />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navba    rSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link exact-active-class="active" to="/" class="nav-link active" aria-current="page">Empleados</router-link>
            </li>
            <li class="nav-item">
              <router-link exact-active-class="active" to="/tiendas" class="nav-link">Tiendas</router-link>
            </li>
            <li class="nav-item">
              <router-link exact-active-class="active" to="/historial" class="nav-link">Historial</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

