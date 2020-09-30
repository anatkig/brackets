module.exports = function check(str, bracketsConfig) {
    
    let arr=str.split("");
    if(arr.length%2!==0)return false;
    
    let beg=['(','[','{'];
    let end=[')',']','}'];
    
}
