import React from 'react';
import { Pagination } from 'semantic-ui-react';

const Paginate = (props) => {


    const handlePageChange = (event, data) => {
        let offset = parseInt( `${data.activePage}00`)
        props.handlePageChange(event, offset);
    }

    return(
        <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={9}
            className='pagination'
            onPageChange={handlePageChange}
        />
    );
}

export default Paginate;