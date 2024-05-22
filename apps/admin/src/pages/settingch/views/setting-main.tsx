import React from 'react';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './setting-main.module.less';
import classNames from 'classnames';
import '../styles.css'
import TableMain from '../components/table-main';
import CollapseSettingMain from '../components/collapse-setting-main';


export const SettingMain: React.FC = () => {
  return (
    <div id='setting-main' className={classNames(styles.settingMain)}>
      <div className={classNames(styles.settingMainHeader)}>
        <div className={styles.settingMainSearch}>
          <input type={'text'} placeholder="Tìm kiếm ..." />
        </div>
        <div  className={classNames(styles.settingMainOption)}>
          <div className={styles.settingMainOptionadd}>
            <PlusOutlined />
          </div>
          <div className={styles.settingMainOptionsetting}>
            <SettingOutlined />
          </div>
        </div>
      </div>
      <div className={classNames(styles.settingMainContent)}>
        <TableMain />
      </div>
    </div>
  )
}
