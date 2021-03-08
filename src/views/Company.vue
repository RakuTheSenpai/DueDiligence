<template>
    <div>
       <div style="display:inline-block">
            <a :href="company_design.weburl"><img :src="this.company_design.logo !== ''?this.company_design.logo:require('@/assets/logo.png')"></a>
            <h1>{{company_design.name}} | {{company_design.ticker}} </h1>
       </div>
       <h3>Industry: {{company_design.finnhubIndustry}}</h3>
        <p> {{company_info.Description}}</p>
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
            company_info: ''
        }
    },
    methods:{
        fetchCompanyDesign(){
           axios.get('https://finnhub.io/api/v1/stock/profile2?symbol='+ this.id +'&token=' + process.env.VUE_APP_FINNHUB).then(
                res => {
                    this.company_design = res.data
                }
           )
        },
        fetchCompanyInfo(){
            axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol='+this.id+'&apikey=' + process.env.VUE_APP_ALPHA).then(
                res => {
                    this.company_info = res.data
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

<style>

</style>