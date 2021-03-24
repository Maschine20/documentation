# ESPHome

![Basic configuration](./img/esphome.png)

[![NPM version](http://img.shields.io/npm/v/iobroker.esphome.svg)](https://www.npmjs.com/package/iobroker.esphome)
[![Downloads](https://img.shields.io/npm/dm/iobroker.esphome.svg)](https://www.npmjs.com/package/iobroker.esphome)
![Number of Installations (latest)](http://iobroker.live/badges/esphome-installed.svg)
![Number of Installations (stable)](http://iobroker.live/badges/esphome-stable.svg)
[![Dependency Status](https://img.shields.io/david/iobroker-community-adapters/iobroker.esphome.svg)](https://david-dm.org/iobroker-community-adapters/iobroker.esphome)
[![Known Vulnerabilities](https://snyk.io/test/github/iobroker-community-adapters/ioBroker.esphome/badge.svg)](https://snyk.io/test/github/iobroker-community-adapters/ioBroker.esphome)

[![NPM](https://nodei.co/npm/iobroker.esphome.png?downloads=true)](https://nodei.co/npm/iobroker.esphome/)

**Tests:** ![Test and Release](https://github.com/iobroker-community-adapters/ioBroker.esphome/workflows/Test%20and%20Release/badge.svg)

Control your ESP8266 / ESP32 with simple but powerful configuration files created and managed by ESPHome.
The adapter connects to devices managed by ESPHome via the native API and ensures that all data is synchronized with every change

This adapter uses the [esphome-native-api] (https://github.com/Nafaya/esphome-native-api#readme) with all credits to @Nafaya, thanks!

## Prerequisites

You should be familiar how to use ESPHome and have a devices/sensor configured.  
Please ensure the API is activated as the adapter will interact by ESPHome native API, you can define a password if needed
[See ESPHome API refference](https://esphome.io/components/api.html?highlight=api)
