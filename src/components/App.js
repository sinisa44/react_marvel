import React from 'react';
import { MarvelGet } from './../API/Marvel';
import { Container, Grid } from 'semantic-ui-react';
import Character from './character/Character';
import Comic from './comic/Comic';

class App extends React.Component {
    state = {
        comics:[],
        characters:[],
        loading:true,
    }
    
    async componentDidMount() {
        this.setState(
            {
                comics: await MarvelGet('/comics'),
                characters: await MarvelGet('/characters'),
                loading:false
            }
        )


    }


    render() {
        console.log(this.state);
        return(
            <Container fluid>
                <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Character characters={this.state.characters} loading={this.state.loading}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Comic comics={this.state.comics}/>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default App;