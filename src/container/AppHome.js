import React, { Component } from 'react'
import { NavBar,Carousel ,WhiteSpace } from 'antd-mobile';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    >住吧家居</NavBar>

                 {/* 轮播图 */}
                 <Carousel
                    autoplay={true}//自动播放
                    infinite
                    dotStyle={{width:"30px",height:"5px",borderRadius:"0",background:"#ededed"}}//右边条
                    dotActiveStyle={{width:"30px",height:"5px",borderRadius:"0",background:"#3fcccb"}}//左边条
                >
                    {[1,2].map(val => (
                        <div
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: 150 }}
                        >
                            <img
                                src={require(`../image/lunbo${val}.jpg`)}
                                alt=""
                                style={{ width: '100%',height:'100%', verticalAlign: 'top' }}//轮播图大小
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });//可以根据图片高度
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
                <div style={{width:"100%" , height:120}} >
                    {[1,2,3].map(item=>(
                        <div>
                            <img  
                            src={require(`../image/zhongjian${item}.jpg`)}
                            style={{width:100,height:90,marginTop:16,marginLeft:12,float:"left"}}
                            alt="" />   
                        </div>
                    ))}
                </div>
                <div style={{backgroundColor:"white",width:"100%",height:50}}>
                    <span style={{float:"left",color:"#3fcccb",fontSize:28,marginTop:8}}>|</span>
                    <p style={{fontSize:20,float:"left",marginLeft:20,marginTop:15}}>热门推荐</p>
                </div>
                <div style={{position:"relative",height:150,overflow:"hidden",width:"100%"}}>
                    <img
                    src={require(`../image/remen.jpg`)}
                    style={{width:"100%",marginTop:-10,float:"left"}}
                    />
                    <div style={{backgroundColor:'black',width:"100%",position:"absolute",opacity:0.3}}><p style={{color:'#fff',paddingTop:110,fontWeight:"bolder"}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p></div>
                </div>
            </div>
        )
    }
}