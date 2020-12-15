import React from 'react';
import CharacterCard from './CharacterCard';

class Character extends React.Component {
   
    render() {
        return(
            this.props.characters.map( character => {
                return <CharacterCard key={character.id} character={character}/>
            })
        )    
    }
}

export default Character;