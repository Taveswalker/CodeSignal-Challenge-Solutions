rightTriangle = s => {
    s.sort((a,b)=>a-b) // Array.sort() can take a function as an argument to make is sort other than alphabetically.
    return s[0]**2+s[1]**2 == s[2]**2

}


