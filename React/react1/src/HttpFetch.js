export  const httpPostWithHeader=(endpointurl,requestParam)=>{
    let id = localStorage.getItem("id"); 
    let token = localStorage.getItem("token"); 
    return fetch("http://localhost:8080/"+endpointurl,{
         method:"POST",
         headers:{
            "content-type":"application/json",
            "token":token,
            "id":id
         },body:JSON.stringify(requestParam)
      },)

}

export  const httpGetWithHeader=(endpointurl)=>{
    let id = localStorage.getItem("id"); 
    let token = localStorage.getItem("token"); 
    return fetch("http://localhost:8080/"+endpointurl,{
         method:"GET",
         headers:{
            "content-type":"application/json",
            "token":token,
            "id":id
         }
      })

}
export const httpPostWithoutHeader=(endpointurl,requestParam)=>{  
    return fetch("http://localhost:8080/"+endpointurl,{
         method:"POST",
         body:JSON.stringify(requestParam),
         headers:{
            "content-type":"application/json",
         
         }
      })

}