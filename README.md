# API-GéoDécouverte 

## Description
**GéoDécouverte** est une application multiplateforme développée dans le cadre du cours _Atelier technique_ dans la licence de développement logiciel - DAM (Développement d'Application Mobile) à l'IUT Sophia Antipolis. Cette application permet aux utilisateurs de découvrir des lieux grâce à une carte interactive, tout en leur offrant la possibilité de filtrer les résultats par ville, pays, ou rayon autour de leur position géographique actuelle.

**API-GéoDécouverte** a été conçue pour gérer et récupérer des images selon différents critères (ville, pays), et est hébergée sur Vercel.

## Endpoints
### GET
- **`/images`** : Récupération de toutes les images.
- **`/image/<FileName.png>`** : Récupération et affichage d'une image spécifique à partir de son nom de fichier.
- **`/images/city_filter`** : Récupération de toutes les images filtrées par ville.
  - **Paramètres** : `req.body.city` (nom de la ville à filtrer).
- **`/images/country_filter`** : Récupération de toutes les images filtrées par pays.
  - **Paramètres** : `req.body.country` (nom du pays à filtrer).
### POST
- **`/images/add`** : Ajout d'une nouvelle image à la base de données.
  - **Paramètres** : `req.body.image` (image à ajouter, incluant ses métadonnées).

## Format des données
Les données échangées avec l'API sont structurées sous le format suivant :

```json
"Images": 
    [
      {
        "id": < id >,
        "city": < city >,
        "country": < country >,
        "filename" : < filename >,
        "geometry" : {
            "lat" : < latitude >,
            "lng" : < longitude >,
        }
        "url": < url >,
        "date" : < date >
      },
      {...}
  ]
```

## Hébergement
L'API à été déployée sur Vercel, offrant une haute disponibilité et une scalabilité adaptée pour ce projet. Toutefois, celle-ci à été désactivée après la dernière revue de projet.

## Lien vers l'Application mobile
Vous pouvez accéder au dépôt du frontend ici :  
[https://github.com/Oceane4973/GeoDecouverte](https://github.com/Oceane4973/GeoDecouverte)

## Gestion de projet
Le projet a été planifié et géré via un fichier Google Sheets, incluant la répartition des tâches, la couverture des tâches, ainsi que le chiffrage. Vous pouvez consulter ces informations via le lien suivant :  
[https://docs.google.com/spreadsheets/d/1aq_uPRx9mTyllAWVlimuC0lG3B5flH3hkVxBObYr9NU/edit?gid=0#gid=0](https://docs.google.com/spreadsheets/d/1aq_uPRx9mTyllAWVlimuC0lG3B5flH3hkVxBObYr9NU/edit?gid=0#gid=0)

## Collaborateurs
Ce projet a été réalisé par :
- **Valentin Montel**
- **Lothaire Nobili**
- **Océane Monges**

## Conclusion
L'application **GéoDécouverte** est fonctionnelle sur la majorité des appareils (API 28+). Bien que le projet soit principalement complété, certaines fonctionnalités peuvent encore être améliorées, notamment les notifications. Le respect des utilisateurs et la gestion des permissions sont au cœur de cette application.
