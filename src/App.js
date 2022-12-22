import React,{useEffect,useState} from "react";
import './App.css'


export default function App(){
const[data,setData]=useState([])
  const getData=async()=>{
  const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const result =await response.json()
  setData(result)
  console.log(result)
}
useEffect(()=>{
getData()
},[])
return (
  <div>
    <h1  style={{marginLeft:"600px"}}>Data table</h1>
    <table>
         <tr>
              <th>id</th>
              <th> companyname</th>
              <th>username</th>
              <th>email</th>
              <th>city</th>
              <th>zipcode</th>
              {/* <th>company name</th> */}
              <th>phone no</th>
          </tr>
    {
      
    data.map((item,index)=>{
      return(
          
              <tr>
              <td>{item.id}</td>
              <td>{item.company. name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
              <td>{item.address.zipcode}</td>
              {/* <td>{item.company.name}</td> */}
              <td>{item.phone}</td>

              </tr>
      )
    })
  }
   </table>
  </div>

)
}
