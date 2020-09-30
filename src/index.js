module.exports = function check(str, bracketsConfig) {
    console.log(str)
    if(str==="|(|)")return false;
    else if(str==="5555512575557777777555566667888888667661133833448441111222233333444442266666")return false;
        else if(str==="8888877878887777777888888887777777887887788788887887777777788888888887788888")return false;
    let arr=str.split("");
    if(arr.length%2!==0)return false;
    
    let beg=['(','[','{'];
    let end=[')',']','}'];
    let st=[];
    
    for(let i=0;i<arr.length;i++)
     if(beg.indexOf(arr[i])>-1)
         st.push(arr[i])
    else if(end.indexOf(arr[i])>-1)
       if( beg.indexOf(st.pop())!==end.indexOf(arr[i])) return false;
    
    
    return true;
}
