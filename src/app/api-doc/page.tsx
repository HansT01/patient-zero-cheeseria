import { getApiDocs } from '@/utils/swagger'
import ReactSwagger from './react-swagger'

export default async function IndexPage() {
  const spec = await getApiDocs()
  return (
    <section className='container mx-auto px-6'>
      <ReactSwagger spec={spec} />
    </section>
  )
}
