import React, { Component } from 'react';
import { Grid, GridTitle, GridSubTitle, Row, Column } from '../containers';
import { Input, Select, Buttom } from '../components';
import { MonthsOptions } from '../util';

class WorksheetFiller extends Component {

    render() {
        

        return (
            <Grid>
                <GridTitle>Planilha Generator 2.1</GridTitle>
                <GridSubTitle>copyright 2019</GridSubTitle>
                
                <Row>
                    <Input type="text" id="username" label="Usuário"></Input>
                    <Input type="password" id="password" label="Senha"></Input>
                    <Column>
                        <Input type="file" id="file" label="Arquivo"></Input>
                        <Select label="Mês" id="month" items={MonthsOptions}></Select>
                    </Column>
                    <Buttom type="submit">Gerar!</Buttom>
                </Row>
            </Grid>
        );
    }
}

export default WorksheetFiller;