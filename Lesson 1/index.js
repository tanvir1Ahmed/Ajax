function loadData(myCallBackF)
{
    //creating a new request
    const xhr=new XMLHttpRequest();

    //what to do when the response will arrive
    xhr.onload=function(){
        myCallBackF(this);
    }

    //request prepare
    xhr.open("GET", "./data.txt")

    //send request
    xhr.send();
}

function myCallBack1(xhr){
    const placeHolder=document.getElementById('demo');
    placeHolder.innerHTML=xhr.responseText;

}

function myCallBack2(xhr){
    const placeHolder=document.getElementById('demo2');
    placeHolder.innerHTML=xhr.responseText;

}