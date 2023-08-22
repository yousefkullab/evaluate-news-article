import { checkUrlFunc } from '../src/client/js/formHandler'; 

describe('handleSubmit function', () => {
it('should display analysis results in the results div', async () => {
    // Mock the necessary DOM elements or functions
    document.body.innerHTML = `
        <form id="article-form">
            <textarea id="article_text">Sample article text</textarea>
        </form>
        <div id="results"></div>
    `;

    const formText = 'https://www.example.com';
    
    // Mock the Client object and the checkUrlFunc method
    const mockClient = {
        checkUrlFunc: jest.fn()
    };
    window.Client = mockClient;

    // Trigger the submit event on the form
    const form = document.getElementById('article-form');
    form.dispatchEvent(new Event('submit'));

    // Ensure that Client.checkUrlFunc was called with the formText value
    expect(mockClient.checkUrlFunc).toHaveBeenCalledWith(formText);
    });
});

