firstReverseTry = a =>  {
    [a[0],a[a.length-1]]=[a[a.length-1],a[0]] 
    return a.filter(n=>n)
}

