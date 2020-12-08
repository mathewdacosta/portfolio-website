<template>
  <div>
    <section class="hero is-primary is-fullheight is-bold">
      <div class="hero-body">
        <div class="container has-text-right">
          <div class="level is-mobile">
            <div class="level-left"></div>
            <div class="level-right">
              <div class="avatar-image">
                <b-image
                  :src="require('~/assets/images/avatar.png')"
                  alt="Mathew Dacosta"
                  ratio="1by1"
                  width="200px"
                  rounded
                >
                </b-image>
              </div>
            </div>
          </div>
          <h1 class="title">
            Mathew Dacosta
          </h1>
          <h2 class="subtitle">
            Computer&nbsp;Games&nbsp;Programming student,
            open&nbsp;source&nbsp;developer
          </h2>
          <!-- alignment go <brrrrrr /> -->
          <!-- this is a lazy way to achieve this but it works -->
          <br><br><br>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <single-page-navbar />
        </div>
      </div>
    </section>

    <section class="section has-background-white-bis" id="projects">
      <div class="container has-text-centered">
        <h1 class="title">Projects</h1>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <project-overview>
          <template slot="main">
            <div class="content">
              <h1>Pacman</h1>
              <p>
                A simple recreation of Pac-Man using C++ alongside an existing library for 2D graphics, audio and input.
              </p>
            </div>
            <div>
              <b-button
                type="is-primary"
                rounded
                icon-left="github"
                tag="a"
                href="https://github.com/mdacosta/FOGGS-Pacman"
                target="_blank">
                View source
              </b-button>
            </div>
          </template>
          <template slot="image">
            <b-image
            :src="require('~/assets/images/pacman.png')"
            alt="Screenshot of Pacman"
            ratio="16by10" /> <!-- TODO better image -->
          </template>
        </project-overview>

        <br class="is-hidden-mobile-only" />
        <hr class="is-hidden-tablet project-separator" />

        <project-overview main-side="right">
          <template slot="main">
            <div class="content">
              <h1>Tricky Goals</h1>
              <p>
                Swing your hammer to hit as many balls into the goal as possible, but avoid the bombs!
              </p>
              <p>
                Tricky Goals was a game created as part of a team for an entry-level game jam.
              </p>
            </div>
            <div>
              <b-button
                type="is-primary"
                rounded
                icon-left="chevron-right-circle-outline"
                tag="a"
                href="https://mdcfe.itch.io/tricky-goals"
                target="_blank">
                View on Itch.io
              </b-button>
            </div>
          </template>
          <template slot="image">
            <b-image
            :src="require('~/assets/images/tricky-goals.jpg')"
            alt="Screenshot of Tricky Goals gameplay"
            ratio="16by10" /> <!-- TODO better image -->
          </template>
        </project-overview>

        <br class="is-hidden-mobile-only" />
        <hr class="is-hidden-tablet" />

        <project-overview>
          <template slot="main">
            <div class="content">
              <h1>Placeholder</h1>
              <p>
                More exciting projects coming soon!
              </p>
            </div>
          </template>
          <template slot="image">
            <b-image
            :src="require('~/assets/images/pacman.png')"
            alt="Screenshot of Pacman"
            ratio="16by10" /> <!-- TODO better image -->
          </template>
        </project-overview>
      </div>
    </section>

    <section class="section has-background-white-bis" id="about">
      <div class="container has-text-centered">
        <h1 class="title">About</h1>
      </div>
    </section>

    <section class="section">
      <div class="container has-text-centered">
        <div class="content">
          <nuxt-content :document="about" />
        </div>
      </div>
    </section>

    <section class="section has-background-white-bis" id="contact">
      <div class="container has-text-centered">
        <h1 class="title">Contact</h1>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="px-6">
          <nav class="level">
            <div class="level-item">
              <b-button
                type="is-primary"
                size="is-medium"
                rounded
                icon-left="linkedin"
                tag="a"
                href="https://linkedin.com/in/mathew-dacosta">
                LinkedIn
              </b-button>
            </div>
            <div class="level-item">
              <b-button
                type="is-primary"
                size="is-medium"
                rounded
                icon-left="github"
                tag="a"
                href="https://github.com/mathewdacosta">
                GitHub
              </b-button>
            </div>
            <div class="level-item">
              <b-button
                type="is-primary"
                size="is-medium"
                rounded
                icon-left="twitter"
                tag="a"
                href="https://twitter.com/mathewdacosta">
                Twitter
              </b-button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ProjectOverview from '~/components/ProjectOverview'
import SinglePageNavbar from '~/components/SinglePageNavbar'

export default {
  name: 'Home',
  layout: 'home',

  components: {
    ProjectOverview,
    SinglePageNavbar
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch();

    return {
      about
    };
  }
}
</script>

<style scoped>
.avatar-image {
  width: 200px;
  height: 200px;
}

.project-separator {
  border-color: #eee;
}

.level-item > a.button {
  min-width: 152px;
}
</style>
