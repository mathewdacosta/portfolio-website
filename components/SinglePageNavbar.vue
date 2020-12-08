<template>
  <b-navbar
    type="is-primary"
    transparent
    :mobile-burger="false"
  >
    <template slot="end">
      <b-navbar-item href="#projects">
        Projects
      </b-navbar-item>
      <b-navbar-item href="#about">
        About
      </b-navbar-item>
      <b-navbar-item href="#contact">
        Contact
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
.navbar-item {
  font-weight: 600;
}
</style>
