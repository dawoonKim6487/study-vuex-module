import { createStore } from "vuex";
import autho from "./modules/autho"
import board from "./modules/board"

export default createStore({
  modules: {
    autho,
    board
  },
});
