import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    activeProfile: {},
    keeps: [],
    activeKeep: {},
    profileKeeps: [],
    vaultKeeps: [],
    profileVaults: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setActiveProfile(state, profile) {
      state.activeProfile = profile;
    },
    setKeeps(state, keeps) {
      state.keeps = keeps;
    },
    setActiveKeep(state, keep) {
      state.activeKeep = keep;
    },
    setProfileKeeps(state, keeps) {
      state.profileKeeps = keeps;
    },
    setVaultKeeps(state, vault) {
      state.vaultKeeps = vault;
    },
    setProfileVaults(state, vaults) {
      state.profileVaults = vaults;
    },
    deleteKeep(state, keep) {
      state.keeps = keep;
    },
    deleteVault(state, vault) {
      state.profileVaults = vault;
    },
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profiles");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getActiveProfile({ commit }, profileId) {
      try {
        let res = await api.get("profiles/" + profileId);
        commit("setActiveProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getKeeps({ commit }) {
      try {
        let res = await api.get("keeps");
        commit("setKeeps", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async setActiveKeep({ commit }, keep) {
      commit("setActiveKeep", keep);
    },

    async getProfileKeeps({ commit }, profileId) {
      try {
        let res = await api.get("profiles/" + profileId + "/keeps");
        commit("setProfileKeeps", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getVaultKeeps({ commit }, vaultId) {
      try {
        let res = await api.get("vaults/" + vaultId + "/keeps");
        commit("setVaultKeeps", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getProfileVaults({ commit }, profileId) {
      try {
        let res = await api.get("profiles/" + profileId + "/vaults");
        commit("setProfileVaults", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteKeep({ dispatch }, keepId) {
      try {
        await api.delete("keeps/" + keepId);
        dispatch("getKeeps");
      } catch (error) {
        console.error(error);
      }
    },

    async deleteVault({ commit }, vault) {
      try {
        await api.delete("vaults/" + vault.id);
        let res = await api.get("profiles/" + vault.creatorId + "/vaults");
        commit("setProfileVaults", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
