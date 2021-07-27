import React from 'react'
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`

export const Resumen = ({datos}) => {
    const { marca, year, plan} = datos;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
        <ul>
            <li style={{textTransform:"capitalize"}}>Marca: {marca} </li>
            <li style={{textTransform:"capitalize"}}>Plan: {plan} </li>
            <li>Año del Auto: {year} </li>
        </ul>
        </ContenedorResumen>
        
    )
}
