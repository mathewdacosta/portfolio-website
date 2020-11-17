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
      <div class="container content">
        <p>
          TODO: listing projects as cards + filtering
        </p>
        <ul>
          <li v-for="project in projects" :key="project.slug"><router-link :to="project.path">{{ project.title }}</router-link></li>
        </ul>
      </div>
    </section>
    <section class="section">
      <div class="container content">
        <h1>Categories</h1>
        <ul>
          <li><router-link :to="{ path: '/projects', query: { category: 'minecraft' }}">Minecraft</router-link></li>
          <li><router-link :to="{ path: '/projects', query: { category: 'university' }}">Uni</router-link></li>
          <li><router-link :to="{ path: '/projects', query: { category: 'games' }}">Games</router-link></li>
          <li><router-link :to="{ path: '/projects'}">All</router-link></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  watchQuery: ['category'],
  async asyncData ({ $content, app, query, error }) {
    const dir = `/projects`
    const filters = { dir };
    const { category } = query;
    if (category) {
      filters.categories = { $contains: category };
    }
    const projects = await $content({ deep: true }).where(filters).fetch()
    console.dir(filters)
    console.dir(projects)
    console.dir(query)

    return {
      projects
    }
  }
}
</script>