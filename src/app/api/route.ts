import CheesesJSON from '@/data/cheeses.json'

/**
 * @swagger
 * /api:
 *   get:
 *     description: Get a all cheeses
 *     responses:
 *       200:
 *         description: A list of cheeses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier for the cheese
 *                     example: 'gouda'
 *                   name:
 *                     type: string
 *                     description: The name of the cheese
 *                     example: 'gouda'
 *                   colour:
 *                     type: string
 *                     description: The color of the cheese
 *                     example: 'yellow'
 *                   price_per_kilo:
 *                     type: number
 *                     description: The price per kilogram of the cheese
 *                     format: float
 *                     example: 20.2
 *
 */
export const GET = async () => {
  return Response.json(CheesesJSON)
}
