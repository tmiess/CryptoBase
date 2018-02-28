![logo](https://raw.githubusercontent.com/tmiess/CryptoBase/master/cryptobase_Wordmark.png)

### The Crypto-Community for the Crypto-Curious
Created entirely with React, CryptoBase is an online crypto-community for experts and novices alike. Users can discuss latest technologies and trends, learn the basics of blockchain, and interact with live price charts.

### Deployment 
[Heroku](https://crypto-base.herokuapp.com/)

![intro](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_intro.PNG)

- - - -

### Intro
Anyone has the freedom to explore CryptoBase. The only feature that requires user authentication is CryptoChat, which we will get to later.

The home page of CryptoBase is very straighforward. You are prompted to either "See", "Learn", or "Talk" via the three tabs on the menu bar.

![menu](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_menu.PNG)

You can dive right in by using our real-time conversion tool on the top right.

![conversion](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_conversion.PNG)

Or you can interact with live price charts on the right side of the page.

![sidebar](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_sidebar.PNG)

- - - -

### Features

#### See

Let's explore some of the features, starting with "See". Here you can interact with charts displaying end-of-day prices for some of the most popular currencies over the past month. Currently, you can choose Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and Ripple (XRP), but there will be more to come!

![see](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_chart.PNG)

*These charts were modeled after [**Brandon Morelli's**](https://github.com/bmorelli25) tutorial (thank you, Brandon) on how to build a real time Bitcoin price chart using React, SVG, and the CoinDesk API. You can read about how he did it [here](https://codeburst.io/how-i-built-an-interactive-30-day-bitcoin-price-graph-with-react-and-an-api-6fe551c2ab1d)*

To build our price charts for Ethereum, Litecoin, and Ripple, we had to build our own APIs using [**Bridge**](https://getbridgeapp.co/), as CoinDesk does not currently have an API for those currencies.

#### Learn

![faq](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_faq.PNG)

![faq2](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_faq2.PNG)

#### Talk

![chat](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_chat.PNG)
