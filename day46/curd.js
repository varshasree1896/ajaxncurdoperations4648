let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function serverCall(url, methodType,data=null) {

    // let result = new xmlHttpRequest();
    const xhr = new xmlHttpRequest();
    xhr.onreadystatechange = function () {
        // console.log(result)
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status==201) {
                console.log(result.responseText)
            } else {
                console.log("there is some error")
                console.log(xhr.status)
                console.log(xhr.readyState)
            }
        }
    }
    xhr.open(methodType, url,data);
    if(data!=null){
        xhr.send(JSON.stringify(data));
    }else{
    xhr.send()

    }
}
//fetching data from server
// let url = "http://localhost:3000/employeeata";
// let methodType = 'GET'
// serverCall(url, methodType);

let url = "http://localhost:3000/employeeData";
methodType = "POST"

// create a JSON object
const params = {
"name": "Shubham",
"age": 22,
"salary": 12352,
};

serverCall(url,methodType,params)


// methodType ="POST"
// let data = {
//     "name": "Ajay",
//     "age": 25,
//     "salary" : 123
// };

// serverCall(url,methodType,data)