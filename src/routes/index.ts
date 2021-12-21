//importando as Rotas principais
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

//Definindo a Rota
import { Router } from "express";
const router = Router();


//Rota Home
router.get('/', PageController.home)

//Rota dos Animais
router.get('/dogs', PageController.dogs)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)

//Rota de Busca
router.get('/search', SearchController.search)

//exportando a rota
export default router;