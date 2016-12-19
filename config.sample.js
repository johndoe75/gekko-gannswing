// Everything is explained here:
// @link https://github.com/askmike/gekko/blob/stable/docs/Configuring_gekko.md

var config = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          GENERAL SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.debug = false; // for additional logging / debugging

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                         WATCHING A MARKET
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Monitor the live market
config.watch = {
  // see https://github.com/askmike/gekko#supported-exchanges
  exchange: 'btcc',
  currency: 'CNY',
  asset: 'BTC'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING TRADING ADVICE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.tradingAdvisor = {
  enabled: true,
  method: 'gannswing',
  candleSize: 60,
  historySize: 25,
  adapter: 'sqlite',
  talib: {
    enabled: true,
    version: '1.0.2'
  }
}

config['gannswing'] = {
  // stop-loss
  stoploss: {
    // stop-loss enabled
    enabled: false,
    // if stop-loss enabled, shall it be trailing?
    trailing: false,
    // how many percent before we trigger stop-loss sell?
    percent: 5
  },
  vixperiod: 20,
  // trend reaction time between 50 and 250
  swingperiod: 250
}

config['debug-advice'] = {
  wait: 1,
  advice: 'long'
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING PLUGINS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Want Gekko to perform real trades on buy or sell advice?
// Enabling this will activate trades for the market being
// watched by `config.watch`.
config.trader = {
  enabled: false,
  key: '',
  secret: '',
  username: '' // your username, only required for specific exchanges.
}

config.adviceLogger = {
  enabled: true,
  muteSoft: true // disable advice printout if it's soft
}

// do you want Gekko to calculate the profit of its own advice?
config.profitSimulator = {
  enabled: true,
  // report the profit in the currency or the asset?
  reportInCurrency: true,
  // start balance, on what the current balance is compared with
  simulationBalance: {
    // these are in the unit types configured in the watcher.
    asset: 0,
    currency: 1000,
  },
  // how much fee in % does each trade cost?
  fee: 0.25,
  // how much slippage/spread should Gekko assume per trade?
  slippage: 0.05
}

config.pushover = {
  enabled: false,
  sendPushoverOnStart: false,
  muteSoft: true, // disable advice printout if it's soft
  tag: '[GEKKO]',
  key: '',
  user: ''
}

config.candleWriter = {
  adapter: 'sqlite',
  enabled: true
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING ADAPTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.adapters = {
  sqlite: {
    path: 'plugins/sqlite',

    dataDirectory: './history',
    version: 0.1,

    dependencies: [{
      module: 'sqlite3',
      version: '3.1.4'
    }]
  },
  // Postgres adapter example config (please note: requires postgres >= 9.5):
  postgresql: {
    path: 'plugins/postgresql',
    version: 0.1,
    connectionString: 'postgres://user:pass@localhost:5432', // if default port
    dependencies: [{
      module: 'pg',
      version: '6.1.0'
    }]
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING BACKTESTING
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Note that these settings are only used in backtesting mode, see here:
// @link: https://github.com/askmike/gekko/blob/stable/docs/Backtesting.md

config.backtest = {
  adapter: 'sqlite',
  daterange: 'scan',
  batchSize: 50
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                       CONFIGURING IMPORTING
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.importer = {
  daterange: {
    // NOTE: these dates are in UTC
    from: "2015-01-01 01:00:00",
  }
}

// set this to true if you understand that Gekko will
// invest according to how you configured the indicators.
// None of the advice in the output is Gekko telling you
// to take a certain position. Instead it is the result
// of running the indicators you configured automatically.
//
// In other words: Gekko automates your trading strategies,
// it doesn't advice on itself, only set to true if you truly
// understand this.
//
// Not sure? Read this first: https://github.com/askmike/gekko/issues/201
config['I understand that Gekko only automates MY OWN trading strategies'] = true;

module.exports = config;
