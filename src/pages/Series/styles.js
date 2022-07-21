import styled from 'styled-components'

export const Container = styled.div`
  nav{
      display: flex;
      padding: 2rem;
      margin-bottom: 2rem;
      gap: 6rem;
      align-items: center;
      justify-content: center;
    }

    h2{
      color: white;
    }

    h2:hover{
      transform: scale(1.1);
    }
`

export const TvList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`

export const Tv = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
    

 img{
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
}

  span{
      font-weight: bold;
      font-size: 120%;
      text-align: center;
    }

    a{
      transition: all 0.3s;
    }

    a:hover{
      transform: scale(1.1);

    }
`
