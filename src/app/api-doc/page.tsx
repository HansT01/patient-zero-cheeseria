import { getApiDocs } from '@/utils/swagger'
import ReactSwagger from './react-swagger'

const APIDoc = async () => {
  const spec = await getApiDocs()
  return (
    <main className='container mx-auto px-6'>
      <ReactSwagger spec={spec} />
    </main>
  )
}

export default APIDoc
