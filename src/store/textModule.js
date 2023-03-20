import axios from "axios";
let url =
  "https://gitlab.com/api/v4/projects?access_token=glpat-fD1Q6CFWE5FBYugWD5Jh";
const actions = {
  async fetchAllProjects({ commit }) {
    const result = await axios.get(url);
    commit("SET_ALL_PROJECTS", result.data);
  },
};
const state = {
  allProjects: [],
};
const mutations = {
  SET_ALL_PROJECTS(state, value) {
    state.allProjects = value;
  },
};
const getters = {
  getAllProjects(state) {
    return state.allProjects;
  },
};

export default {
  actions,
  state,
  mutations,
  getters,
};
