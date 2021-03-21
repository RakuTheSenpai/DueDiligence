<template>
    <div class="container">
        <div class="header">
            <a :href="company_design.weburl" class="img-link"><img :src="this.company_design.logo !== ''?this.company_design.logo:require('@/assets/company.png')"></a>
            <div class="company-header">
                <h1>{{company_design.name}} | {{company_design.ticker}} </h1>
                <h3>Industry: {{company_design.finnhubIndustry}}</h3>
            </div>
        </div>
        <p class="description">{{description}}</p>
        <div class="table">
            <div class="table-entry" v-for="(key, index) in company_info" :key="index">
                <h3> {{index}} </h3>
                <h3> {{key}} </h3>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Company',
    props: ['id'],
    data(){
        return {
            company_design:{},
            company_info: {},
            description: ''
        }
    },
    methods:{
        fetchCompanyDesign(){
           axios.get('https://finnhub.io/api/v1/stock/profile2?symbol='+ this.id +'&token=' + process.env.VUE_APP_FINNHUB).then(
                res => {
                    this.company_design = res.data
                    console.log(res)
                }
           )
        },
        fetchCompanyInfo(){
            axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol='+this.id+'&apikey=' + process.env.VUE_APP_ALPHA).then(
                res => {
                    this.description = res.data.Description 
                    this.company_info = res.data
                    delete this.company_info.Description
                    delete this.company_info.Name 
                    delete this.company_info.Industry
                    delete this.company_info.Symbol
                }
            )
        }
    },
    created(){
        this.fetchCompanyDesign()
        this.fetchCompanyInfo()
    }
}
</script>

<style scoped>
.header{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px white solid;
}
.img-link{
    flex-basis: 20%;
}
.company-header{
    display: flex;
    flex-direction: column;
    flex-basis: 80%;
}
.container{
    margin-left: 10%;
    margin-right: 10%;
}
.description{
    text-align: justify;
    border-bottom: 1px white solid;
    padding: 1%;
}
.table{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.table-entry{
    flex-basis: 48%;
    background-color: rgba(0, 0, 0, 0.199);
    margin: 1%;
    display: flex;
    flex-direction: column;
}
</style>