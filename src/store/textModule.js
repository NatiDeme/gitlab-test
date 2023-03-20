import axios from "axios";

const actions = {
  async getText({ commit }, value) {
    // console.log(value);
    const result = await axios.get(`https://bible-api.com/${value}`);
    commit("SET_TEXT", result.data.text);
  },
};
const state = {
  text: "",
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
