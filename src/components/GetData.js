import React, { Component } from 'react'
import { connect } from 'react-redux'

class GetData extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
            <button onClick={this.props.onNum}>ADD 2</button>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        num:state.second.number
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onNum:()=>dispatch({type:'ADD'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GetData)