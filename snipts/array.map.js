let myAddr = 
[{
    name: 'ss',
    cno:909
},
{
    name: 'qq',
    cno:656
}];


let my = myAddr.map((myval) => { 

             myval['cname'] = 'yuj';
             myval['cno'] =  myval['cno'] * 20;

             return myval;
});


console.log(my)