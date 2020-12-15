<template>
  <b-navbar
    type="is-primary"
    transparent
    :mobile-burger="false"
  >
    <template slot="end">
      <b-navbar-item href="#projects">
        <span class="is-size-5">
          Projects
        </span>
      </b-navbar-item>
      <b-navbar-item href="#about">
        <span class="is-size-5">
          About
        </span>
      </b-navbar-item>
      <b-navbar-item href="#contact">
        <span class="is-size-5">
          Contact
        </span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
.navbar-item {
  font-weight: 600;
}
</style>
