import React from 'react';
import { List } from 'semantic-ui-react';
import './../../sass/list.scss';

const ListComponent = ( props ) => {
    const { characters } = props;

    const handleItemClick = (event, data) => {
        console.log(data.item);
    }
    console.log(props);
    return(
        <List className='list'>
            { 
                characters.map( character => {
                return <List.Item key={character.id} onClick={handleItemClick} item={character.id}>
                            <List.Content>
                                {character.name}
                            </List.Content>
                        </List.Item>
                    }
                )
            }
        </List>
    )
}


export default ListComponent;

