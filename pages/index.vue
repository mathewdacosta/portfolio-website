<template>
  <div>
    <section class="hero is-primary-light is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Hi, I'm Mathew Dacosta.
          </h1>
          <h2 class="subtitle">
            I'm a Computer Games Programming student and open source developer.
          </h2>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container has-text-centered">
        <div class="content">
          <nuxt-content :document="about" />
        </div>
      </div>
    </section>

    <section class="section has-background-dark" id="projects">
      <div class="container has-text-centered">
        <h1 class="title section-title has-text-white">Projects</h1>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectOverview from '~/components/ProjectOverview'

export default {
  name: 'Home',

  components: {
    ProjectOverview
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch();

    return {
      about
    };
  }
}
</script>
