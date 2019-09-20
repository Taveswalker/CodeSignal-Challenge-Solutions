//I wasn't happy with this answer at all but I've decided to submit and then review the shorter solutions.

sumOfPowers=(n,d) => {
    let t = 0
    for(let j = n;j>0;j--){
        for(let i = n;i>0;i--){
            if(j%Math.pow(d,i)==0){
                t+=i
                break
            }
        }
        
    }
    return t
}

