<template>
  <div class="project-tile-list">
    <div class="columns is-multiline">
      <div class="column is-one-third"
        v-for="project in filteredProjects"
        :key="project.slug"
      >
        <router-link
          class="box project-tile"
          :to="project.path">
          <p v-if="project.image">
            <img
              :src="require(`~/assets/images/${project.image}`)"
              :alt="project.title"
              style="width: 100%; border-radius: 4px;" />
          </p>
          <p v-if="project.context" class="has-text-grey-light section-title">{{ project.context }}</p>
          <p class="title section-title is-size-4">{{ project.title }}</p>
          <p class="subtitle is-size-6">{{ project.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: false
    }
  },
  computed: {
    projectColumns() {
      const columns = [[], [], []];

      this.projects
        .filter(project => this.category === undefined || project.categories.includes(this.category))
        .forEach((project, index) => {
          columns[index % 3].push(project)
        })

      return columns;
    },
    filteredProjects() {
      return this.projects
        .filter(project => this.category === undefined || project.categories.includes(this.category))
    }
  }
}
</script>

<style scoped>
.project-tile-list {
  min-height: 60vh;
}

.project-tile {
  height: 100%;
}
</style>
