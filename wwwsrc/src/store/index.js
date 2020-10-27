import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";
import ns from "./NotificationService.js";

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

    async createKeep({ dispatch }, keepData) {
      try {
        let res = await api.post("keeps", keepData);
        dispatch("getKeeps");
        router.push({ name: "Profile", params: { id: res.data.creator.id } });
        ns.toast("Created!", 2000, "success");
      } catch (error) {
        console.error(error);
      }
    },

    async updateKeep({ dispatch }, keepData) {
      try {
        let res = await api.put("keeps/" + keepData.id, keepData);
        dispatch("setActiveKeep", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async createVault({ dispatch }, vaultData) {
      try {
        let res = await api.post("vaults", vaultData);
        dispatch("getProfileVaults", res.data.creator.id);
        router.push({ name: "Profile", params: { id: res.data.creator.id } });
        ns.toast("Created!", 2000, "success");
      } catch (error) {}
    },

    async createVaultKeep({ dispatch }, payload) {
      try {
        let res = await api.post("vaultkeeps/", payload);
        dispatch("getVaultKeeps", payload.vaultId);
        ns.toast("Saved!", 2000, "success");
      } catch (error) {
        console.error(error);
      }
    },

    async removeVaultKeep({ dispatch }, payload) {
      try {
        if (
          await ns.confirmAction("Are you sure you'd like to remove this keep?")
        ) {
          await api.delete("vaultkeeps/" + payload.vaultKeepId);
          dispatch("getVaultKeeps", payload.vaultId);
          ns.toast("Deleted!", 2000, "success");
        }
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
        if (
          await ns.confirmAction("Are you sure you'd like to delete this keep?")
        ) {
          await api.delete("keeps/" + keepId);
          dispatch("getKeeps");
          ns.toast("Deleted!", 2000, "success");
        }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteVault({ commit }, vault) {
      try {
        if (
          await ns.confirmAction(
            "Are you sure you'd like to delete this vault?"
          )
        ) {
          await api.delete("vaults/" + vault.id);
          let res = await api.get("profiles/" + vault.creatorId + "/vaults");
          commit("setProfileVaults", res.data);
          ns.toast("Deleted!", 2000, "success");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
