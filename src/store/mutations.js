import getters from './getters';

const state = {
    menuState: false,
    title: '首页',
    userInfo: '',
    loadingToggle: false
};


const mutations = {
    toggleMenuState(state) {
        state.menuState = !state.menuState;
    },
    toggleTitle(state, title){
    	state.title = title;
    },
    userInfo(state, account){
        state.userInfo = account;
    },
    loadingToggle(state, type){
         state.loadingToggle = type;
    }
};
export default {
    state,
    mutations,
    getters
};
