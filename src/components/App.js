import React from 'react';
import {marvelGet} from './../API/Marvel_v2';
import { Container, Grid } from 'semantic-ui-react';
import Character from './character/Character';
import Sidebar from './sidebar/Sidebar';
import HeroModal from './ui_components/Modal';
import './App.scss'

class App extends React.Component {
    state = {
        characters:[],
        character:[],
        loading:true,
        activePage:null,
        modalOpen:false
    }
    
    handleChange = ( activePage ) => {
        const offset = parseInt( `${activePage}00`);

        this.setState({
            loading:true,
            activePage:offset
        })

        if( this.state.activePage === offset ) return;


        marvelGet('/characters', ( characters ) => {
            this.setState({
                characters,
                loading:false
            })
        }, offset)


    }

    handleItemClick = ( data ) => {
        // this.setState({loading:true})

        marvelGet(`/characters/${data}`, ( character ) =>{
            this.setState({
                character,
                loading:false,
                modalOpen:true
            })
        }) 
    }

    render() {
        return(
            <Container fluid>
                <Grid style={{padding:0, margin:0}}>
                <HeroModal 
                    modalOpen={this.state.modalOpen}
                    handleClose={
                        () => {
                            this.setState({modalOpen:false})
                        }
                    }
                    character={this.state.character}
                />
                    <Grid.Row columns={2} >
                        <Grid.Column color="red" width="3" className="sidebar">
                                <Sidebar
                                    loading = {this.state.loading}
                                    characters={this.state.characters} 
                                    handleChange={this.handleChange}
                                    handleItemClick={this.handleItemClick}
                                />    
                        </Grid.Column>
                        <Grid.Column  width='13' className="main-content" color="black">
                            <Character 
                                characters={this.state.characters} 
                                loading={this.state.loading}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }

    componentDidMount() {
        marvelGet('/characters',
        (characters) => {
            this.setState( {
                characters,
                loading:false
            })
        })
    }
}

export default App;