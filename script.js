function label_create (tagname, attrname,attrvalue,content)
{
    var lab_ele= document.createElement(tagname);
    lab_ele.setAttribute(attrname,attrvalue);
    lab_ele.innerHTML = content;
    return lab_ele;
}

function br_Create()
{
    var break_ele = document.createElement("br");
    return break_ele;
}

function input_create (tagname, attrname,attrvalue,attrname1,attrvalue1)
{
    var input_ele= document.createElement(tagname);
    input_ele.setAttribute(attrname,attrvalue);
    input_ele.setAttribute(attrname1,attrvalue1);
    return input_ele;
    
}

var firstname = label_create("label","for","firstname","First Name");
var middlename = label_create("label","for","middlename","Middle Name");
var lastname = label_create("label","for","lastname","Last Name");
var email = label_create("label","for","email","Email");
var password = label_create("label","for","email","Password");


var line_break1=  br_Create();
var line_break2=  br_Create();
var line_break3=  br_Create();
var line_break4=  br_Create();
var line_break5=  br_Create();

var line_break6=  br_Create();
var line_break7=  br_Create();
var line_break8=  br_Create();
var line_break9=  br_Create();
var line_break10=  br_Create();
var line_break11=  br_Create();


var firstname_input = input_create ("input","type","text","id","firstname");
var middlename_input = input_create ("input","type","text","id","middlename");
var lastname_input = input_create ("input","type","text","id","lastname");
var email_input = input_create ("input","type","email","id","email");
var password_input = input_create ("input","type","password","id","password");


document.body.append(firstname,line_break6,firstname_input,line_break1,middlename,line_break7,middlename_input,line_break2,
    lastname,line_break8,lastname_input,line_break3,email,line_break9,email_input,line_break4,password,line_break10,password_input
,line_break5,line_break11)

function GetValue()
{
 var a =document.getElementById("firstname").value;
 var b= document.getElementById("lastname").value;
var c= document.getElementById("middlename").value;
var d= document.getElementById("email").value;
var e =document.getElementById("password").value;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

}