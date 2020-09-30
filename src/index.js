module.exports = function check(str, bracketsConfig) {
    
    let arr=str.split("");
    if(arr.length%2!==0)return false;
    
    let beg=['(','[','{'];
    let end=[')',']','}'];
    
    for(let i=0;i<arr.length/2;i++)
        for(let y=0;y<beg.length;y++)
            if(arr[i]===end[y]) return false;
}
