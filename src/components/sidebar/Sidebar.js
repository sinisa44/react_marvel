import React from 'react';
import './../../sass/Sidebar.scss';
import Paginate from './../ui_components/Pagination';
import { MarvelGet } from './../../API/Marvel';
import ListComponent from './../ui_components/ListComponent'
import Spinner from '../ui_components/Spinner';


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            offset: 100,
            currentOffset:100,
            loading:true
        }
    }
    
    async handlePageChange (event, data) {

        this.setState({ loading: true });

        if( this.state.CurrentOffset === data ) {
            return;
        }

        let newCharacters = await MarvelGet( '/characters', data);

        this.setState(
            { 
                currentOffset: data,
                characters: newCharacters,
                loading:false
            }
        )   
    }

    render() {
        console.log(this.state.loading);
        const { characters, loading } = this.state;
        return(   
            <div>
                {
                    loading ? <Spinner/> :
                    <ListComponent characters={characters}/>
                }
                
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