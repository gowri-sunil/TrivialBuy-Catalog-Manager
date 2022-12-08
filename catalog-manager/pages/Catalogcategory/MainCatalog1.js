import React,{useState} from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import styles from '../../styles/Category.module.css'
import DirectoryTree from './TreeCategory1'

import {IoMdCloseCircle} from 'react-icons/io'
import {Modal ,Button,Upload} from 'antd';
import {  UploadOutlined } from '@ant-design/icons';


const MainCatalog1 = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    
    return (
        <div className={styles.container}>
          <div className={styles.header}>
           <div className={styles.trivialbuy}>TrivialBuy</div>
          </div>
            <div className={styles.sider}>
              <div className={styles.head}>
                 <div className={styles.categorie}>Categories</div>
                   <div className={styles.both}>
                      <Button  className={styles.btn} icon={<AiFillPlusCircle className={styles.pl}/>} onClick={showModal}> New Category</Button>
                   </div>
                     <Modal
                       title={<div className={styles.modaltitle}>New Categories</div>}
                       footer={null}
                       open={isModalOpen} 
                       closeIcon={ <IoMdCloseCircle  onClick={handleCancel} size="20px"/>}>
                       <div className={styles.modalbody}>
                       <div className={styles.modalinput}>
                       <input   type="text" Placeholder="Category Name" className={styles.inputm}/>
                       </div> 
                       <Upload name="logo" action="/upload.do" listType="picture">
                        <Button className={styles.mimgicon}><UploadOutlined />Upload Category Image</Button>
                      </Upload>
                      </div> 
                       <div className={styles.submitdiv}><Button className={styles.modalsubmit} onClick={handleOk}>Submit</Button>
                       </div>     
                    </Modal>
              </div>
              <div className={styles.siderbody}>
                <div className={styles.treeParent}>
                      <DirectoryTree />
                    </div>
              </div>
                    
            </div>
        </div>
  )
}

export default MainCatalog1
