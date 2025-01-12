import { type SchemaTypeDefinition } from 'sanity'
import product from '../product'
import user from '../user'
import cart from '../cart'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,user,cart],
}
