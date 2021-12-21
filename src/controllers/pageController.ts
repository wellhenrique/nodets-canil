//importando os tipos
import { Request, Response } from "express";

//Importa os Models de Pet
import { Pet } from '../models/pet';

//importando a selecao do Menu Principal
import { createMenuObject } from "../helpers/createMenuObject";

//Pagina Principal
export const home = (req: Request, res: Response) => {
  let list = Pet.getAll()

  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os Animais",
      background: "allanimals.jpg",
    },
    list
  });
};

//Pagina de Cachorros
export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog')

  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    list
  });
};

//Pagina de Gatos
export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')

  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    list
  });
};

//Pagina de Peixeis
export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish')

  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    list
  });
};
