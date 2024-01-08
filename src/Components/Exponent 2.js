function Exponents () {
    let n = 20
    let res = 1 
    let base = 2

    for(let i = 1 ; i <= n/4 ; i++){
        res=res*base
        // console.log(res)
    }
    let final = res*res*res*res;
    console.log(final)
}

export default Exponents;