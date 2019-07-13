const getAsy  = async (url) => {
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(url)
        },200)
    })
}
export const config = {
    address : getAsy('address')
}

