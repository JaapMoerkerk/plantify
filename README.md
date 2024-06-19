# Bakkie Plant
Bakkie Plant is een app gemaakt om de ruil van planten binnen je community te stimuleren, met een focus op jonge inwoners uit Rotterdam.
De app biedt onder andere een non-profit marketplace ("Ruilkas"), een manier om je eigen planten op te slaan ("Je veranda") en een volledig zelfgemaakt Machine Learning model om de juiste plant voor jou te vinden ("Plantverkennert").
Dit is een groepsproject voor TLE (Tailored Learning Environment, Creative Media & Game Technologies, Hogeschool Rotterdam, jaar 2).
## Contributeurs (alfabetisch)
* [Eline Kers](https://github.com/PurpleAliennn)
* [Ryan de Man](https://github.com/Fireshotryan)
* [Jaap Moerkerk](https://www.jaapmoerkerk.nl/)
* [Dieuwe van Rijnswou](https://github.com/soapinmysight)
* [Meuk Winkelman](https://github.com/soupremeleader)
## Tech stack en details
### Beschrijving
De app gebruikt React Native in combinatie met Expo Go, Firebase voor de back end en authenticatie en een aantal kleinere gerelateerde packages. De primaire taal is JavaScript.
### Talen, frameworks, packages en betrokken tools
* JavaScript
* HTML/CSS (React embedded)

* React Native
* Expo Go
* Firebase
* KNN Prediction AI model
## Platform en doel
De app is ontwikkelt als native mobile app.
## Git Flow
Voor dit project is onderstaande Git flow aangehouden. Raadpleeg dit stappenplan voor de branch organisatie.
* Een nieuwe feature wordt uitgecheckt als nieuwe branch met de volgende notatie: **feature/story-[ID]**, met **[ID]** als het story/feature nummer uit de backlog (zie ook _Projects_ in deze repo.
* Bij afronding wordt _testing_ aangegeven in de backlog, waarna een teamgenoot de feature grondig test. Bij goedkeuring wordt de branch in de **develop** branch gemerged.
* Periodiek wordt de **develop** branch door het team in groepsverband getest op basis van de acceptatiecriteria, en bij goedkeuring gemerged in **main**.