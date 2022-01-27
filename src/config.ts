import { addAlias } from 'module-alias'
import { resolve } from 'path'
import { env } from 'process'

// lembrar que para rodar o ts-node-dev devemos remover a pasta dist,
// para compilar precisamos adicionar um condicional env.enviroment
if(process.env.ENV === 'dev'){
  addAlias('@', resolve('src'))
}else {
  addAlias('@', resolve('dist'))
}