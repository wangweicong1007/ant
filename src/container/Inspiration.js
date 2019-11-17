import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新'},
    { title: '小户型'},
    { title: '个性色彩'}
  ];
  const Ins=({ className = '', ...restProps }) => (
      <div style={{width:"100%"}}>
          {[1,2,3,4,5,6].map(item=>(
              <div style={{backgroundColor:"white", width:145,height:150,marginLeft:10,marginTop:10,float:"left",borderRadius:5}}>
                  <img
                  src={require(`../image/lingan${item}.jpg`)}
                  style={{width:145,height:110}}
                  />
                  <img
                  src={require(`../image/touxiang.jpg`)}
                  style={{width:35,height:35}}
                  />
                  <span>儿童房</span>
                  <img
                  src={require(`../image/heart.jpg`)}
                  style={{float:"right",marginTop:5,marginRight:5}}
                  />
              </div>
          ))}
      </div>
  )
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgrounColor:"#e0e0e0"}}>
                        <Ins/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgrounColor:"#e0e0e0"}}>
                        <Ins/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgrounColor:"#e0e0e0" }}>
                        <Ins/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgrounColor:"#e0e0e0" }}>
                        <Ins/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgrounColor:"#e0e0e0" }}>
                        <Ins/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgrounColor:"#e0e0e0" }}>
                        <Ins/>
                    </div>
                    </Tabs>
            </div>
        )
    }
}