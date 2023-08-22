async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article_text').value

    Client.checkUrlFunc(formText)

    console.log("::: Form Submitted :::")
    const response = await fetch('/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ article: formText })
    });
    
    try {
        const data = await response.json();
        console.log(data);
        displayAnalysisResults(data);
    } catch (error) {
        console.log('Error processing response:', error);
    }

    function displayAnalysisResults(data) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <p>Irony: ${data.irony}</p>
            <p>Subjectivity: ${data.subjectivity}</p>
            <p>Text Snippet: ${formText}</p>
        `;
    }
}


export { handleSubmit }


