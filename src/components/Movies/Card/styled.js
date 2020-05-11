import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  grid-template-areas: "image" "description";
  grid-template-columns: 100%;
  grid-template-rows: 250px auto;
  
  width: 250px;
  min-height: 250px;
  margin: 10px;

  border: 1px solid #EEE;
  border-radius: 10px;
`

export const CardImg = styled.img`
  grid-area: image;
  grid-row: 1 / 2;

  width: 100%;  
  height: 100%;
  
  border-radius: 10px 10px 0px 0px;
`

export const CardDescription = styled.div`
  grid-area: description;
  grid-row: 2 / 3;
`

export const Title = styled.p`
  color: #639aff;
  font-weight: bold;
  text-align: center;
`