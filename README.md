<p align="center">
  <img src="https://raw.githubusercontent.com/tmiess/CryptoBase/master/cryptobase_Wordmark.png" alt="Cryptobase Logo"/>
</p>

### The Crypto-Community for the Crypto-Curious
Created entirely with React, CryptoBase is an online crypto-community for experts and novices alike. Users can discuss latest technologies and trends, learn the basics of blockchain, and interact with live price charts.

![intro](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_intro.PNG)

# Jump To

[Introduction](#introduction)

[Features](#features)
- [See](#see)
- [Talk](#talk)
- [Learn](#learn)

[Tools](#tools)

[Authors](#authors)


# Introduction
Anyone has the freedom to explore CryptoBase. The only feature that requires user authentication is CryptoChat, which we will get to later. To get started, just click [here](https://crypto-base.herokuapp.com/).

The home page of CryptoBase is very straighforward. You are prompted to either "See", "Learn", or "Talk" via the three tabs on the menu bar.

![menu](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_menu.PNG)

You can dive right in by using our real-time conversion tool on the top right.

![conversion](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_conversion.PNG)

Or you can interact with live price charts on the right side of the page.

![sidebar](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_sidebar.PNG)

- - - -

# Features

### See

Let's explore some of the features, starting with "See". Here you can interact with charts displaying end-of-day prices for some of the most popular currencies over the past month. Currently, you can choose Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and Ripple (XRP), but there will be more to come!

![see](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_chart.PNG)

*To build these charts, we followed [**Brandon Morelli's**](https://github.com/bmorelli25) (thank you, Brandon!) tutorial on how to construct a real time Bitcoin price chart using React, SVG, and the CoinDesk API. You can read about how he did it [here](https://codeburst.io/how-i-built-an-interactive-30-day-bitcoin-price-graph-with-react-and-an-api-6fe551c2ab1d).*

CoinDesk does not currently have an API for those currencies, so to build our price charts for Ethereum, Litecoin, and Ripple, we had to build our own APIs using [**Bridge**](https://getbridgeapp.co/).

### Learn

Now let's move on to "Learn". This is a simple yet comprehensive FAQs page built for users of any background. Whether you have never heard of terms like "blockchain" or simply want a refresher on some of these topics, this is your place to learn more about the world of cryptocurrency.

![faq](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_faq.PNG)

The page is user friendly, as you can easily jump to any section, no matter where you are currently located.

![faq2](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_faq2.PNG)

### Talk

The last and perhaps most important feature is CryptoChat. Here you can visit different boards in order to discuss as many topics as users can think of. In order to participate in this community, you will first need to create a username and password.

![chat](https://raw.githubusercontent.com/tmiess/CryptoBase/master/CryptoBase/Cryptobase_chat.PNG)

# Tools
- React
- React-Bootstrap (UI)
- Node
- Yarn
- CoinDesk API
- Bridge API
- Socket.IO

# Authors
Take a look at who make [contributions](https://github.com/tmiess/CryptoBase/graphs/contributors) to this project.
