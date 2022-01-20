import { addAlias } from 'module-alias'
import { resolve } from 'path'
import { env } from 'process'


addAlias('@', resolve('src'))
// lembrar que para rodar o ts-node-dev devemos remover a pasta dist,
// para compilar precisamos adicionar um condicional env.enviroment