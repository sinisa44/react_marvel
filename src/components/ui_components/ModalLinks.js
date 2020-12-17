import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ModalLinks = (props) => {

    
    return(
        props.links.map( link => {
            return <Button basic color='red'>
                    <Icon name='star'/> 
                    <b>
                        <a href={link.url} 
                            style={{color:'red'}} 
                            target='_blank' 
                            rel="noreferrer"> { link.type.toUpperCase()
                        }</a>
                    </b>
                </Button>
        })
    )
}


export default ModalLinks;