<template>
  <div>
    <section class="hero is-small has-background-white-ter">
      <div class="hero-body">
        <div class="container">
          <nav class="title breadcrumb is-large" aria-label="breadcrumbs">
            <ul>
              <li class="is-active"><router-link to="/projects">Projects</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <nav class="column is-one-quarter">
            <b-menu>
              <b-menu-list label="Categories">
                <b-menu-item label="All" :active="category == 'all'" @click="setCategory(null)" />
                <b-menu-item label="Games" :active="category == 'games'" @click="setCategory('games')" />
                <b-menu-item label="Ludum Dare" :active="category == 'ludum-dare'" @click="setCategory('ludum-dare')" />
                <b-menu-item label="Minecraft" :active="category == 'minecraft'" @click="setCategory('minecraft')" />
                <b-menu-item label="Uni" :active="category == 'university'" @click="setCategory('university')" />
                <b-menu-item label="Web" :active="category == 'web'" @click="setCategory('web')" />
              </b-menu-list>
            </b-menu>
          </nav>

          <div class="column">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical is-4"
                v-for="(projectColumn, index) in projectColumns"
                :key="`project_column_${index}`">
                <router-link
                  class="tile is-child box"
                  v-for="project in projectColumn"
                  :key="project.slug"
                  :to="{ path: project.path }">
                    <p v-if="project.image">
                      <img
                        :src="require(`~/assets/images/${project.image}`)"
                        :alt="project.title"
                        style="width: 100%; border-radius: 4px;" />
                    </p>
                    <p v-if="project.context" class="has-text-grey-light">{{ project.context }}</p>
                    <p class="title is-size-4">{{ project.title }}</p>
                    <p class="subtitle is-size-5">{{ project.description }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  watchQuery: ['category'],
  computed: {
    category() {
      return this.$route.query.category || 'all';
    },
    projectColumns() {
      const columns = [[], [], []];

      this.projects.forEach((project, index) => {
        columns[index % 3].push(project)
      })

      return columns;
    }
  },
  methods: {
    setCategory(category) {
      this.$router.push({
        path: '/projects',
        query: {
          ...this.$route.query,
          category
        }
      })
    }
  },
  async asyncData ({ $content, app, query, error }) {
    const dir = `/projects`
    const { category } = query;
    const filters = {
      dir,
      categories: category ? { $contains: category } : undefined
    };
    const projects = await $content({ deep: true }).where(filters).fetch()

    return {
      projects
    }
  }
}
</script>