import getters from './getters';

const state = {
    menuState: false,
    title: '首页',
    userInfo: ''
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
    }
};
export default {
    state,
    mutations,
    getters
};
