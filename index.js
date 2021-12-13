function solution(a) {
    let count = 0
for(let i =0 ; i < a.length; i++){
    let x = a[i-1]
    if(!x){
        x = 0
    }
    let y = a[i+1]
    if(!y){
        y = 0
    }
    if(a[i] === (x + y)/2){
        count++
    }
}
return count
}

function solution(a, x) {
    let result = []
    for(let i =0; i< a.length; i++){
        if(a[i]!== x){
            result.push(a[i])
        }
    }
    return result
    }

    function solution(a) {
        let res = []
    for(let i =0; i< a.length-1; i++){
        res.push(a[i]-a[i+1])
    }
    return res
    }
