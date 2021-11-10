<template>
  <layout-vertical>

    <router-view />

    <template #navbar="{ toggleVerticalMenuActive }">
      <navbar :toggle-vertical-menu-active="toggleVerticalMenuActive" />
    </template>

  </layout-vertical>
</template>

<script>
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    LayoutVertical,
    Navbar,
  },
  data() {
    return {
    }
  },
}
</script>
