import React, { Component } from 'react';
import { Grid, GridTitle, GridSubTitle, Row, Column } from '../containers';
import { Input, Select } from '../components';

class WorksheetFiller extends Component {

    render() {
        const monthsOptions = [
        {value: 1, label: "Janeiro"},
        {value: 2, label: "Fevereiro"},
        {value: 3, label: "Março"},
        {value: 4, label: "Abril"},
        {value: 5, label: "Maio"},
        {value: 6, label: "Junho"},
        {value: 7, label: "Julho"},
        {value: 8, label: "Agosto"},
        {value: 9, label: "Setembro"},
        {value: 10, label: "Outubro"},
        {value: 11, label: "Novembro"},
        {value: 12, label: "Dezembro"}
     ];

        return (
            <Grid>
                <GridTitle>Planilha Generator 2.1</GridTitle>
                <GridSubTitle>copyright 2019</GridSubTitle>
                
                <Row>
                    <Input type="text" id="username" label="Usuário"></Input>
                    <Input type="password" id="password" label="Senha"></Input>
                    <Column>
                        <Input type="file" id="file" label="Arquivo"></Input>
                        <Select label="Mês" id="month" items={monthsOptions}></Select>
                    </Column>
                </Row>
            </Grid>
        );
    }
}

export default WorksheetFiller;