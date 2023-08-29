import React, { Component } from 'react';

import {
    Box,
    Button,
    Heading,
    Grommet,
    FormField,
    Form
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

export class CreateSchedules extends Component {
    constuctor() {
    }
    render() {
        return (
            <Grommet theme={theme} full>
                <Box >
                    <AppBar>
                        <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="/"><Heading level='3' margin='none'>HMS</Heading></a>
                    </AppBar>
                    <Box pad="small">
                        <Form
                            onSubmit={({ value }) => {
                                let email_in_use = "";
                                console.log(value);
                                fetch("http://localhost:3001/userInSession")
                                    .then(res => res.json())
                                    .then(res => {
                                        var string_json = JSON.stringify(res);
                                        var email_json = JSON.parse(string_json);
                                        email_in_use = email_json.email;
                                        console.log(email_in_use);
                                        fetch("http://localhost:3001/createSchedules?id=" +
                                            value.id + "&startTime=" + value.starttime + "&endtime=" +
                                            value.endtime + "&breakTime=" +
                                            value.breaktime + "&day=" +
                                            value.day, { method: 'POST' })
                                            .then(res => res.json())
                                            .then(res => {
                                                let didUpdate = res.data.affectedRows;
                                                if (didUpdate === 0) {
                                                    window.alert("Cannot Create The Schedule");
                                                } else {
                                                    window.alert("Schedule Created Successfully");
                                                }
                                            });
                                    });

                            }}>
                            <h3>Create Schedules</h3>
                            <FormField
                                label="ID"
                                name="id"
                                required
                            />
                            <FormField
                                label="Start Time"
                                name="starttime"
                                required
                                validate={{ regexp: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ }}
                            />
                            <FormField
                                label="End Time"
                                name="endtime"
                                required
                                validate={{ regexp: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ }}
                            />
                            <FormField
                                label="Break Time"
                                name="breaktime"
                                required
                                validate={{ regexp: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ }}
                            />
                            <FormField
                                label="Day"
                                name="day"
                                required
                                validate={{ regexp: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)$/i }}
                            />
                            <br />
                            <Button
                                type="submit"
                                label="Add Schedule"
                                primary
                            />
                        </Form>
                    </Box>
                </Box>
            </Grommet>
        );
    }
}

export default CreateSchedules;
