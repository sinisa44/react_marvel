import React from 'react';
import { Pagination } from 'semantic-ui-react';

const Paginate = props => {

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
            onPageChange={(event, data) => props.handlePageChange(data.activePage)}
        />
    );
}

export default Paginate;