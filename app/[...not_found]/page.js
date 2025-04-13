import React from 'react'
import { notFound } from 'next/navigation'
import Main from '@/components/Main'

export default function NotFoundCatchAll() {
  return (
    notFound()
  )
}
