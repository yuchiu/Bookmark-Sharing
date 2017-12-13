import superagent from 'superagent'

const URL = "http://localhost:3000/";
export default{

    get: (endpoint, params, callback) => {
        
        superagent
        .get(URL+endpoint)
        .query(params)
        .set('Accept', 'application/json')
        .end((err, response)=>{
            if(err){
                callback(err, null)
                return
            }
            callback(null, response.body)
        })
    }
}