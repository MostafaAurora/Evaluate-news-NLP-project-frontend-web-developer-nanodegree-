function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('url').value
    console.log("Form Submitted... ") 
    
    const getAnalysis = async (url = "/API", articleUrl={"url1":formText}) => {
        console.log('Analyzing:', articleUrl);
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleUrl)
        });
        try {
            const newData = await response.json();
            console.log('Data received:', newData)
            document.getElementById('polarity').innerHTML = `Polarity:  : ${newData.score_tag}`;
            document.getElementById("agreement").innerHTML = `Agreement: ${newData.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${newData.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${newData.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${newData.irony}`;
            return newData;
        }
        catch (error) {
            console.log('error 3 ', error);
        }
    };
    
    Client.validateUrl(formText)
    if (Client.validateUrl(formText)!=false) {
       getAnalysis()
    }   
}

export { handleSubmit }
