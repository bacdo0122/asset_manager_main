export const setAccessToken = (token)=>{
    // console.log(process.env.REACT_APP_API_BASE_URL) 
    if(typeof window !== 'undefined'){
        return localStorage.setItem(String(process.env.REACT_APP_PUBLIC_ACCESS_TOKEN_KEY),token )
    }
}

export const getAccessToken =  ()=>{
  
    if(typeof window !== 'undefined'){
        return localStorage.getItem(String(process.env.REACT_APP_PUBLIC_ACCESS_TOKEN_KEY))
    }
}

export const removeAccessToken = () => {
    return localStorage.removeItem(String(process.env.REACT_APP_PUBLIC_ACCESS_TOKEN_KEY))


}