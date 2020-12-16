import React from 'react';
import {marvelGet} from './../API/Marvel_v2';
import { Container, Grid } from 'semantic-ui-react';
import Character from './character/Character';
import Sidebar from './sidebar/Sidebar';
import './App.scss'

class App extends React.Component {
    state = {
        characters:{
            characters:[],
            character:[]
        },
        character:[],
        loading:true,
        activePage:null
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
                characters:{
                    characters: characters
                },
                loading:false
            })
        }, offset)


    }

    handleItemClick = ( data ) => {
        console.log(`handle item click ${data}`);
    }

    render() {
        return(
            <Container fluid>
                <Grid style={{padding:0, margin:0}}>
                    <Grid.Row columns={2} >
                        <Grid.Column color="red" width="3" className="sidebar">
                                <Sidebar
                                    loading = {this.state.loading}
                                    characters={this.state.characters.characters} 
                                    handleChange={this.handleChange}
                                    handleItemClick={this.handleItemClick}
                                />    
                        </Grid.Column>
                        <Grid.Column  width='13' className="main-content" color="black">
                            <Character 
                                characters={this.state.characters.characters} 
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
                    characters:{
                        characters
                    },
                    loading:false
            })
        })
    }
}

export default App;