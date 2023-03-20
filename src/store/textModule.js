import axios from "axios";
let url =
  "https://gitlab.com/api/v4/projects?access_token=glpat-fD1Q6CFWE5FBYugWD5Jh";
const actions = {
  async getText({ commit }) {
    const result = await axios.get(url);
    console.log(result.data);
    commit("SET_TEXT", result.data);
  },
};
const state = {
  text: [],
};
const mutations = {
  SET_TEXT(state, value) {
    state.text = value;
  },
};
const getters = {
  text(state) {
    return state.text;
  },
};

export default {
  actions,
  state,
  mutations,
  getters,
};
