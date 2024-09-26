# Currency Converter

A simple, user-friendly web-based currency converter that allows users to convert between multiple currencies using real-time exchange rates fetched from the [ExchangeRate-API](https://www.exchangerate-api.com/).

## Features

- **Real-time exchange rates**: Fetches up-to-date currency conversion rates from the ExchangeRate-API.
- **Supports multiple currencies**: Dynamically loads currencies from the API, ensuring a wide range of supported currencies.
- **Simple and intuitive UI**: Easy-to-use interface with clean styling and responsive design.
- **Error handling**: Provides alerts for invalid inputs and network issues.
- **Loading indicator**: Shows a loading spinner while fetching exchange rates.

## Demo

![Currency Converter Demo](demo.gif)

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the page and improving the visual layout.
- **JavaScript**: For handling logic, API calls, and interaction with the DOM.
- **[ExchangeRate-API](https://www.exchangerate-api.com/)**: To fetch real-time exchange rates.

## Getting Started

Follow these steps to set up and run the currency converter on your local machine.

### Prerequisites

- A web browser (e.g., Chrome, Firefox).
- An API key from [ExchangeRate-API](https://www.exchangerate-api.com/) (Sign up for free and get an API key).

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/jai-singh5/Currency-Converter.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Currency-Converter 
   ```
3. Open the index.html file in your web browser.

## API Key Setup

To use the currency converter, you'll need to replace the placeholder API key in script.js with your own API key.

1. Open the script.js file.
2. Replace 'your-api-key-here' in the following line with your actual API key:
```javascript
const apiKey = 'your-api-key-here'; // Add your ExchangeRate-API key here
```

## Usage

1. Enter the amount you want to convert in the "Amount" field.
2. Select the currencies you wish to convert From and To from the dropdown menus.
3. Click the Convert button.
4. The converted amount will be displayed in the results section.

## API Information

ExchangeRate-API: This project uses the free version of ExchangeRate-API, which provides real-time currency data. You can sign up for an API key at ExchangeRate-API.

## Future Enhancements

- Add more styling for a responsive design across devices.
- Display historical exchange rates using charts.
- Implement user authentication to allow users to save favorite currency pairs.

## License

- This project is licensed under the MIT License - see the LICENSE file for details.