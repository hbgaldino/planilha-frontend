import React, { Component } from 'react';
import { Grid, GridTitle, GridSubTitle, Row, Column } from '../containers';
import { Input, Select, Buttom } from '../components';
import { MonthsOptions } from '../util';
import Loader from '../components/Loader';

class WorksheetFiller extends Component {

    constructor() {
        super();

        this.state = {
            username: "",
            password: "", 
            file: null,
            month: (new Date().getMonth() + 1)
        };
        
       //binding to make 'this' work on method
       this.fillWorkbook = this.fillWorkbook.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }

    fillWorkbook() {
        console.log(this.state);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <Grid>
                <GridTitle>Planilha Generator 2.1</GridTitle>
                <GridSubTitle>copyright 2019</GridSubTitle>
                
                <Row>
                    <Input type="text" id="username" label="Usuário" onChange={this.handleChange}></Input>
                    <Input type="password" id="password" label="Senha" onChange={this.handleChange}></Input>
                    <Column>
                        <Input type="file" id="file" label="Arquivo" onChange={this.handleChange}></Input>
                        <Select label="Mês" id="month" items={MonthsOptions} onChange={this.handleChange}></Select>
                    </Column>
                    <Buttom type="submit" onClick={this.fillWorkbook}>Gerar!</Buttom>
                </Row>
                <Loader />
            </Grid>
        );
    }
}

export default WorksheetFiller;