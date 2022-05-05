<template>
  <v-app id="inspire">
    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click.stop="mini = !mini" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">MEVN Stack</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main></v-main>
    <v-btn v-scroll="onScroll" bottom color="red" dark fab fixed right @click="toTop">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  props:{
    source: String,
  },
  data: () => ({
    mini: false
  }),
  methods:{
    onScroll(e){
      if(typeof window === 'undefined') return
      
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop(){
      this.$vuetify.goTo(0)
    }
  }
}
</script>