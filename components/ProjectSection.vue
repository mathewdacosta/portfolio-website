<template>
  <router-link
    :class="boxClass"
    v-bind="$attrs" >
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 :class="titleClass">{{ title }}</h1>
        </div>
      </div>
      <div class="level-right">
        <b-icon size="is-large" :custom-class="iconClass" :icon="icon"></b-icon>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    bgColour: {
      type: String,
      required: false,
      default: "warning"
    },
    textColour: {
      type: String,
      required: false,
      default: "white"
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: "comment-question"
    },
    iconTilt: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    boxClass() {
      return {
        box: true,
        "hover-grow": true,
        [`has-text-${this.textColour}`]: true,
        [`has-background-${this.bgColour}`]: true
      }
    },
    titleClass() {
      return {
        title: true,
        "section-title": true,
        [`has-text-${this.textColour}`]: true
      }
    },
    iconClass() {
      return this.iconTilt ? `has-text-${this.textColour} level-icon-tilt` : `has-text-${this.textColour}`;
    }
  }
}
</script>

<style>
.level-icon-tilt {
  transform: rotateZ(22deg);
}

.hover-grow {
  transition: 0.25s transform ease;
}

.hover-grow:hover {
  transform: scale(1.01);
}
</style>
