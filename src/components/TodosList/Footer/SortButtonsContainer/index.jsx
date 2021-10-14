import React from 'react';
import Button from './SortButton';
import styled from 'styled-components';

const SortButtonsContainer = styled.div`
  width: 45%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class SortButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = ['All', 'Active', 'Completed'];
  }
  render() {
    return (
      <SortButtonsContainer>
        {this.buttons.map((button, index) => (
          <Button
            key={button[index]}
            value={button}
            activeFilter={this.props.activeFilter}
            onChangeFilter={this.props.onChangeFilter}
          />
        ))}
      </SortButtonsContainer>
    );
  }
}

export default SortButtons;
