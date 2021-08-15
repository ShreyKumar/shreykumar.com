import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.CTN_SPACE_ID,
  accessToken: process.env.CTN_DELIVERY_KEY
})

export default client
