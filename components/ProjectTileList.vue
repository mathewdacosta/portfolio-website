<template>
  <div class="project-tile-list">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical is-4"
        v-for="(projectColumn, index) in projectColumns"
        :key="`project-column-${index}`">
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
    }
  }
}
</script>

<style scoped>
.project-tile-list {
  min-height: 60vh;
}
</style>
