import axios from 'axios'
const state = {
    tickers: [],
    portfolio: []
}
const getters = {
    getTickers: (state) => state.tickers,
    getPortfolio: (state) => state.portfolio
}

const actions = {
    async fetchTickers({commit}){
        axios.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&token='+process.env.VUE_APP_API_KEY).then(
                res=> commit('setTickers', res.data)
            ).catch(
                err=>console.log(err)
            )
    },
    addToPortfolio({commit}, stock){
        let portfolio = state.portfolio
        portfolio = [...portfolio, stock]
        commit('setPortfolio', portfolio)
    },
    removeFromPortfolio({commit}, stock){
        let portfolio = state.portfolio
        portfolio = portfolio.filter(ticker => ticker.symbol !== stock.symbol)
        commit('setPortfolio', portfolio)
    }
}

const mutations = {
    setTickers: (state, tickers) => state.tickers = tickers,
    setPortfolio: (state, portfolio) => state.portfolio = portfolio 
}

export default {
    state,
    getters,
    actions,
    mutations
}