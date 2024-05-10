import CheesesJSON from '@/data/cheeses.json'

export const GET = async () => {
  return Response.json(CheesesJSON)
}
