<template>
  <v-layout class="align-center layout px-4 pt-4 app--page-header">
    <v-icon>mdi-home</v-icon>
    <v-breadcrumbs divider="-" :items="breadcrumbs" />
    <v-spacer />
    <div class="page-header-right">
      <v-btn icon>
        <v-icon class="text--secondary">
          mdi-refresh
        </v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
import menu from '@/util/menu'

export default {
  computed: {
    breadcrumbs () {
      const breadcrumbs = []
      menu.call(this).forEach((item) => {
        if (item.items) {
          const child = item.items.find((i) => {
            return i.href === this.$route.path
          })
          if (child) {
            breadcrumbs.push({ text: this.$t(item.title) })
            breadcrumbs.push({ text: this.$t(child.title), disabled: true })
          }
        } else if (item.href === this.$route.path) {
          breadcrumbs.push({ text: this.$t(item.title) })
        }
      })
      return breadcrumbs
    }
  }
}
</script>
