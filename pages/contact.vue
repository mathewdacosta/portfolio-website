<template>
  <div>
    <section class="section has-background-dark" id="contact">
      <div class="container has-text-centered">
        <h1 class="title section-title has-text-white">Contact</h1>
        <br />
        <nav class="columns is-centered">
          <div class="column is-2 mx-4 has-text-centered">
            <round-button
              expanded
              icon-left="linkedin"
              tag="a"
              href="https://linkedin.com/in/mathew-dacosta">
              LinkedIn
            </round-button>
          </div>
          <div class="column is-2 mx-4 has-text-centered">
            <round-button
            expanded
              icon-left="github"
              tag="a"
              href="https://github.com/mathewdacosta"> <!-- TODO change -->
              GitHub
            </round-button>
          </div>
          <div class="column is-2 mx-4 has-text-centered">
            <round-button
            expanded
              icon-left="twitter"
              tag="a"
              href="https://twitter.com/mathewdacosta">
              Twitter
            </round-button>
          </div>
        </nav>
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
