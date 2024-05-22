import { DeleteOutlined, EditOutlined, FolderOpenFilled, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Space, Table } from 'antd';
import React, { useState } from 'react'
import { ModalMain } from './modal-main';
import { datafake } from '../views/fakedata';



interface DataType {
    key: string;
    name: string;
    description: string
}
  
const data: DataType[] = datafake;

function TableMain() {
  
  const [datat, setDatat] = useState(data);
  const handleDelete = (id: any) => {
    setDatat(datat.filter(item => item.key !== id))
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên Danh Mục',
      dataIndex: 'name',
      key: 'key',
      render: text => (
        <>
          <FolderOpenFilled /> <a>{text}</a>
        </>
      ),
    },
    {
      title: 'Mô Tả',
      dataIndex: 'description',
      key: 'key',
      render: text => (
        <>
          <FolderOpenFilled /> <a>{text}</a>
        </>
      ),
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" className='action' >
          <span ><PlusOutlined/></span>
          <span><ModalMain /></span>
          <span><DeleteOutlined onClick={()=> handleDelete(record.key)} className='delete-setting-main'/></span>
        </Space>
      ),
    },
  ];
  return (
    <div>
        <Table className="table-main" columns={columns} dataSource={datat} />
    </div>
  )
}

export default TableMain