import { Col, Row } from 'antd'
import React, { useState } from 'react'
import '../styles.css';
import { Input } from 'antd';
const { TextArea } = Input;

const text = 'Việt Nam, Vũng Áng, Vân Đồn, Bắc Vân Phong,Phú Quốc,Việt Nam, Hà Nội, Nguyễn Phú Trọng, Hồ Chí Minh, Đà Nẵng, An Giang, Bà Rịa - Vũng Tàu,Bạc Liêu, Bắc Kạn, Bắc Giang, Bắc Ninh, Bến Tre, Bình Dương,Bình Định, Bình Phước, Bình Thuận, Cà Mau, Cao Bằng, Cần Thơ, Đắk Nông, Đồng Nai, Đồng Tháp , Điện Biên, Gia Lai, Hà Giang, Hà Nam, Hà Tĩnh, Hải Dương, Hải Phòng, Hòa Bình, Hậu Giang, Hưng Yên, Khánh Hòa, Kiên Giang, Kon Tum, Lai Châu, Lào Cai, Lạng Sơn,'

function TinMau() {

    const [data, setData] = useState('')

    function handleChange(e: any){
        e.preventDefault()
        setData(e.target.value)
        console.log(data)
    }
  
    return (
        <div className='tinmau'>
            <Row>
                <Col span={7}>
                    <a>Số từ khóa khác nhau:</a>
                </Col>
                <Col span={17}>
                    <TextArea className='input-modal-setting-main' defaultValue='1' autoSize onChange={handleChange} />
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    <a>Số lần từ khóa xuất hiện:</a>
                </Col>
                <Col span={17}>
                    <TextArea className='input-modal-setting-main'defaultValue='1' onChange={handleChange} autoSize />
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    <a>Mô tả:</a>
                </Col>
                <Col span={17}>
                    <TextArea autoSize className='input-modal-setting-main' onChange={handleChange} defaultValue='Việt Nam' />
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    <a>Từ khóa :</a>
                </Col>
                <Col span={17}>
                    <div className='languages-setting-main'>
                        <div className='lg tv'>
                            <span>Tiếng Việt</span>
                        </div>
                        <div className='lg'>
                            <span>Tiếng Anh</span>
                        </div>
                        <div className='lg'>
                            <span>Tiếng Trung</span>
                        </div>
                        <div className='lg'>
                            <span>Tiếng Nga</span>
                        </div>
                    </div>
                    <TextArea autoSize className='input-modal-setting-main' onChange={handleChange} defaultValue={text} />
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    <a>Từ khóa bắt buộc :</a>
                </Col>
                <Col span={17}>
                <div className='languages-setting-main'>
                        <div className='lg tv'>
                            Tiếng Việt
                        </div>
                        <div>
                            Tiếng Anh
                        </div>
                        <div>
                            Tiếng Trung
                        </div>
                        <div>
                            Tiếng Nga
                        </div>
                    </div>
                    <TextArea autoSize className='input-modal-setting-main' onChange={handleChange} defaultValue={text} />
                </Col>
            </Row>
            <Row>
                <Col span={7}>
                    <a>Từ khóa loại trừ:</a>
                </Col>
                <Col span={17}>
                    <div className='languages-setting-main'>
                        <div className='lg tv'>
                            Tiếng Việt
                        </div>
                        <div>
                            Tiếng Anh
                        </div>
                        <div>
                            Tiếng Trung
                        </div>
                        <div>
                            Tiếng Nga
                        </div>
                    </div>
                    <TextArea autoSize className='input-modal-setting-main' onChange={handleChange} defaultValue={text} />
                </Col>
            </Row>
        </div>
    )
}

export default TinMau