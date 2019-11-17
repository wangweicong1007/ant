import React, { Component } from 'react'
import { NavBar,Icon,Carousel,Grid,WhiteSpace,SearchBar,WingBlank} from 'antd-mobile';

// 宫格显示图片
const data = [
    {
        "icon":require('../image/gongge1.jpg'),text:"桌"
    },
    {
        "icon":require('../image/gongge2.jpg'),text:"床"
    },
    {
        "icon":require('../image/gongge3.jpg'),text:"椅"
    },
    {
        "icon":require('../image/gongge4.jpg'),text:"几"
    },
    {
        "icon":require('../image/gongge5.jpg'),text:"柜"
    },
    {
        "icon":require('../image/gongge6.jpg'),text:"书架"
    },
    {
        "icon":require('../image/gongge7.jpg'),text:"沙发"
    },
    {
        "icon":require('../image/gongge8.jpg'),text:"家居饰品"
    },
    {
        "icon":require('../image/gongge9.jpg'),text:"户外家具"
    },
    {
        "icon":require('../image/gongge10.jpg'),text:"全部分类"
    },

]
export default class AppHome extends Component {
    // 搜索框
    constructor(){
        super();
        this.state = {
            value: '',
        };
    }
    onChange= (value) => {
        this.setState({ value });
    };
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    >商城</NavBar>
                    
                 {/* 轮播图 */}
                 <Carousel
                    autoplay={true}//自动播放
                    infinite
                >
                    {[1,2,3].map(val => (
                        <div
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: 130, backgroundColor:"orange"}}
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
                 {/* 搜索框 */}
                 <WingBlank style={{lineHeight:"44px",width:300,marginLeft:"10px",position:"absolute",top:"45px"}}>
                    <i style={{fontSize:22,float:"left",color:"white"}} className="iconfont iconfenlei"></i>
                <SearchBar
                    placeholder="输入关键字搜索"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    onChange={this.onChange}
                    style={{background:"none",opacity:"0.8"}}
                />
                </WingBlank>
                    {/* 宫格 */}
                <Grid data={data}
                    activeStyle={false}
                    columnNum={5}
                    isCarousel
                    style={{backgroundColor:"black"}}
                />
                <div style={{backgroundColor:"#e3e3e3",height:200}}>
                    <img src={require(`../image/shop1.jpg`)} style={{width:165,height:130,marginTop:10}}/>
                    <img src={require(`../image/shop2.jpg`)} style={{width:165,height:130,float:"right",marginTop:10}}/>
                    <p style={{float:"left",fontSize:12,color:"#7a7a7a"}}>Top Art Studio 欧式风格精细...
                    <p style={{color:'black',fontsize:16,marginTop:5}}>￥39.95</p>
                    </p>
                    <p style={{float:"right",fontSize:12,color:"#7a7a7a"}}>顺顺工艺欧式风格塑料外框黑...
                    <p style={{color:'black',fontsize:16,marginTop:5}}>￥83.99</p>
                    </p>
                </div>
            </div>
        )
    }
}
