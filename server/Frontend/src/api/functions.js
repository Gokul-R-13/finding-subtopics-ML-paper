import axios from "axios"

let FLASK_URL = "http://127.0.0.1:5000"


let apiClass = {
    postAbst: function(my_abst){
        console.log("activating axios")
        return axios.post(FLASK_URL+"/abst_subm", {
            abstract: my_abst
        })
    },
    getRandom: function(){
        console.log("getting random")
        return axios.get(FLASK_URL+"/get_rand_abst")
    },
    getSimilars: function(my_abst){
        console.log("getting similars")
        return axios.post(FLASK_URL+"/get_similars",{
            abstract: my_abst
        })
    }
}


export { apiClass }
