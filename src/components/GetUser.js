import React, { Component } from 'react'
import {connect} from 'react-redux'

 class GetUser extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.ctr}</h1>
                <button onClick={this.props.onAdd}>Add 1</button>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        ctr:state.first.count
    }
}
const mapDispatchToProps =dispatch =>{
    return{
        onAdd:()=>dispatch({type:'INCREMENT'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GetUser)