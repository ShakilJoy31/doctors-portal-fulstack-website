import { useState, useEffect } from 'react';
const useToken = (user) =>{
    const [token, setToken] = useState(''); 
    console.log(user); 
    useEffect(()=>{
        const email = user?.email;
        const userEmail = {email:email };
        console.log(email); 
        if(email){
            fetch(`http://localhost:5000/user/${email}`,{
                method: 'PUT', 
                headers: {'content-type':'application/json'}, 
                body: JSON.stringify(userEmail)
            })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken) 
                setToken(accessToken); 
                console.log(data); 
            })
        } 
    },[user])
    return [token]; 
}

export default useToken; 