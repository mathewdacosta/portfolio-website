<template>
  <div>
    <section class="hero is-primary is-medium is-bold">
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

    <section class="section" id="projects">
      <div class="container has-text-centered">
        <h1 class="title">Projects</h1>
      </div>
    </section>

    <section class="section has-background-white-ter">
      <div class="container">
        <project-overview>
          <template slot="main">
            <div class="content">
              <h1>Pacman</h1>
              <p>
                A simple recreation of Pacman using C++ and an existing library for 2D graphics, audio and input.
              </p>
            </div>
            <div>
              <b-button
                type="is-primary"
                rounded
                icon-left="github"
                tag="a"
                href="https://github.com/mdacoffee/FOGGS-Pacman"> <!-- TODO change -->
                View source
              </b-button>
            </div>
          </template>
          <template slot="image">
            <img
            :src="require('~/assets/images/pacman.png')"
            alt="Screenshot of Pacman"
            style="width: 100%; border-radius: 4px;" /> <!-- TODO better image -->
          </template>
        </project-overview>

        <br class="is-hidden-mobile-only" />
        <hr class="is-hidden-tablet" />

        <project-overview main-side="right">
          <template slot="main">
            <div class="content">
              <h1>Tricky Goals</h1>
              <p>
                A small Unity game created as part of a team for an entry-level game jam.
              </p>
            </div>
            <div>
              <b-button
                type="is-primary"
                rounded
                icon-left="chevron-right-circle-outline"
                tag="a"
                href="https://mdcfe.itch.io/tricky-goals"> <!-- TODO change -->
                View on Itch.io
              </b-button>
            </div>
          </template>
          <template slot="image">
            <img
            :src="require('~/assets/images/tricky-goals.jpg')"
            alt="Screenshot of Pacman"
            style="width: 100%; border-radius: 4px;" /> <!-- TODO better image -->
          </template>
        </project-overview>

        <br class="is-hidden-mobile-only" />
        <hr class="is-hidden-tablet" />

        <project-overview>
          <template slot="main">
            <div class="content">
              <h1>Placeholder #2</h1>
              <p>
                Another project can go here with text etc
              </p>
            </div>
          </template>
          <template slot="image">
            <img
            :src="require('~/assets/images/pacman.png')"
            alt="Screenshot of Pacman"
            style="width: 100%; border-radius: 4px;" /> <!-- TODO better image -->
          </template>
        </project-overview>
      </div>
    </section>

    <section class="hero is-dark is-medium" id="contact">
      <div class="hero-body">
        <h1 class="title has-text-centered">Contact</h1>
        <br />
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
              href="https://github.com/mdacoffee"> <!-- TODO change -->
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
              href="https://twitter.com/mdacoffee"> <!-- TODO change -->
              Twitter
            </b-button>
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
