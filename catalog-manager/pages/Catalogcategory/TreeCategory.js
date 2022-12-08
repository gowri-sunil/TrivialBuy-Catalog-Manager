import React, { useEffect, useState } from 'react'
import styles from '../../styles/Category.module.css'
import { Tree } from 'antd';
const { DirectoryTree } = Tree;

import Image from 'next/image'

import { DownOutlined } from '@ant-design/icons';
import { MdModeEdit} from  'react-icons/md';
// import type:{ DataNode, TreeProps } from 'antd/es/tree';


function TreeCategogry() {
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
        title: 'Main Category',
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
  // const treeData= [
  //   {
  //     title: 'Main Category',
  //     key: '0-0',
  //     className:"main-category",
    
  //     // icon:<BsFillFilePlusFill />,
  //     children: [

  //       {
  //         title: 'Sub Category',
  //         key: '0-0-1',
  //         className:"sub-category",
  //         children:[
  //           {
  //             title: 'Sub Category',
  //             key: '0-0-1-1',
  //             className:"sub-subcategory",
          
  //           }
  //         ]
  //       },
  //       {
  //         title: 'Sub Category',
  //         key: '0-0-2',
  //         className:"sub-category",
          
  //       },
  //     ],
  //   },
   
  // ];

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
const onExpand = (keys, info) => {
    console.log("Trigger Expand", keys, info);};
  // const [tree,setTree]=useState(treeData)
  //   const [data,setData]=useState(treeData)

        


    
    




    // useEffect(()=>{
    //   setTree(tree.concat(data))
      
    // },[])

  //   const titleRenderer = (itm, index) => {
  //   return(
  //     <div className={styles.itemRenderer}>
  //       <span>{itm.title}</span>
  //       <div className={styles.treeActions}>
  //         <div className={styles.Category_treeActions_3LHfD}>
  //         <div className={styles.treeIcons1}> 
  //         < MdModeEdit className='icon'/>
  //         </div>
  //         <div className={styles.treeIcons2}>< Image src='/clearedit.png' width="8" height="6" /></div>
  //         <div className={styles.treeIcons3}>< Image src='/delete.png' width="7" height="9" /></div>
  //         </div>
          
  //       </div>
  //     </div>
  //   )
  // }


return(
<DirectoryTree
  multiple
  // defaultExpandAll
  onSelect={onSelect}
  onExpand={onExpand}
  treeData={treeData}
  titleRender={(treeNode)=>{
    return(
      <div>         
          <span className={styles.text}>{treeNode.title}</span>
          <span className={styles.icons}>
                      <MdModeEdit className={styles.icon} />
          <MdModeEdit className={styles.icon1} />
          <MdModeEdit className={styles.icon2} />  
          </span>                        
      </div>
      )
  }}
  />
)
  
      
//   return (
//     <div> 
//       {
//         tree.map((t,i)=>(
//           <Tree
//           key={i}
//           showLine
//           switcherIcon={<DownOutlined />}
//           defaultExpandedKeys={['0-0-0']}
//           onSelect={()=>{}}
//           treeData={data}
//           titleRender = {titleRenderer}
//         />
//       ))
//       }     
//   </div>
//   )
// }
}

export default TreeCategogry


























{/* <div className={style.leftpart}>
<div className={style.createcategory}>
  <div className={style.createname}>Categories</div>
  <div className={style.createbutton}>
    <Button className={style.create_button} onClick={() => this.setState({ visible: true, root_product: false })}>
      <PlusCircleFilled></PlusCircleFilled>New Category
    </Button>
  </div>
</div>
<Tree
  ref={this.tree}
  showLine={true}
  showIcon={true}
  treeData={this.state.treeData}
  onLoad={this.onLoadData} */}