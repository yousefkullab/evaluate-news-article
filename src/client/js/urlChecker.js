function checkUrlFunc(inputText) {
    console.log("::: Running urlChecker :::", inputText);
    
    // const urlPattern = "";
    
    if (urlPattern.test(inputText)) {
        alert("Valid URL");
    } else {
        alert("Invalid URL");
    }
}

export { checkUrlFunc };

