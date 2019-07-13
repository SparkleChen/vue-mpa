const getAsy  = async (url) => {
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(url)
        },2000)
    })
}
export const config = {
    address : getAsy('address')
}

