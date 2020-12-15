import React from 'react';
import { List } from 'semantic-ui-react';
import './../../sass/list.scss';

const ListComponent = ( props ) => {
    const { characters } = props;
    return(
        <List className='list'>
            {characters.map( character => {
                return <List.Item key={character.id} >
                            <List.Content>
                                {character.name}
                            </List.Content>
                        </List.Item>
            })}
        </List>
    )
}


export default ListComponent;

