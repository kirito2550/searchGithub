// 用于创建vuex中最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'
// 准备actions——用于响应组件中的动作
const actions = {}
// 准备mutations——用于操作数据
const mutations = {}
// 准备state——用户储存数据
const state = {}

Vue.use(Vuex)

const store = new Vuex.Store({
    actions:actions,
    mutations,
    state,
})

export default store 