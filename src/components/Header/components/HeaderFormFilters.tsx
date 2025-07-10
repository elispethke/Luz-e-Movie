import React from 'react';
import SelectorGroup from '../../Selector/SelectorGroup';
import {FaLocationDot} from 'react-icons/fa6';
import SelectorOption from '../../Selector/SelectionOption';

const cidades = [
{id: 1, name: "Sao Paulo"},
{id:2, name: "Rio de Janeiro"},
{id: 3, name: "Belo Horizonte"},
{id:4, name: "Curitiba"},
{id:5, name: "Porto Alegre"},
];

const HeaderFormFilters = () => {
return(
    <form>
        <SelectorGroup id='cidade' icon={<FaLocationDot />}>
         <SelectorOption  value="" label="Escolha sua Cidade..." />
         {cidades.map((cidade)=> {
            return (
                <SelectorOption 
                key={cidade.id}
                value={cidade.name}
                label={cidade.name}
                />
            );
         })}
        </SelectorGroup>
    </form>
)
}

export default HeaderFormFilters;