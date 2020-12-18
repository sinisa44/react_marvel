import React from 'react';
import {Modal, Button, Icon, Image, Header} from 'semantic-ui-react';
import ModalLink from './../ui_components/ModalLinks';
import Carousel from 'react-elastic-carousel';
import './../../sass/HeroModal.scss';
import {generateUrl} from './../../API/Marvel_v2';
//TODO add HTTP Post request to save Character to local database

class HeroModal extends React.Component {
    

    render() {
        if( this.props.character.length === 0 ) {
            return null;
        }
        const character = this.props.character[0]

        console.log(character);
        return(
            <Modal
                closeOnEscape={true}
                dimmer='blurring'
                size='large'
                closeIcon
                onClose={this.props.handleClose}
                open={this.props.modalOpen}
                className="hero-modal">

                <Modal.Header className='hero-modal__header'> 
                    <Header textAlign="center" color='red'>
                        {character.name}
                    </Header>
                </Modal.Header>
                <Modal.Content className='hero-modal__content'
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
                <Modal.Content>
                <Carousel itemsToShow={2}>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                    </Carousel>
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