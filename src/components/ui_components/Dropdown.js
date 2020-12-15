import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class Dropdown extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === this.props.id}
          index={this.props.id}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === this.props.id}>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        </Accordion.Content>

      </Accordion>
    )
  }
}
