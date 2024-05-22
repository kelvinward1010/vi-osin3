import { EditOutlined, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Button, Col, Modal, Row, Tabs } from 'antd';
import React, { useState } from 'react';
import '../styles.css';
import TinMau from './tinmau';
import TuKhoa from './tukhoa';

export const ModalMain: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleShowModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <div className='modal-setting-main'>
            <EditOutlined onClick={handleShowModal} className='edit-main-push'/>
            <Modal
                open={open}
                className='modal-title'
                width={1000}
                title="Sửa danh mục tin: Việt Nam"
                onOk={handleOk}
                onCancel={handleCancel}
                getContainer='#setting-main'
                footer={[
                <Button key="back" onClick={handleCancel}>
                    Hủy
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    Áp dụng
                </Button>
                ]}
            >
                <div>
                    <Row>
                        <Col span={7}>
                            <a>Tên danh mục:</a>
                        </Col>
                        <Col span={17}>
                            <input className='input-modal-setting-main' value={'Việt Nam'} />
                        </Col>
                    </Row>
                    <div>
                        <Tabs
                            centered
                            defaultActiveKey="1"
                            items={[
                            {
                                label: `Từ khóa`,
                                key: '1',
                                children: <TuKhoa />,
                            },
                            {
                                label: `Tin mẫu`,
                                key: '2',
                                children: <TinMau />,
                            },
                            ]}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}
