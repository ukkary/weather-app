import { Suspense, useState } from 'react'
import styled from "styled-components"
import {
  QueryClient,
  QueryClientProvider, 
  useQuery } from '@tanstack/react-query'

import { Cities } from '../../types/cities'
import { getCurrentWeather } from '../../apis/currentWeather'

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
      <p>都市：</p>{Cities.TOKYO} / 
      <p>気温：</p>{data?.temp_c}℃
    </>
  )
}

export const Index = () => {
  const [testState, setTestState] = useState<number>(0)
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<></>}>
        <Wrapper>
          <TestSuspense />
          <TestText
            data-testid="test-counter"
          >{testState}</TestText>
          <TestButton
            data-testid="test-counter-button"
            aria-label="test-counter-label"
            onClick={ () => setTestState(testState + 1) }
          >
            Press
          </TestButton>
        </Wrapper>
      </Suspense>
    </QueryClientProvider>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const TestText = styled.p``
const TestButton = styled.button`
  width: 200px;
`
