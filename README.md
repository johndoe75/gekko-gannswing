# gekko-gannswing

Gann Swing trade strategy plugin for [Gekko Bitcoin trade bot](https://github.com/askmike/gekko).  This strategy was mainly inspired by [Chris Moody at TradingView](https://www.tradingview.com/script/ngO3BO37-CM-Gann-Swing-High-Low-V2/) and the [Trendatron 5000](https://cryptotrader.org/strategies/peKY35zY2Z2G56rLi) by [aspiramedia](https://cryptotrader.org/aspiramedia).

**This project is donationware.  If you use this strategy with your Gekko please considere donating some Bitcoins to: 17jv1RwaX1w8Nw7kHbN6UCrR57wePaALWu**

***Important note:*** This software is not a guarantee, that you'll make profits in trading Bitcoins, Altcoins or whatever.  This is meant as a helper in observing the markets.  Choose it wisely.  This software nor I am are responsible if you lose money in trading assets!  Use at your own risk.

## Howto use

### Setup Gekko

Checkout and configure Gekko like described [here](https://github.com/askmike/gekko/blob/stable/README.md).

### Install additional required node modules

This plugin additionally requires [`talib-promise`](https://www.npmjs.com/package/talib-promise).  In your Gekko base directory install it like

```bash
npm install talib-promise
```

### Install this plugin

`cd` into `methods` directory and checkout gannswing like

```bash
wget "https://raw.githubusercontent.com/johndoe75/gekko-gannswing/master/gannswing.js"
```

Add the following section to your `config.js`:

```javascript
config['gannswing'] = {
  // stop-loss
  stoploss: {
    // enable/disable stop loss sells
    enabled: false,
    // if stop-loss is enabled, shall it be trailing?
    trailing: false,
    // how many percent before we trigger stop-loss sell?
    percent: 5
  },
  vixperiod: 20,
  // trend reaction time between 50 and 250
  swingperiod: 250
}
```

and adjust it to your needs.  For certain exchanges and pairs you need to play around with these settings and Gekko's `config.tradingAdvisor.candleSize`.  **Always test your changes in a backtest per `node gekko -b`**.

**Use this method at your own risk!  Especially if you're going to let Gekko do the trades for you!  I'm not responsible for any loss you gain.**

## Credits & License

Alexander Zschach <software@zschach.net>

### Donate

If you like this tool, find it useful, use it or if you just find it useful, that people out there writing free software for everybody to use or contribute, please show some respect for their efforts and donate.  You can donate me some Bitcoins here `17jv1RwaX1w8Nw7kHbN6UCrR57wePaALWu`.

### License

The MIT License (MIT)

Copyright (c) 2016 Alexander Zschach software@zschach.net

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------------

:wq!
