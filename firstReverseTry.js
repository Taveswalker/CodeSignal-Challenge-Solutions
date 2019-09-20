firstReverseTry = a =>  {
    [a[0],a[a.length-1]]=[a[a.length-1],a[0]] //[Array[a],Array[b]]=[Array[b],Array[a]] Swaps those values
    return a.filter(n=>n)
}

