# Exchange Rates

Users can enter an amount in Taiwan Dollars and convert it to Korean Won and Australian Dollars based on the exchange rates provided.

## Files

The repository includes the following files:

- `demo.html`: The main HTML file that displays the exchange rate conversion tool.
- `mystyle.css`: The CSS file that provides styling and visual effects for the web tool.
- `rate.xml`: The XML file that stores the exchange rate information in the Bank of Taiwan format.
- `script.js`: The JavaScript file that handles the calculations and interactions of the web tool.
- `README.md`: The file you're currently reading, which provides information about the repository.

## User Interface

The web tool provides a user-friendly interface for currency conversion. Here's a description of the user interface elements in `demo.html`:

- **Amount in Taiwan Dollars**: Users can enter the amount in Taiwan Dollars they want to convert.
- **Korean Won**: This field displays the equivalent amount in Korean Won after the conversion. It is automatically populated upon calculation.
- **Australian Dollar**: This field displays the equivalent amount in Australian Dollars after the conversion. It is also populated automatically.
- **Calculate Button**: Clicking this button triggers the calculation and updates the Korean Won and Australian Dollar fields.
- **Reset Button**: This button allows users to clear the input fields and start a new round of calculations.

The web tool incorporates responsive design and visual effects using CSS. You can refer to the `mystyle.css` file to see the specific CSS rules applied to the elements in `demo.html`.
```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Exchange Rate Conversion</title>
  <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<body>
  <h1>Exchange Rate Conversion</h1>
  <form id="conversionForm">
    <label for="amount">Amount in Taiwan Dollars:</label>
    <input type="number" id="amount" step="0.01" required>
    <br>
    <label for="wonAmount">Amount in Korean Won:</label>
    <input type="text" id="wonAmount" disabled>
    <br>
    <label for="audAmount">Amount in Australian Dollars:</label>
    <input type="text" id="audAmount" disabled>
    <br>
    <button type="button" onclick="calculate()">Calculate</button>
    <button type="button" onclick="reset()">Reset</button>
  </form>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```
Feel free to explore the code and make any necessary modifications or additions to customize the tool according to your requirements.

