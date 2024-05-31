// components/OnlyClient.tsx

import { useEffect, useState, ReactNode } from 'react'

interface OnlyClientProps {
  children: ReactNode
}

const OnlyClient: React.FC<OnlyClientProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return <>{children}</>
}

export default OnlyClient
