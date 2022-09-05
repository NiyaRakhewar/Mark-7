// console.log("script is working in different file");

// var username = prompt("give me username")

// var welcomeMessage = "this script works !!! "+ username;

// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/sith.json"

// outputDiv.innerText = "Niya"
// console.log(txtInput)

function getTranslateURL(text){
    return serverURL + "?" + "text=" + text
}

// console.log(outputDiv)

function errrorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server !! try again after sometime")
}

function clickEventHandler(){
    // outputDiv.innerText = "bannannanannan "+ txtInput.value;

    var innerText = txtInput.value;

    fetch(getTranslateURL(innerText))
        .then( newFunction())
        .then(json => { 
            var translateText = json.contents.translated;
            outputDiv.innerText = translateText;
            })
        .catch(errrorHandler)

    function newFunction() {
        return response => response.json();
    }
};

btnTranslate.addEventListener("click",clickEventHandler)

