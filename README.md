## Welcome to Pokemon evolution chain project !!!

This project was done as part of a demonstration regarding NodeJs experience.

![Pokemon-evolution]([screenshot/Screenshot 2023-06-20 at 00.23.40.png](https://github.com/arnab-shuvo/pokemon-evolution/blob/main/screenshot/screenshot.png?raw=true))

## Prerequisity

- Docker
- Docker Compose
- Node
- Express
- Typescript
- Redis

## Requirement

Ash Ketchum caught some Pokémon and wants to find the evolution chain, but he can’t find it in his Pokedex. Ash wants to start training with those Pokémon and he is asking for some help to find the evolution chain and the variations on which they evolve using the Poke API, whose documentation can be found here https://pokeapi.co/docs/v2

Note:

- Variations contains all possible evolutions, not only consecutive evolutions. For
  example, **metapod** is not the only variation of **caterpie**, **butterfree** is also a variation because it’s the evolution from **metapod**.
- Variations are in order, for example if the input provided is butterfree or caterpie then the output is exactly the same because they are part of the same evolution
  chain.

Example Output:

    {
    “name”: “caterpie”,
    “variations”: [{
    	“name”: “metapod”,
    	“variations”: [{
    		“name”: “butterfree”,
    		“variations”: []
    		}]
    	}]
    }

## Running the project

To initialize this project, run `docker compose up` from the root of this project. This will run **Redis**, **API** and **UI** project.

Beside update the `.env` file under `api` folder with the following values:

    PORT=8080

Lastly update the `.env` file under `ui` folder with the following values:

    REACT_APP_API_BASE_URL=http://localhost:8080/

The UI Project will run on `3000` port as default. The url to access the UI is: http://localhost:3000/

## API Documentation

**BaseURL:** http://localhost:8080/
**Get evolution chain:** http://localhost:8080/evolution/chain/[POKEMON_NAME]

## Improvement

1.  Imporve Testing structure
2.  Add API testing for Pokemon and Species
