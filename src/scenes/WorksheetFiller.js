import React, { Component } from 'react';
import { Grid, GridTitle, GridSubTitle, Row } from '../containers';
import { Input } from '../components';

class WorksheetFiller extends Component {
    render() {
        return (
            <Grid>
                <GridTitle>Planilha Generator 2.1</GridTitle>
                <GridSubTitle>copyright 2019</GridSubTitle>
                
                <Row>
                    <Input type="text" id="username" label="Usuário"></Input>
                    <Input type="password" id="password" label="Senha"></Input>
                    <Input type="file" id="file" label="Arquivo"></Input>
                </Row>
            </Grid>
        );
    }
}

export default WorksheetFiller;