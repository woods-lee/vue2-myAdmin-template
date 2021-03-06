const initialStates = () => ({
  sideBar: true,
  sideBarOnHover: false,
  test: {
    deep1: "",
    deep2: "",
    deep3: "",
  },
  test2: "2",
})

export default {
  namespaced: true,
  state: initialStates,
  getters: {
    getSideBar: (state) => state.sideBar,
    getSideBarOnHover: (state) => state.sideBarOnHover,
    getTest: (state) => state.test,
    getTest2: (state) => state.test2,
  },
  mutations: {
    resetState(state) {
      const initial = initialStates()
      Object.keys(initial).forEach((key) => {
        state[key] = initial[key]
      })
    },
    // state 반응형으로 업데이트 (반응형 속성 o)
    setState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key]
      })
    },
    // state 정적값으로만 업데이트 (반응형 속성 x)
    freezeState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = Object.freeze(payload[key])
      })
    },
  },
  actions: {
    setState({ commit }, payload) {
      commit("setState", payload)
    },
    freezeState({ commit }, payload) {
      commit("freezeState", payload)
    },
  },
}
