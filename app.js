'use strict';
/**
    Environment variable list

    APPJAM_11_PORT server listen port
    LAUNCH_MODE TEST / NORMAL MODE supported
*/
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.set('port', process.env.APPJAM_11_PORT || 8085);
app.use(logger('dev'))

app.use('/', require('./routes/api'))

if(process.env.LAUNCH_MODE || 'NORMAL' === 'TEST') {
    app.listen(app.get('port', () => {
        console.log('server was started on TEST MODE at port ' + app.get('port'));
    }));
} else {
    app.listen(app.get('port'), () => {
        console.log('server was started at port ' + app.get('port'));
    });
}
