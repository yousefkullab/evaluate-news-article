const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

function checkUrlFunc(inputText) {
    console.log("::: Running urlChecker :::", inputText);
    
    if (urlPattern.test(inputText)) {
        alert("Valid URL");
    } else {
        alert("Invalid URL");
    }
}

export { checkUrlFunc };

