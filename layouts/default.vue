<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer" />
        <app-toolbar class="app--toolbar" />
        <v-content>
          <!-- Page Header -->
          <page-header />
          <div class="page-wrapper">
            <transition name="fade">
              <nuxt />
            </transition>
          </div>
        </v-content>
      </v-app>
    </template>
  </div>
</template>

<script>
import AppDrawer from '@/components/AppDrawer'
import AppToolbar from '@/components/AppToolbar'
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    AppDrawer,
    AppToolbar,
    PageHeader
  },

  mounted () {
    const { locale } = this.$i18n
    const isRtl = locale === 'fa'
    if (this.$route.path === '/') {
      this.$router.replace('/' + locale)
    }

    this.$vuetify.lang.current = locale
    this.$vuetify.rtl = isRtl
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
  margin-bottom: 50px;
}
.fade {
  &-enter-active, &-leave-active {
    transition: opacity 200ms ease-in-out;
  }

  &-enter, &-leave-to {
    opacity: 0;
  }
}
</style>
