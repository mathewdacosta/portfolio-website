<template>
  <div>
    <section class="hero is-small has-background-white-ter">
      <div class="hero-body">
        <div class="container">
          <nav class="title section-title breadcrumb is-large" aria-label="breadcrumbs">
            <ul>
              <li><router-link to="/projects">Projects</router-link></li>
              <li class="is-active"><router-link to="/projects/archive">Archive</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="section fullpage">
      <div class="container">
        <div class="columns">
          <nav class="column is-one-quarter">
            <b-menu>
              <b-menu-list label="Categories">
                <b-menu-item label="All" :active="category === undefined" @click="setCategory(undefined)" />
                <b-menu-item label="Games" :active="category === 'games'" @click="setCategory('games')" />
                <b-menu-item label="Ludum Dare" :active="category === 'ludum-dare'" @click="setCategory('ludum-dare')" />
                <b-menu-item label="Minecraft" :active="category === 'minecraft'" @click="setCategory('minecraft')" />
                <b-menu-item label="Uni" :active="category === 'university'" @click="setCategory('university')" />
              </b-menu-list>
              <b-menu-list label="Technologies">
                <b-menu-item label="C++" :active="category === 'cpp'" @click="setCategory('cpp')" />
                <b-menu-item label="Java" :active="category === 'java'" @click="setCategory('java')" />
                <b-menu-item label="Web" :active="category === 'web'" @click="setCategory('web')" />
              </b-menu-list>
            </b-menu>
          </nav>

          <div class="column">
            <project-tile-list :projects="projects" :category="category" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectTileList from '~/components/ProjectTileList'

export default {
  async asyncData ({ $content, app, query, error }) {
    const dir = `/projects`
    const projects = await $content({ deep: true }).where({ dir }).fetch()

    return {
      projects
    }
  },
  data () {
    return {
      category: this.$route.query.category
    }
  },
  methods: {
    setCategory (category) {
      this.category = category
      this.$router.replace({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          category
        }
      })
    }
  },
  components: {
    ProjectTileList
  }
}
</script>
