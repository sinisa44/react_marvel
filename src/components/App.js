import React from 'react';
import { MarvelGet } from './../API/Marvel';
import { Container, Grid, Card } from 'semantic-ui-react';
import Character from './character/Character';
import Spinner from './ui_components/Spinner';
import Sidebar from './sidebar/Sidebar';
import './App.scss'

class App extends React.Component {
    state = {
        characters:[],
        loading:true,
    }
    
    handleChange = (data, loader) => {
        this.setState({ 
            characters: data,
            loading:loader
        });        
    }

    render() {
        console.log(this.state)
        return(
            <Container fluid>
                <Grid style={{padding:0, margin:0}}>
                    <Grid.Row columns={2} >
                        <Grid.Column color="red" width="3" className="sidebar">
                            {
                                this.state.loading ? <Spinner /> :
                                <Sidebar characters={this.state.characters} handleChange={this.handleChange.bind(this)}/>
                            }
                        </Grid.Column>
                        <Grid.Column  width='13' className="main-content" color="black"> 
                            {
                                this.state.loading ? <Spinner/> : 
                                <Card.Group itemsPerRow={4}>
                                    <Character characters={this.state.characters} />
                                </Card.Group>
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }

    async componentDidMount() {
        this.setState(
            {
                characters: await MarvelGet('/characters'),
                loading:false
            }
        )
    }
}

export default App;