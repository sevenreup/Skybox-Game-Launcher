import React from 'react';
import { Modal, Button, Tab, Tabs, Container, Row, Col, Form } from 'react-bootstrap';
import { SettingsModalStyled } from './gamesettings.styled';
import './gamesettings.scss';
import { InputField } from '../form/inputs';

function settingModal(props) {
    const { show, onHide } = props;

    return (
        <Modal show={show} onHide={onHide} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered dialogClassName="settings-modal">
            <SettingsModalStyled className="settings-modal-content">
                <Modal.Body>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <InputField title="Name"/>
                                    </Col>
                                    <Col>
                                        <InputField title="version"/>
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <div>assssss ss s s s s s</div>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <div>asssssgass what s</div>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </SettingsModalStyled>
        </Modal>
    )
}

export const GameSettings = settingModal;