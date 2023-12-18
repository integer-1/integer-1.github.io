import request from 'superagent'
import { Artwork } from './models/artworks.ts'


// const serverURL = '/api/v1'

export async function getArtData(): Promise<Artwork[] | unknown> {
  try 
  {
    const response = await request.get(`/api/v1/personal-projects/first`)
    return response.body
  }
  catch(e)
  {
    console.log(e)
  }
}