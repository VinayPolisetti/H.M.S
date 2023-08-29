import React, { Component } from 'react';
import {
  Box,
  Button,
  Heading,
  Grommet,
  FormField,
  Form,
  Text
} from 'grommet';

import './App.css';

const theme = {
  global: {
    colors: {
      brand: '#000000',
      focus: '#000000'
    },
    font: {
      family: 'Lato',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props} />
);
export class CreateAccount extends Component {
  constuctor() {
  }

  render() {

    return (
      <Grommet theme={theme} full>
        <AppBar>
          <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="/"><Heading level='3' margin='none'>HMS</Heading></a>
        </AppBar>
        <Box fill align="center" justify="top">
          <Box width="medium">
            <h2>Create A Schedule</h2>
            <br></br>
            <Form
              onReset={event => console.log(event)}
              method="post"
              onSubmit={({ value }) => {
                console.log("Submit", value);

                fetch("http://localhost:3001/checkIfSchedCollides?id=" + value.id + "&day=" + value.day)
                  .then(res => res.json())
                  .then(res => {
                    if ((res.data[0])) {
                      window.alert("There is an existing schedule on the given day");
                    }

                    else {
                      fetch("http://localhost:3001/createSchedules?id=" + value.id + "&starttime=" + value.starttime + "&endtime=" + value.endtime + "&breaktime=" + value.breaktime + "&day=" + value.day)
                      .then(res => res.json())
                      .then(res => {
                        let didUpdate = res.data.affectedRows;
                        if (didUpdate === 0) {
                          window.alert("Cannot Create The Schedule");
                        } else {
                          window.alert("Schedule Created Successfully");
                        }
                      }
                      )
                    }
                  });

              }}>

              <FormField
                label="ID"
                name="id"
                placeholder="ID"
                validate={{ regexp: /^-?\d+$/}}
                required
              />
              <FormField
                label="Start Time"
                name="starttime"
                required
                placeholder="HH:MM"
                validate={{ regexp: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/ }}
              />
              <FormField
                label="End Time"
                name="endtime"
                placeholder="HH:MM"
                validate={{ regexp: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/ }}
                required />
              <FormField
                label="Break Time"
                name="breaktime"
                placeholder="HH:MM"
                validate={{ regexp: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/ }}
              />
              <FormField
                label="Day"
                name="day"
                placeholder="eg: Sunday"
                validate={{ regexp: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)$/i }}
              />
              <br></br>
              <Box direction="row" align="center" >
                <Button
                  label="Submit"
                  fill="horizontal"
                  type="submit"
                  primary />
              </Box>

            </Form>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default CreateAccount;