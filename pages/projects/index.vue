<template>
  <div>
    <section class="hero is-small has-background-white-ter">
      <div class="hero-body">
        <div class="container">
          <nav class="title section-title breadcrumb is-large" aria-label="breadcrumbs">
            <ul>
              <li class="is-active"><router-link to="/projects">Projects</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <project-section
          to="/projects/games"
          title="Games"
          icon="gamepad-variant"
          icon-tilt
          bg-colour="primary"
          text-colour="white" />
        <project-section
          to="/projects/web"
          title="Web"
          icon="code-braces"
          bg-colour="secondary"
          text-colour="white" />
        <project-section
          to="/projects/opensource"
          title="Open Source"
          icon="git"
          bg-colour="tertiary"
          text-colour="white" />
        <project-section
          to="/projects/archive"
          title="Archive"
          icon="package-variant-closed"
          bg-colour="grey"
          text-colour="white" />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectSection from '~/components/ProjectSection'

export default {
  components: {
    ProjectSection
  }
}
</script>
