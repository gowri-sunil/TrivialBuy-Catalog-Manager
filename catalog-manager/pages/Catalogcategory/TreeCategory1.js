import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { MdModeEdit} from  'react-icons/md';
import { TbPlaylistAdd } from 'react-icons/tb';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import styles from '../../styles/Category.module.css'
import { Tree } from 'antd';
import Image from 'next/image';

import small from '../../public/small.png';
import deleteicon from  '../../public/deleteicon.png';

const { DirectoryTree } = Tree;
// import type:{ DataNode, TreeProps } from 'antd/es/tree';


function TreeCategogry1() {
  const treeData = [
    {
      title: 'Main Category',
      key: '0-0',
      icon:<div></div>,
      children: [
        {
          title: 'Sub Category',
          key: '0-0-0',
          icon:<div></div>,
          children:[{
            title: 'Sub Category',
            key: '0-0-0-0',
            icon:<div></div>,
          }],
        },
        {
          title: 'Sub Category',
          key: '0-0-1',   
          icon:<div></div>,     },
      ],
    },
    {
        title: 'Main Category'  , 
        key: '0-1',
        icon:<div></div>,
        children: [
          {
            title: 'Sub Category',
            key: '0-1-0',
            icon:<div></div>,
            children:[{
                title: 'Sub Category',
                key: '0-1-0-1',
                icon:<div></div>,
            }]
          },
          {
            title: 'Sub Category',
            key: '0-1-1',
            icon:<div></div>,
          },
        ],
      },
    
  ];

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
const onExpand = (keys, info) => {
    console.log("Trigger Expand", keys, info);};

    return(
        <DirectoryTree
          multiple
          // defaultExpandAll
          showLine
          switcherIcon={<DownOutlined />}
          onSelect={onSelect}
          onExpand={onExpand}
          treeData={treeData}
          titleRender={(treeNode)=>{
            return(
              <div className={styles.itemRenderer}>         
                  <span className={styles.text}>{treeNode.title}</span>
                  {/* <span> */}
                    <MdModeEdit className={styles.icon2} style={{fontSize:'1px'}}/>
                    <Image src={small} width={8} height ={6}  className={styles.icon1}  />
                    <Image src={deleteicon} width={20} height={20} className={styles.icon}/>                  
                  {/* </span>                         */}
              </div>
              )
          }}
          />
        )
}
export default TreeCategogry1