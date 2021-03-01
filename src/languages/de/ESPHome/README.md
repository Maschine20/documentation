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

Steuern Sie Ihren ESP8266 / ESP32 mit einfachen, aber leistungsstarken Konfigurationsdateien, die von ESPHome erstellt und verwaltet werden.
Der Adapter stellt über die native API eine Verbindung zu von ESPHome verwalteten Geräten her und stellt sicher, dass alle Daten bei jeder Änderung synchronisiert werden

Dieser Adapter verwendet die [esphome-native-api](https://github.com/Nafaya/esphome-native-api#readme) mit allen Credits für @Nafaya, danke!

## Voraussetzungen

Sie sollten mit der Verwendung von ESPHome vertraut sein und ein Gerät / einen Sensor konfiguriert haben.
Stellen Sie sicher, dass die API aktiviert ist, da der Adapter über die native ESPHome-API interagiert. Sie können bei Bedarf ein Kennwort definieren
[Siehe Referenz zur ESPHome-API](https://esphome.io/components/api.html?highlight=api)