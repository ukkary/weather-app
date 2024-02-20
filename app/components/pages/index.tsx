import { Suspense } from 'react'
import styled from "styled-components"
import {
  QueryClient,
  QueryClientProvider, 
  useQuery } from '@tanstack/react-query'

import { Cities } from '@/types/cities'
import { getCurrentWeather } from '@/apis/currentWeather'

const queryClient = new QueryClient()

const TestSuspense = () => {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const data = await getCurrentWeather({city: Cities.TOKYO})
      return data.current
    }
  })

  return (
    <>
      都市：{Cities.TOKYO} / 
      気温：{data?.temp_c}℃
    </>
  )
}

export const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<></>}>
        <Wrapper>
          <TestSuspense />
        </Wrapper>
      </Suspense>
    </QueryClientProvider>
  )
}

const Wrapper = styled.div``
