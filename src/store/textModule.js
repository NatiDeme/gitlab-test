import axios from "axios";
let url =
  "https://gitlab.com/api/v4/projects?access_token=glpat-fD1Q6CFWE5FBYugWD5Jh";
let url2 =
  "https://gitlab.com/api/v4/projects?access_token=glpat-fD1Q6CFWE5FBYugWD5Jh&sort=asc";
let url3 =
  "https://gitlab.com/api/v4/projects?access_token=glpat-fD1Q6CFWE5FBYugWD5Jh&visibility=public";
const actions = {
  async fetchAllProjects({ commit }) {
    const result = await axios.get(url);
    commit("SET_ALL_PROJECTS", result.data);
  },
  async fetchMostRecent({ commit }) {
    const result = await axios.get(url2);
    commit("SET_MOST_RECENT_PROJECTS", result.data);
  },
  async fetchPublicProjects({ commit }) {
    const result = await axios.get(url3);
    commit("SET_PUBLIC_PROJECTS", result.data);
  },
};
const state = {
  allProjects: [],
  recentProjects: [],
  publicsProjects: [],
};
const mutations = {
  SET_ALL_PROJECTS(state, value) {
    state.allProjects = value;
  },
  SET_MOST_RECENT_PROJECTS(state, value) {
    state.recentProjects = value;
  },
  SET_PUBLIC_PROJECTS(state, value) {
    state.publicsProjects = value;
  },
};
const getters = {
  getAllProjects(state) {
    return state.allProjects;
  },
  getRecentProjects(state) {
    return state.recentProjects;
  },
  getPublicProjects(state) {
    return state.publicsProjects;
  },
};

export default {
  actions,
  state,
  mutations,
  getters,
};
