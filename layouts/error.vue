<template>
  <div>
    <section class="hero is-fullheight is-black">
      <div class="hero-body">
        <div class="container">
          <h1 class="title" v-if="error.statusCode === 404">Page not found 😕</h1>
          <h1 class="title" v-else>Something went wrong 👀</h1>
          <round-button
            tag="router-link"
            to="/">
            Return to home
          </round-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
