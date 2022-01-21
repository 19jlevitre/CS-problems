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

    function get_window(a, i, window_size){
        return a.slice(i, i+window_size)
    }
    function solution(a, window_size) {
    let res = []
        for(let i = 0; i <= a.length-window_size; i++){
            const wind = get_window(a, i , window_size)
            let all_odd = true
            for(let v of wind){
            if(v % 2 ===0){
                all_odd = false
            }
            }
            res.push(all_odd)
        }
        return res
    }

    // took the GCA and got a 668
    // took the practice GCA and got a 674
    
    function solution(s) {
        for(let x of s){
            if(x !== undefined){
                x+2
                return "_"
            }else
            return "_"
        }
        }
