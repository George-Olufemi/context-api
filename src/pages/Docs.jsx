import React from 'react';
import styled from 'styled-components';
import ComponentA from '../components/ComponentA';
export const NameContext = React.createContext();
export const ColorContext = React.createContext();

const Docs = () => {
    const [color, setColor] = React.useState('Red')
  return (
    <Doccs>
        <NameContext.Provider value={'Smith'}>
            <ColorContext.Provider value={color}>
                <ComponentA />
            </ColorContext.Provider>
        </NameContext.Provider>
    </Doccs>
  )
}

export default Docs;


const Doccs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`