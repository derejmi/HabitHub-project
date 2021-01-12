import React, { Component } from 'react';
import { HabitTable, TableButtons } from '../../components';
import {Button, Form} from 'react-bootstrap';

class HabitTrack extends Component {
    render() {
        return (
            <Form>
              <HabitTable />
              <TableButtons />
            </Form>
        );
    }
}

export default HabitTrack;
