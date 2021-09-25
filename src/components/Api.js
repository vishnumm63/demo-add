// import React, { Component } from 'react'

// const url=" http://localhost:3000"
// export default class Api extends Component {
//     componentDidMount()
//     {
//         fetch(`${url}/data`)
//         .then(response=>response.json())
//         .then(res=>{
//             console.log("output=",res);
//             // this.setState({
//                 // tracks:res.tracks
//             // })
//         })
//         .catch(err=>console.log(err.message));
//     }

//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
import React,{useState,useEffect} from 'react'
import axios from 'axios'
const url=" http://localhost:3000"

const Api = () => {
    const [ware,setWare]=useState([{}])

    const callApi=async()=>{
        try {
            const res=await axios.get(`${url}/data`)
            console.log(res.data);
            setWare(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        callApi()
    }, [])
    return (
        <div>
            <table>
                <tbody>
                    {
                        ware.map((item,key)=>{
                            return(
                                <tr key={key}>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default Api
