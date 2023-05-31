import React from 'react'

export const MyComponent = (props) => {
    const users = props.users
    const data =users.map((user,key)=>{
       
        return(
        <>
        
        <h3 key={key}>{user.Name}</h3>
        <p key={key}>age:{user.age}</p>
        <img key={key} src={user.img} width={200} height={230} alt="imgphoto" />
        <br />
        <a key={key} href={"http://"+user.link} >{user.link}</a>
        <hr />
        </>
        )
    })
   
  return (
    <div >
     <ul style={{listStyle:'none'}}>
        <li >{data}</li>
     </ul>
   
    </div>
  )
}
