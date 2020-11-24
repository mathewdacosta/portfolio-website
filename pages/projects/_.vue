<template>
  <div>
    <section class="hero is-small has-background-white-ter">
      <div class="hero-body">
        <div class="container">
          <nav class="title section-title breadcrumb is-large" aria-label="breadcrumbs">
            <ul>
              <li><router-link to="/projects">Projects</router-link></li>
              <li class="is-active"><a href="#" aria-current="page">{{ article.title }}</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <article class="content">
          <nuxt-content :document="article" />
        </article>
      </div>

      <br />

      <div class="container">
        <span
          class="mr-4"
          v-for="button in article.buttons"
          :key="button.text">
          <round-button
            tag="a"
            :href="button.href"
            :icon-left="button.icon"
            target="_blank" >
            {{ button.text }}
          </round-button>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, app, params, error }) {
    const path = `/projects/${params.pathMatch || 'index'}`
    const [article] = await $content({ deep: true }).where({ path }).fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Project not found' })
    }

    return {
      article
    }
  }
}
</script>
