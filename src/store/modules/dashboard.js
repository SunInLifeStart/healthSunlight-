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
  SET_EVENTS,
  SET_FETCHING_HEADLINES,
  SET_FETCHING_NEWS,
  SET_FETCHING_EVENTS
} from '../../constants/dashboard'

const dashboard = {
  state: {
    headlines: [],
    news: [],
    events: [],
    isFetchingHeadlines: false,
    isFetchingNews: false,
    isFetchingEvents: false
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
    },
    [SET_FETCHING_HEADLINES](state, isFetching) {
      state.isFetchingHeadlines = isFetching
    },
    [SET_FETCHING_NEWS](state, isFetching) {
      state.isFetchingNews = isFetching
    },
    [SET_FETCHING_EVENTS](state, isFetching) {
      state.isFetchingEvents = isFetching
    }
  },

  actions: {
    GetHeadlines({
      commit
    }) {
      commit(SET_FETCHING_HEADLINES, true)
      return getHeadlines().then(res => {
        commit(SET_HEADLINES, res.list)
        commit(SET_FETCHING_HEADLINES, false)
      })
    },
    GetNews({
      commit
    }) {
      commit(SET_FETCHING_NEWS, true)
      return getNews().then(res => {
        commit(SET_NEWS, res.list)
        commit(SET_FETCHING_NEWS, false)
      })
    },
    GetEvents({
      commit
    }) {
      commit(SET_FETCHING_EVENTS, true)
      return getEvents().then(res => {
        commit(SET_EVENTS, res.list)
        commit(SET_FETCHING_EVENTS, false)
      })
    }
  }
}

export default dashboard
