import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = () => {
    return(
        <Dimmer active>
            <Loader size='big'/>
        </Dimmer>
    )
}

export default Spinner;