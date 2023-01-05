# API_atelier_technique

API Rest utilisé dans le cadre des ateliers technique. 
L'API est hébergé sur Vercel. 

# Lien vers API : 
>
> https://api-atelier-technique.vercel.app
>
> # GET
> 
> /images  : récupération de toutes les images
> 
> /images/city_filter  : récupération de toutes les images avec trie sur la ville 
> * paramètres : req.body.city
>
> /images/country_filter  : récupération de toutes les images avec trie sur le pays 
> * paramètres : req.body.country
>
> # POST
>
> /images/add  :  ajout d'une image à la base de donnée
> * paramètres : req.body.image
> 
>


# Format des données : 

{
    "Images": 
    [
      {
        "id": <id>,
        "city": <city>,
        "country": <country>,
        "url": <url>
      },
      {
        "id": <id>,
        "city": <city>,
        "country": <country>,
        "url": <url>
      }
    ]
}
