import React,{useState} from 'react'
import { Button } from 'antd';
import { AiFillPlusCircle } from 'react-icons/ai';
import styles from '../../styles/Category.module.css'
import DirectoryTree from './TreeCategory'
import Modalmm from './Modal';















// const treeData = [
//   {
//     title: 'parent 1',
//     key: '0-0',
//     children: [
//       {
//         title: 'parent 1-0',
//         key: '0-0-0',
//         disabled: true,
//         children: [
//           {
//             title: 'leaf',
//             key: '0-0-0-0',
//             disableCheckbox: true,
//           },
//           {
//             title: 'leaf',
//             key: '0-0-0-1',
//           },
//         ],
//       },
//       {
//         title: 'parent 1-1',
//         key: '0-0-1',
//         children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
//       },
//     ],
//   },
// ];

const MainCatalog = () => {

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
  
  
  
  
  // const titleRenderer = (itm, index) => {
  //   return(
  //     <div className={styles.itemRenderer}>
  //       <span>{itm.title}</span>
  //       <div className={styles.treeActions}>
  //         <div className={styles.treeIcons}>E</div>
  //         <div className={styles.treeIcons}>D</div>
  //       </div>
  //     </div>
  //   )
  // }
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
                              
                    <Modalmm title="New Categories" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={500}/>
                                       
            
                </div>
                  
                  <div className={styles.treeParent}>
                    <DirectoryTree />
                      {/* // checkable
                      // defaultExpandedKeys={['0-0-0', '0-0-1']}
                      // defaultSelectedKeys={['0-0-0', '0-0-1']}
                      // defaultCheckedKeys={['0-0-0', '0-0-1']}
                      // onSelect={()=>{}}
                      // onCheck={()=>{}}
                      showLine
                      switcherIcon={<DownOutlined />}
                      defaultExpandedKeys={['0-0-0']}
                      onSelect={onSelect}
                      treeData={treeData}
                      // titleRender = {titleRenderer}
                    /> */}
                  </div>
            </div>
        
      
    </div>
  )
}

export default MainCatalog
