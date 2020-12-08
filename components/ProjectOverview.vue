<template>
  <section class="columns">
    <div :class="leftClass">
      <slot :name="getSlot('left')" />
    </div>
    <div :class="rightClass">
      <slot :name="getSlot('right')" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    mainSide: {
      type: String,
      required: false,
      default: "left"
    }
  },
  computed: {
    leftClass() {
      return {
        column: true,
        "is-one-third": this.$props.mainSide == "right"
      }
    },
    rightClass() {
      return {
        column: true,
        "is-one-third": this.$props.mainSide == "left"
      }
    }
  },
  methods: {
    getSlot(side) {
      if (side == this.$props.mainSide) {
        return "main";
      } else {
        return "image";
      }
    }
  }
}
</script>

<style scoped>
div.column {
  border-radius: 4px;
}
</style>
