import { handleSubmit } from '../src/client/js/formHandler';

describe('handleSubmit function', () => {
it('should fetch and display analysis results', async () => {
    // Mock the DOM structure
    document.body.innerHTML = `
        <form id="article-form">
            <textarea id="article_text">Sample article text</textarea>
        </form>
        <div id="results"></div>
    `;

    // Mock Client object and fetch function
    const mockClient = {
        checkUrlFunc: jest.fn()
    };
    window.Client = mockClient;
    global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ irony: 'some irony', subjectivity: 'some subjectivity' })
    })
    );

    // Manually trigger the submit event
    const form = document.getElementById('article-form');
    form.addEventListener('submit', handleSubmit); // Attach event listener
    form.submit(); // Trigger the form submission

    // Allow asynchronous operations to complete
    await new Promise(resolve => setTimeout(resolve, 0));

    // Check function calls and DOM changes
    expect(mockClient.checkUrlFunc).toHaveBeenCalledWith('Sample article text');

    const resultsDiv = document.getElementById('results');
    expect(resultsDiv.innerHTML).toContain('Irony: some irony');
    expect(resultsDiv.innerHTML).toContain('Subjectivity: some subjectivity');
    expect(resultsDiv.innerHTML).toContain('Text Snippet: Sample article text');
});
});

