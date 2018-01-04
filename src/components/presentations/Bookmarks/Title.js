import React from 'react'

class Title extends React.Component{
    render(){
        return (
            <h3 id="bookmark-section-title">{this.props.title}</h3>
        )
    }
}

export default Title