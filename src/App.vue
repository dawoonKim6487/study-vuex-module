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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["userName", "boardTit"]),
  },
};
</script>
