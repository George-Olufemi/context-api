import React from 'react';
import { NameContext } from '../pages/Docs';
import styled from 'styled-components';

export default function ComponentC() {
  return (
        <div>
        <h1>ComponentC</h1>
        <NameContext.Consumer>
            {name => {
                return <div>
                            <h4>{name}</h4>
                        </div>
            }}
        </NameContext.Consumer>
        </div>
  )
}
