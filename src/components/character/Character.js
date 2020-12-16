import React from 'react';
import CharacterCard from './CharacterCard';
import { Card } from 'semantic-ui-react'
import Spinner from './../ui_components/Spinner';

class Character extends React.Component {
    render() {
        return(
            this.props.loading ? <Spinner/> : 
            <Card.Group itemsPerRow={4}>   
                {this.props.characters.map( character => {
                    return <CharacterCard key={character.id} character={character}/>
                })}
            </Card.Group>   
            
        );    
    }
}

export default Character;