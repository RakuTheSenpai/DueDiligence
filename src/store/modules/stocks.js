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
        axios.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&token='+process.env.VUE_APP_FINNHUB).then(
                res=> {
                    res.data.forEach(ticker => {
                        ticker.price = 0
                        ticker.close_price = 0
                    })
                    commit('setTickers', res.data)
                }
            ).catch(
                err=>console.log(err)
            )
    },
    addToPortfolio({commit}, stock){
        stock.shares = 1
        let portfolio = state.portfolio
        portfolio = [...portfolio, stock]
        commit('setPortfolio', portfolio)
    },
    removeFromPortfolio({commit}, stock){
        let portfolio = state.portfolio
        portfolio = portfolio.filter(ticker => ticker.symbol !== stock.symbol)
        commit('setPortfolio', portfolio)
    },
    quotePortfolio({commit}){
        const promises = []
        state.portfolio.forEach(stock=>promises.push(
            axios.get('https://finnhub.io/api/v1/quote?symbol='+stock.symbol+'&token='+process.env.VUE_APP_FINNHUB).then(
                    res => {
                        return {stock, data:res.data}
                    }
            )))
        let portfolio = []
        Promise.all(promises).then(
            res=>{
                res.forEach(value=>{
                    let stock = value.stock
                    let data = value.data
                    stock.price = data.c
                    stock.close_price = data.pc
                    portfolio.push(stock)
                })
                commit('setPortfolio', portfolio)
            }
        )
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