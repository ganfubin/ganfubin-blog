export default {
    menuState: (state) => {
        return state.menuState;
    },
    title: (state) => {
        return state.title;
    },
    userInfo: (state) => {
        return state.userInfo;
    },
    loadingToggle: (state) =>{
    	return state.loadingToggle;
    }
}
