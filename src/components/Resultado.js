import React from 'react'
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition} from 'react-transition-group'

const ContainerCotizacion = styled.div`
    text-align: center;
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0.5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`


export const Resultado = ({cotizacion}) => {
    if(!cotizacion){
        return null
    }
    return (
        <ContainerCotizacion>            
            <TransitionGroup component="span" className="resultado" >
                <CSSTransition classNames="resultado" key={cotizacion} timeout={{enter:500, exit:500}}>                    
                    <h4>Costo Total: $ {cotizacion}</h4>                    
                </CSSTransition>
            </TransitionGroup>
        </ContainerCotizacion>
    )
}
