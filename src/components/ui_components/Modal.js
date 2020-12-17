import React from 'react';
import {Modal, Button, Icon, Image, Header} from 'semantic-ui-react';
import ModalLink from './../ui_components/ModalLinks';

class HeroModal extends React.Component {
     style = {
        borderBottom:'1px solid red',
        color:'red',
        backgroundColor:'black'
    }

    render() {
        if( this.props.character.length === 0 ) {
            return null;
        }
        const character = this.props.character[0]
        return(
            <Modal
                style={{border:'1px solid red'}}
                size='small'
                closeIcon
                onClose={this.props.handleClose}
                open={this.props.modalOpen}
                className="modal">
                <Modal.Header style={this.style}> 
                    <Header 
                        textAlign="center"
                        color='red'
                    >{character.name}</Header>
                </Modal.Header>
                <Modal.Content style={this.style}
                        image 
                        scrolling>
                    <Image 
                        src={`${character.thumbnail.path}/standard_fantastic.jpg`}
                        size='medium' 
                        verticalAlign='middle'
                        style={{margin:'0 auto'}}
                    />

                    <Modal.Description>
                            {character.description}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions style={{color:'red', backgroundColor:'black'}}>
                    <Button.Group floated='left'>
                        <ModalLink links={character.urls}/>
                    </Button.Group>
                    <Button positive basic color='green'>
                        <Icon name='save' />  Save
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default HeroModal;