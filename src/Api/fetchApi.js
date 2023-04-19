import axios from 'axios';

const baseUrl = "https://api.fiscaldata.treasury.gov/services/api/fiscal_service" ;
var endpoint = "/v1/accounting/od/rates_of_exchange";

const fetchUrl = (setsetter) => {
    
    axios
    .get(`https://tradestie.com/api/v1/apps/reddit`)
    .then((data)=>{
        console.log("data-->",data);
        setsetter(data.data.data);

    })

}
export {fetchUrl};