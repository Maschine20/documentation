# Einleitung

[![NPM version](http://img.shields.io/npm/v/iobroker.sourceanalytix.svg)](https://www.npmjs.com/package/iobroker.sourceanalytix)
[![Downloads](https://img.shields.io/npm/dm/iobroker.sourceanalytix.svg)](https://www.npmjs.com/package/iobroker.sourceanalytix)
![Number of Installations (latest)](http://iobroker.live/badges/sourceanalytix-installed.svg)
![Number of Installations (stable)](http://iobroker.live/badges/sourceanalytix-stable.svg)
[![Dependency Status](https://img.shields.io/david/iobroker-community-adapters/iobroker.sourceanalytix.svg)](https://david-dm.org/iobroker-community-adapters/iobroker.sourceanalytix)
[![Translation status](https://weblate.iobroker.net/widgets/adapters/-/sourceanalytix/svg-badge.svg)](https://weblate.iobroker.net/engage/adapters/?utm_source=widget)  
[![NPM](https://nodei.co/npm/iobroker.sourceanalytix.png?downloads=true)](https://nodei.co/npm/iobroker.sourceanalytix/)  
![Test and Release](https://github.com/iobroker-community-adapters/ioBroker.coronavirus-statistics/workflows/Test%20and%20Release/badge.svg)   

** Dieser Adapter verwendet den Dienst [Sentry.io](https://sentry.io), um Ausnahmen und Codefehler sowie neue Geräteschemata automatisch an mich als Entwickler zu melden. ** weitere Details siehe unten!

Detaillierte Analyse Ihres Energie-, Gas- und Flüssigkeitsverbrauchs
Für Datenanalysen kann jede Quelle (kWh, Wh, Watt, l / h oder m3) verwendet werden

## Verfügbare Kategorien
| Datenpunkt | Funktionalität | Beschreibung |
|--|--|--|
| >device<.cumulativeReading |  [accumulate values](#cumulativeReading) | Berechnen Sie die kumulierten Werte <br/> einschließlich [Transformation](#valueTransformation) <br/> Der kumulierte Wert kann geändert werden, indem Sie [diese Schritte](#cumulativeReading-Reset) ausführen |
| >Device<.>Year<.>Year statistics< | [Yearly statistics](#Year-Statistics) | Speichern Sie statistische Informationen des Jahres <br/> >device.>thisYear<.>selected period< |
| >Device<.>Year<.>currentYear | [Current Year statistics](#Current-Period)  | Speichern Sie statistische Informationen des aktuellen Jahres im Verzeichnis "Jahr" <br/> >device.>currentYear<.>selected period< |
| >Year<.>currentYear.>Consumption type < | [Consumption](#consumptionCalculation) | Stammordner zum Speichern von Verbrauchsdaten <br/> (current value - previous value). <br/> Can be consumption or delivery |
| >Year<.>currentYear.>Cost type < | [Costs](#costCalculation) | Stammordner zum Speichern von Kostendaten <br/> current value * cost + basic price <br/> Can be consumption or delivery |

Alle Statusstandorte sind nach Statusnamen gruppiert und in Perioden- und [Kategorie](#Kategorien) -Strukturen unterteilt. <br/>
Berechnungen werden automatisch verarbeitet und die Werte in die richtige Einheit umgewandelt, wie in [Preisdefinitionen](#PreisdefinitionenPreisdefinitionen) definiert.