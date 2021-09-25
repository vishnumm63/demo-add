const inistate={
    number:1
}

const Reducer = (state=inistate,action) => {
    switch(action.type){
        
        case 'ADD':
            return{
                number:state.number+2
            }
        default:return state;
    }
}

export default Reducer
