# Evaluate a News Article with Natural Language Processing
The goal of this project is to provide a tool that analyzes the sentiment and other language-based attributes of a news article using the Meaning Cloud API's Natural Language Processing capabilities. It bundles the required JavaScript files using Webpack and utilizes an Express server to serve the application.

## Installation

1. Clone the repository: `git clone https://github.com/yousefkullab/evaluate-news-article.git`
2. Navigate to the project directory: `cd evaluate-news-article`
3. Install the project dependencies: `npm install`

## Usage

- build the distribution files for development and production `npm run bulid-dev` or `npm run build-prod` 
- Start the development server: `npm run start`
- Open your web browser and navigate to [http://localhost:8081](http://localhost:8081) to access the application.
- Enter the URL of the news article you want to evaluate in the provided form.
- Submit the form to see the analysis results, including sentiment and other language-based attributes of the article.


## Dependencies

This project uses the following main dependencies:


- [Express](https://expressjs.com): Web server for handling requests.
- [Meaning Cloud API](https://www.meaningcloud.com/developer/sentiment-analysis): Provides Natural Language Processing analysis.
- [Webpack](https://webpack.js.org): Bundles JavaScript and other assets for deployment.
- [Jest](https://jestjs.io): Testing framework for unit testing.

## Project Structure

The project is structured as follows:

- src/client/index.js: Entry point for the client-side JavaScript.
- src/client/js/urlChecker.js: Contains the logic for checking the validity of the entered URL.
- src/client/js/formHandler.js: Manages the form submission and API request.
- src/client/views: Contains the HTML templates for the application.
- src/client/styles: Holds the CSS styles for the application.
- src/server/index.js: Entry point for the Express server.

## API Key

To use the [Meaning Cloud API](https://www.meaningcloud.com/developer/sentiment-analysis), you need to sign up for an API key. Create `.env` file and add this line `API_KEY = "Your_Api_Key_From_Meaning_Cloud_Api"`

## License

© Yousef Kullab
