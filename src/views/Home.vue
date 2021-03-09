<template>
  <div>
    <h1>Your portfolio</h1>
    <div v-if="getPortfolio.length > 0">
      <StockItem v-for="stock in getPortfolio" :key="stock.symbol" v-bind:stock ="stock"/>
      <h1>Here's how your stock has performed lately</h1>
      <line-chart v-if="loaded" :chart-data= 'line' :options="options"/>
      <h1>The latest talk on your portfolio</h1>
      <NewsBlock v-for="(piece, index) in filtered" :key="index" v-bind:news="piece"/>
    </div>
    <p v-if="getPortfolio.length == 0">You have no stocks in your portfolio yet!</p>
  </div> 
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import StockItem from '../components/StockItem'
import NewsBlock from '../components/NewsBlock'
import LineChart from '../components/LineChart'
import axios from 'axios'
export default {
  name: 'Home',
  computed: mapGetters(['getPortfolio']),
  data(){
    return {
      news: [],
      filtered: [],
      line: null,
      loaded: false,
      dates:'',
      options: {
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
        }
      }
    }
  },
  methods: {
    ...mapActions(['quotePortfolio']),
    dateToString(date){
        //This is how finnhub styles their dates
        let day = String(date.getDate()).padStart(2,'0')
        let month = String(date.getMonth() + 1).padStart(2, '0')
        return date.getFullYear() + '-' + month + '-' + day
    },
    getDates(){
      let date = new Date()
      let today = this.dateToString(date)
      let m_date = new Date()
      m_date.setDate(m_date.getDate() - 7)
      let week_ago = this.dateToString(m_date) 
      let today_unix = date.getTime()
      let week_ago_unix = m_date.getTime()
      return {today, week_ago, today_unix, week_ago_unix}
    },
    getFiltered(){
      this.news.forEach(
        stock=>{
          stock.data.slice(0, 5).forEach(
            data=>this.filtered = [...this.filtered, data]
          )
        }
      )
    },
    getNews(){
      let promises = []
      this.getPortfolio.forEach(stock => {
        promises.push(axios.get('https://finnhub.io/api/v1/company-news?symbol='+stock.symbol+'&from='+this.dates.week_ago+'&to='+this.dates.today+'&token='+process.env.VUE_APP_FINNHUB))
      });
      Promise.all(promises).then(
        res=> {
          this.news = res
        } 
      ).then(
          () => this.getFiltered()
      )
    },
    getStockCandles(){
      let promises = []
      this.getPortfolio.forEach(stock => {
        promises.push(axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+stock.symbol+'&apikey='+process.env.VUE_APP_ALPHA).then(res => {return {res, symbol:stock.symbol}}))
      });
      this.line = {
        labels:[],
        datasets:[]
      }
      Promise.all(promises).then(
        res=> {
          let lbls = res[0].res.data['Time Series (Daily)']
          Object.keys(lbls).forEach(date=>{
            this.line.labels.push(date)
          })
          res.forEach(stock=>{
            let subset = {
              label:stock.symbol,
              backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16),
              fillOpacity: .3, 
              data: []
            } 
            let data = stock.res.data['Time Series (Daily)']
            Object.keys(data).forEach(date=>{
              subset.data.push(data[date]['4. close'])
            })
            this.line.datasets.push(subset)
          })
        } 
      ).then(
        ()=> this.loaded = true
      )
    }
  },
  components: {
    StockItem,
    NewsBlock,
    LineChart
  },
  created(){
    this.quotePortfolio()
    this.dates = this.getDates()
    this.getNews()
    if(this.getPortfolio.length !==0) this.getStockCandles()
  }
}
</script>

<style scoped>
.stock-container{
  display: flex;
  flex-direction: colum;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>