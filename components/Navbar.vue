<template>
  <b-navbar spaced shadow fixed-top type="is-dark">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong class="is-size-4">Mathew Dacosta</strong>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/projects' }">
        Projects
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/#contact' }">
        Contact
      </b-navbar-item>
    </template>
  </b-navbar>
</template>