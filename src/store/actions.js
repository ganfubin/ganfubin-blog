export default {
	toggleMenu: ({ commit }) => {
		 commit('toggleMenuState');
	},
	toggleTitle: ({ commit }, title) => {
		 commit('toggleTitle', title);
	},
	userInfo: ({ commit }, account) => {
		 commit('userInfo', account);
	},
	loadingToggle: ({ commit }, type) => {
		commit('loadingToggle', type);
	}
}
