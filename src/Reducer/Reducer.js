const inistate={
    count:0
}

const Reducer = (state=inistate,action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+1
            }
        
        default:return state;
    }
}

export default Reducer
