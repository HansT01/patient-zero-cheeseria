import { createSwaggerSpec } from 'next-swagger-doc'
import dynamic from 'next/dynamic'

const ReactSwagger = dynamic(() => import('@/components/react-swagger'), { ssr: false })

const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      },
      security: [],
    },
  })
  return spec
}

const APIDoc = async () => {
  const spec = await getApiDocs()
  return (
    <main className='container mx-auto px-6'>
      <ReactSwagger spec={spec} />
    </main>
  )
}

export default APIDoc
