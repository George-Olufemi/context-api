import React from 'react';
import ComponentC from '../components/ComponentC';
import { ColorContext } from '../pages/Docs';

export default function ComponentB() {
  return (
    <div>
        <h1>ComponentB</h1>
        <ColorContext.Consumer>
            {color => {
                return <div>
                    <h2>{color}</h2>
                </div>
            }}
        </ColorContext.Consumer>
        <ComponentC />
    </div>
  )
}
