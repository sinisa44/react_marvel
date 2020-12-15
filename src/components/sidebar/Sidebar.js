import React from 'react';
import './../../sass/Sidebar.scss';
import Paginate from './../ui_components/Pagination';
import { MarvelGet } from './../../API/Marvel';
import ListComponent from './../ui_components/ListComponent'



export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: 100,
            currentOffset:100,
        }
    }
    
    async handlePageChange (event, data) {
        if( this.state.CurrentOffset === data ) {
            return;
        }

        this.props.handleChange( [], true )

        const newCharacters = await MarvelGet( '/characters', data);

        this.props.handleChange( newCharacters, false );
    }

    render() {
        return(   
            <div>
                <ListComponent 
                    characters={this.props.characters}
                    handleItemClick={this.props.handleItemClick}
                    />
                <Paginate handlePageChange={this.handlePageChange.bind(this)}/>             
            </div>
            )
    }

    async componentDidMount() {
        this.setState(
            { 
                characters: await MarvelGet( '/characters', this.state.offset ),
                loading:false
            }
        )
    }

}