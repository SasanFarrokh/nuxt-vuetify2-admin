<i18n>
{
  "en": {
    "search": "Search",
    "login": "Login",
    "logout": "Logout",
    "profile": "Profile"
  },
  "fa": {
    "search": "جست و جو",
    "login": "ورود",
    "logout": "خروج",
    "profile": "پروفایل"
  }
}
</i18n>

<template>
  <v-app-bar
    color="primary"
    fixed
    dark
    app
  >
    <v-app-bar-nav-icon class="ms-2" @click="toggleDrawer()" />
    <v-text-field
      flat
      solo-inverted
      prepend-icon="mdi-magnify"
      :label="$t('search')"
      class="hidden-sm-and-down mx-5"
      hide-details
    />
    <v-spacer />
    <v-btn class="mx-2" icon text @click="handleFullScreen()">
      <v-icon>mdi-fullscreen</v-icon>
    </v-btn>

    <v-menu :left="!$vuetify.rtl" offset-y :nudge-right="$vuetify.rtl ? -10 : 10" :nudge-bottom="5" transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn class="mx-2" icon large text v-on="on">
          <v-avatar size="30px">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-list class="pa-0">
        <v-list-item @click="() => {}">
          <v-list-item-action><v-icon>mdi-account</v-icon></v-list-item-action>
          <v-list-item-content>{{ $t('profile') }}</v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-action><v-icon>mdi-logout</v-icon></v-list-item-action>
          <v-list-item-content>{{ $t('logout') }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu :left="!$vuetify.rtl" offset-y :nudge-right="$vuetify.rtl ? -10 : 10" :nudge-bottom="5" transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn class="mx-2" icon large text v-on="on">
          <v-avatar size="30px">
            <v-icon>mdi-settings</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-list class="pa-0">
        <v-list-item rel="noopener" @click="switchLanguage">
          <v-list-item-action>
            <v-icon>mdi-translate</v-icon>
          </v-list-item-action>
          <v-list-item-content>Switch Language</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import Util from '@/util'

export default {
  name: 'AppToolbar',
  data () {
    return {
      items: [
        {
          icon: 'mdi-account',
          href: '#',
          title: 'Profile',
          click: (e) => {}
        },
        {
          icon: 'mdi-settings',
          href: '#',
          title: 'Settings',
          click: (e) => {}
        },
        {
          icon: 'mdi-fullscreen-exit',
          href: '#',
          title: 'Logout',
          click: (e) => {

          }
        }
      ]
    }
  },
  methods: {
    toggleDrawer () {
      this.$store.commit('toggleDrawer')
    },
    handleFullScreen () {
      Util.toggleFullScreen()
    },
    switchLanguage () {
      const { locale } = this.$i18n
      const newLocale = locale === 'en' ? 'fa' : 'en'
      const isRtl = newLocale === 'fa'

      this.$root.$i18n.setLocaleCookie(newLocale)
      this.$i18n.locale = newLocale
      this.$vuetify.lang.current = newLocale
      this.$vuetify.rtl = isRtl

      const newPath = this.switchLocalePath(newLocale)
      this.$router.push(newPath || '/en')
    },

    logout () {
      this.$router.push(this.localePath('login'))
    }
  }
}
</script>
