import React from 'react';
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => <button id="back-button" onClick={history.goBack}>Back</button>

export default withRouter(BackButton)
