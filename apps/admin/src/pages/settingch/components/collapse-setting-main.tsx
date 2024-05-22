import { DeleteOutlined, EditOutlined, FolderOpenFilled, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Collapse, Select, Space } from 'antd';
import { datafake } from '../views/fakedata';
import { ModalMain } from './modal-main';
import '../styles.css';
import { useState } from 'react';

const { Panel } = Collapse;
const { Option } = Select;


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


function CollapseSettingMain() {

    const [data,setData] = useState(datafake)
    const handleDelete = (id: any) => {
      setData(data.filter(item => item.key !== id))
    }

    const genExtra = () => (
        <Space size="middle" className='action' >
          <span ><PlusOutlined/></span>
          <span><ModalMain /></span>
          <span><DeleteOutlined onClick={() => handleDelete} className='delete-setting-main'/></span>
        </Space>
    );
    return (
        <>
          <Collapse
            defaultActiveKey={['1']}
          >
            {data.map((item,idx) => (
                <Panel header={`${item.name}`} key={item.key} extra={genExtra()}>
                    <div>{item.description}</div>
                </Panel>
            ))}
          </Collapse>
        </>
    );
}

export default CollapseSettingMain