import React from 'react'
import superagent from 'superagent'
import axios from 'axios'

class Profiles extends React.Component{

    componentDidMount(){
        superagent
        .get('http://localhost:3000/api/profile')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response)=>{
            if(err){
                const msg = err.message || err
                alert(msg)
                return
            }
            console.log(JSON.stringify(response.body))
        })
    }
    render(){
        return (
            <div>Profiles</div>
        )
    }
}

export default Profiles