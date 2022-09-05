import React from 'react'
import { Form, Button, Input, Modal } from "antd";


type ModalUserProps = {
    visible?: boolean
}

const ModalUser: React.FC<ModalUserProps> = ({ visible }) => {
    return (
    <>
        <Modal visible={visible}>
            <Form>
                <Form.Item>
                    <Input>Username</Input>
                </Form.Item>
                <Form.Item>
                    <Input>Password</Input>
                </Form.Item>
            </Form>
        </Modal>
    </>
  )
}



export default ModalUser