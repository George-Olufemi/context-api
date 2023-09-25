import React, { useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  const [data, setData] = useState([
    {
      name: "George",
      image: "/logo192.png",
    },
    {
      name: "Olumuyiwa"
    },
    {
      name: "Olufemi"
    },
    {
      name: "Ayeni"
    }
  ])

  const card = (
    <Card>
      <img src="/logo192.png" alt="" />
    </Card>
  )

  return (
    <div>
      <center>
        <h1>Home page</h1>
        {card}
        {
          data.map((d, idx) => 
          <div key={idx}>
          <h1>{d.name}</h1>
          <img src={d.image} alt="" />
          </div>
          )
        }
      </center>
    </div>
  )
}


const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 400px;
  background-color: lightgrey;
`