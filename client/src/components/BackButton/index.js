import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => <Button id="back-button" className="genButtons" variant="info" onClick={history.goBack}>Back</Button>

export default withRouter(BackButton)
