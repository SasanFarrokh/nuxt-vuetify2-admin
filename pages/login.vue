<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <div class="background primary" />
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-form @submit.prevent="login">
              <v-card class="elevation-4 pa-3">
                <v-card-text>
                  <div class="layout column align-center">
                    <img src="../static/logo.svg" alt="Vue Material Admin" width="120" height="120">
                    <h1 class="flex my-4 primary--text">
                      {{ $t('app.title') }}
                    </h1>
                  </div>
                  <v-text-field v-model="email" append-icon="mdi-account" name="login" label="Email" type="text" />
                  <v-text-field
                    id="password"
                    v-model="password"
                    append-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-btn block color="primary" :loading="loading" type="submit">
                    Login
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {

  layout: 'empty',

  data () {
    return {
      email: null,
      password: null,

      loading: false
    }
  },

  methods: {
    login () {
      this.loading = true
      setTimeout(() => {
        this.$router.push(this.localePath('index'))
        this.loading = false
      }, 1000)
    }
  }

}
</script>

<style lang="scss" scoped>
.background {
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 3px 12px rgba(black, 0.24);
}
</style>
