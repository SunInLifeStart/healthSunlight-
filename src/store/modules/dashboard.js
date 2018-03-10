/**
 * 工作台store
 */
import {
  getHeadlines,
  getNews,
  getEvents
} from 'api/dashboard'

import {
  SET_HEADLINES,
  SET_NEWS,
  SET_EVENTS
} from '../../constants/dashboard'

const $dashboard = {
  state: {
    headlines: [],
    news: [],
    events: []
  },

  mutations: {
    [SET_HEADLINES](state, data) {
      state.headlines = data
    },
    [SET_NEWS](state, data) {
      state.news = data
    },
    [SET_EVENTS](state, data) {
      state.events = data
    }
  },

  actions: {
    GetHeadlines({
      commit
    }) {
      return getHeadlines().then(res => {
        commit(SET_HEADLINES, res.list)
      })
    },
    GetNews({
      commit
    }) {
      return getNews().then(res => {
        commit(SET_NEWS, res.list)
      })
    },
    GetEvents({
      commit
    }) {
      return getEvents().then(res => {
        commit(SET_EVENTS, res.list)
      })
    }
  }
}

export default $dashboard
