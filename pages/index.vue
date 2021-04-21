<template>
  <div>
    <section class="hero is-primary is-fancy-gradient">
      <div class="hero-body">
        <div class="container has-text-right">
          <div class="level is-mobile">
            <div class="level-left"></div>
            <div class="level-right">
              <div class="avatar-image">
                <b-image
                  :src="require('~/assets/images/avatar.jpg')"
                  alt="Mathew Dacosta"
                  ratio="1by1"
                  width="200px"
                  rounded
                >
                </b-image>
              </div>
            </div>
          </div>
          <h1 class="title is-size-2">
            Mathew Dacosta
          </h1>
          <h2 class="subtitle is-size-4">
            Games programmer,
            open source developer
          </h2>
          <!-- alignment go <brrrrrr /> -->
          <!-- this is a lazy way to achieve this but it works -->
          <br>

          <a class="pl-4" href="https://twitter.com/mathewdacosta">
            <b-icon
              icon="twitter"
              size="is-medium"
              type="is-white" />
          </a>
          <a class="pl-4" href="https://github.com/mathewdacosta">
            <b-icon
              icon="github"
              size="is-medium"
              type="is-white" />
          </a>
          <a class="pl-4" href="https://linkedin.com/in/mathew-dacosta">
            <b-icon
              icon="linkedin"
              size="is-medium"
              type="is-white" />
          </a>
          <br>
          <br>
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
              <h1>GEC Mario Bros</h1>
              <p>A 2D game inspired by the original Mario Bros game.</p>
              <p>GEC Mario Bros was created as part of a university assignment to create a 2D game engine using C++ and SDL.</p>
            </div>
            <div class="buttons">
              <b-button
                type="is-primary"
                rounded
                icon-left="home-outline"
                tag="a"
                href="https://mathewdacosta.github.io/GEC-Mario"
                target="_blank">
                Visit site
              </b-button>
              <b-button
                type="is-primary"
                rounded
                icon-left="github"
                tag="a"
                href="https://github.com/mathewdacosta/GEC-Mario"
                target="_blank">
                View source
              </b-button>
            </div>
          </template>
          <template slot="image">
            <b-image
            :src="require('~/assets/images/mario.png')"
            alt="Screenshot of GEC Mario Bros"
            ratio="16by13" />
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
                Tricky Goals was created in Unity with a team as part of the four-day Staffordshire University welcome week games jam.
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
              :src="require('~/assets/images/tricky-goals.webp')"
              alt="Screenshot of Tricky Goals gameplay"
              ratio="16by9" />
          </template>
        </project-overview>

        <br class="is-hidden-mobile-only" />
        <hr class="is-hidden-tablet" />

        <project-overview>
          <template slot="main">
            <div class="content">
              <h1>Pacman</h1>
              <p>A 2D game inspired by Pac-Man.</p>
              <p>Pacman was written for a university assignment while learning C++, using a provided library for graphics, audio and input.</p>
            </div>
            <div>
              <b-button
                type="is-primary"
                rounded
                icon-left="github"
                tag="a"
                href="https://github.com/mathewdacosta/FOGGS-Pacman"
                target="_blank">
                View source
              </b-button>
            </div>
          </template>
          <template slot="image">
            <b-image
            :src="require('~/assets/images/pacman.png')"
            alt="Screenshot of Pacman"
            ratio="25by16" />
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
        <div class="columns">
          <div class="column">
            <div class="content has-text-centered">
              <p>
                You can follow me for updates on my projects or get in touch on <a href="https://twitter.com/mathewdacosta">Twitter</a>, <a href="https://github.com/mathewdacosta">GitHub</a> or <a href="https://linkedin.com/in/mathew-dacosta">LinkedIn</a>.
              </p>
            </div>
            <br>
            <nav class="level">
              <div class="level-item">
                <a class="px-4" href="https://twitter.com/mathewdacosta">
                  <b-icon
                    icon="twitter"
                    size="is-medium"
                    type="is-primary" />
                </a>
                <a class="px-4" href="https://github.com/mathewdacosta">
                  <b-icon
                    icon="github"
                    size="is-medium"
                    type="is-primary" />
                </a>
                <a class="px-4" href="https://linkedin.com/in/mathew-dacosta">
                  <b-icon
                    icon="linkedin"
                    size="is-medium"
                    type="is-primary" />
                </a>
              </div>
            </nav>
          </div>
          <div class="column is-one-third">
            <a class="twitter-timeline" data-chrome="nofooter noborders" data-height="600" href="https://twitter.com/MathewDacosta?ref_src=twsrc%5Etfw"></a>
          </div>
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
  },
  head() {
    return {
      title: 'Mathew Dacosta',
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js',
          body: true
        }
      ],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Mathew Dacosta: games programmer, open source developer'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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

.hero.is-fancy-gradient {
  background-image: linear-gradient(141deg, #34b1aa 0%, #2d99ae 71%, #237faa 100%);
}
</style>
