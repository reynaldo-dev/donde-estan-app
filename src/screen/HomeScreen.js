import React from 'react'
import styled from 'styled-components';

export default function HomeScreen() {
 
  return (
    <Container>
      <Title>HomeScreen</Title>
    </Container>
  )
}


const Container = styled.View`
  justify-content : center;
  align-items : center;
`
const Title = styled.Text`
  color :  ${props => props.theme.colors.primary}
`