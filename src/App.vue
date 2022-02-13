<template>
  <div>
    <section>
      <h2>State</h2>
      <div>userName:{{$store.state.autho.name}}</div>
      <div>tit:{{$store.state.board.tit}}</div>
    </section>
    <section>
      <h2>getters</h2>
      <div>userName:{{userName}}</div>
      <div>tit:{{boardTit}}</div>
    </section>
    <section>
      <button @click="commitName">커밋</button>
    </section>
  </div>
</template>

<script>
import store from "./store";
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters({ userName: "autho/userName", boardTit: "boardTit" }),
  },
  methods: {
    commitName() {
      store.dispatch("autho/userNamech", "dawoon1");
    },
  },
};
</script>
