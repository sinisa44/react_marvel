import React from 'react';
import './../../sass/Sidebar.scss';
import Paginate from './../ui_components/Pagination';
import ListComponent from './../ui_components/ListComponent'
import Spinner from './../ui_components/Spinner';


export default class Sidebar extends React.Component {
    render() {
        return(   
            <div>
                <div>
                    { this.props.loading ? <Spinner/>:
                        <ListComponent 
                            characters={this.props.characters}
                            handleItemClick={this.props.handleItemClick}
                        />
                    }
                </div>
                <Paginate handlePageChange={this.props.handleChange}/>             
            </div>
        )
    }


}