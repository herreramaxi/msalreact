import Moment from 'moment';
import React, { Fragment } from "react";
import { Col, Row, Table } from "react-bootstrap";

export const TemperatureTable = (props) => {

    return (
        <Fragment>
            <h3>Latest samples</h3>
            <Row className="mt-3">
                <Col md="2"></Col>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Value</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.samples.slice(Math.max(props.samples.length - 5, 0)).map((item, i) => {
                                return (<tr key={i}>
                                    <td>{parseFloat(item[1]).toFixed(2)}</td>
                                    <td>{Moment(item[0]).format("yyyy-MM-DD hh:mm")}</td>
                                </tr>)
                            })}
                        </tbody>
                    </Table >
                </Col>
                <Col md="2"></Col>
            </Row>
        </Fragment >
    );
}