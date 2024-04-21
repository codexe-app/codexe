import { Suspense } from 'react'
import RecoveryForm from './form'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <RecoveryForm />
    </Suspense>
  )
}
