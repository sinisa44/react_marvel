import React from 'react';
import {Card, Image } from 'semantic-ui-react';

const CharacterCard = (props) => {
    const { character } = props;

    return(
        <Card key={character.id}>
            <Image src={`${character.thumbnail.path}/standard_xlarge.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{character.name}</Card.Header>
            </Card.Content>
        </Card>
    );
}

export default CharacterCard;