import { ExportOutlined, MinusCircleOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd'
import { Input } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;
import '../styles.css';
import { faketukhoa } from '../views/fakedata';

function TuKhoa() {

    const [data, setData] = useState('')
    const [datat, setDatat] = useState(faketukhoa);
    const handleDelete = (id: any) => {
        setDatat(datat.filter(item => item.id !== id))
    }

    return (
        <div>
            <Row>
                <Col span={12}>
                    <div className='add-tin'>
                        <PlusSquareOutlined /><a>Thêm tin</a>
                    </div>
                </Col>
                <Col span={12}>
                    <TextArea onChange={(e) => setData(e.target.value)} className='input-modal-setting-main' autoSize />
                </Col>
            </Row>
            <div className='cnt-tukhoa'>
                {datat.map((item) => (
                    <Row key={item.id} className='tukhoa-list'>
                        <Col span={15}>
                            <p>{item.tk}<span className='target-blank'><ExportOutlined /></span></p>
                        </Col>
                        <div className='cnt-tukhoa-space'></div>
                        <Col span={5}>
                            <a href='www.taiwannews.com.tw' target={'_blank'} ><span className='link-tukhoa'>{item.link}</span></a>
                        </Col>
                        <Col span={2}>
                            <span className='date-tukhoa'>{item.timeTk}</span>
                        </Col>
                        <Col span={1}>
                            <span className='exit-tukhoa' onClick={()=> handleDelete(item.id)}><MinusCircleOutlined /></span>
                        </Col>
                    </Row>
                ))}
            </div>
        </div>
    )
}

export default TuKhoa