# SourceAnalytix

[![NPM version](http://img.shields.io/npm/v/iobroker.sourceanalytix.svg)](https://www.npmjs.com/package/iobroker.sourceanalytix)
[![Downloads](https://img.shields.io/npm/dm/iobroker.sourceanalytix.svg)](https://www.npmjs.com/package/iobroker.sourceanalytix)
![Number of Installations (latest)](http://iobroker.live/badges/sourceanalytix-installed.svg)
![Number of Installations (stable)](http://iobroker.live/badges/sourceanalytix-stable.svg)
[![Dependency Status](https://img.shields.io/david/iobroker-community-adapters/iobroker.sourceanalytix.svg)](https://david-dm.org/iobroker-community-adapters/iobroker.sourceanalytix)
[![Translation status](https://weblate.iobroker.net/widgets/adapters/-/sourceanalytix/svg-badge.svg)](https://weblate.iobroker.net/engage/adapters/?utm_source=widget)  
[![NPM](https://nodei.co/npm/iobroker.sourceanalytix.png?downloads=true)](https://nodei.co/npm/iobroker.sourceanalytix/)  
![Test and Release](https://github.com/iobroker-community-adapters/ioBroker.coronavirus-statistics/workflows/Test%20and%20Release/badge.svg)   
**This adapter uses the service [Sentry.io](https://sentry.io) to automatically report exceptions and code errors and new device schemas to me as the developer.** More details see below!

Detailed analysis of your Energy, gas and liquid consumptions
Any source (kWh, Wh, Watt, l/h or m3 )can be used for data analyses :

## Provided category's
| state | functionality | Description |
|--|--|--|
| >device<.cumulativeReading |  [accumulate values](#cumulativeReading) | Calculate cumulated values <br/> including [transformation](#valueTransformation) <br/>cumulated value can be change by following [these steps](#cumulativeReading-Reset) |
| >Device<.>Year<.>Year statistics< | [Yearly statistics](#Year-Statistics) | Store statistic information of the year <br/> >device.>thisYear<.>selected period< |
| >Device<.>Year<.>currentYear | [Current Year statistics](#Current-Period)  | Store statistic information of the current Year at within Year directory <br/> >device.>currentYear<.>selected period< |
| >Year<.>currentYear.>Consumption type < | [Consumption](#consumptionCalculation) | Root folder to store consumption data <br/> (current value - previous value). <br/> Can be consumption or delivery |
| >Year<.>currentYear.>Cost type < | [Costs](#costCalculation) | Root folder to store cost data. <br/> current value * cost + basic price <br/> Can be consumption or delivery |

All state locations are grouped by state name and separated in period and [Category](#Categories) structures. <br/>
Calculations will be automatically handled and values transformed to the proper unit  as defined in [Price-Definitions](#Price-DefinitionsPrice-Definitions).