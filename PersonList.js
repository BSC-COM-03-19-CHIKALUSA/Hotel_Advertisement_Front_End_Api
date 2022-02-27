import React from 'react';										
import axios from 'axios';										
										
export default class PersonList extends React.Component {										
  state = {										
    persons: []										
  }										
										
  componentDidMount() {										
    axios.get(`http://localhost:8080/api/v1/welcome`)										
      .then(res => {										
        const persons = res.data;										
        this.setState({ persons });										
      })										
  }										
										
  render() {										
    return (										
      <ul>										
        {										
          this.state.persons										
            .map(person =>										
              <li key={person.id}>{person.name}</li>										
            )										
        }										
      </ul>										
    )										
  }										
}										
