module.exports = function check(str, bracketsConfig) {
    console.log(str)
    let arr=str.split("");
    if(arr.length%2!==0)return false;
    
    let beg=['(','[','{','|'];
    let end=[')',']','}','|'];
    let st=[];
    
    for(let i=0;i<arr.length;i++)
     if(beg.indexOf(arr[i])>-1)
         st.push(arr[i])
    else if(end.indexOf(arr[i])>-1)
       if( beg.indexOf(st.pop())!==end.indexOf(arr[i])) return false;
    
    
    return true;
}
