import React, { Component } from 'react';
import navstyle from '../css/nav.module.css'
import axios from 'axios';



class Navigation extends Component {
    state = {
        id: "nav_bar"
    }
    states= {
        mem:{data:{userdata:{m_img:"mem.png"}}},
        car:[]
    }
    render() {

        return (
            <div id={navstyle[this.state.id]}>
                <a href="/"><img id={navstyle["logo"]} src="/image/logo.png" alt="" /></a>
                <div id={navstyle['selnav']} >
                    <ul id={navstyle["navul"]}>
                        <a href="/"><li className={navstyle.tili}>首頁</li></a>
                        <li className={navstyle.tili}>所有商品
                            <ul>
                                <a href="/product/all"><li className={navstyle.conli}>裝備出租</li></a>
                                <a href="/product2/all"><li className={navstyle.conli}>食材購買</li></a>
                            </ul>
                        </li>
                        <li className={navstyle.tili}>租借內容
                            <ul>
                                <a href="/process"><li className={navstyle.conli}>租借流程</li></a>
                                <a href="/rules" ><li className={navstyle.conli}>租借規範</li></a>

                            </ul>
                        </li>

                        <li className={navstyle.tili}>表單訂購
                            <ul>
                                <a href="/cart"><li className={navstyle.conli}>表單上傳</li></a>
                                <li className={navstyle.conli}>表單填寫
                                    <ul id={navstyle['a']}>                                 
                                        <a href="/excel/HowTo露.xlsx" download><li >Excel表單下載</li></a>

                                    </ul>
                                </li>

                            </ul>
                        </li>



                    </ul>
                </div>
                <div id={navstyle['nav_icon']}>

                    <div id="navcartnum" className={navstyle.navcartnum}>
                        <span >{this.states.car.length}</span>
                  
                        
                    </div>
                    <a href="/cart"> <button id={navstyle['navcarbtn']}></button></a>
                    <button id={navstyle['navmembtn']} onClick={this.btnmem}><img id='navmemimg' src={`/image/${this.states.mem.data.userdata.m_img }`} className={navstyle.navmemimg} /></button>
                    <ul id='memulin' className={navstyle.memul}>
                        <a href="/login"><li>會員登入</li></a>
                        <a href="/register"><li>註冊會員</li></a>
                    </ul>
                    <ul id='memulout' className={navstyle.memul}>
                        <a href="/info"><li className={navstyle.conli}>會員資料</li></a>
                        <a href="/order_list"><li className={navstyle.conli}>訂單查詢</li></a>
                        <a href="/" onClick={this.logoutbtn}><li>會員登出</li></a>

                    </ul>

                </div>
            </div>
        );
    }

    btnmem = () => {
       

       
        if ( sessionStorage.getItem('account') && sessionStorage.getItem('account')==this.states.mem.data.userdata.tel) {
       
            if (document.getElementById("memulout").style.display == "block") {
                document.getElementById("memulout").style.display = "none";
            } else {
                document.getElementById("memulout").style.display = "block";
            }
        }
        else {

            if (document.getElementById("memulin").style.display == "block") {
                document.getElementById("memulin").style.display = "none";
            } else {
                document.getElementById("memulin").style.display = "block";
            }
        } 
    }

    logoutbtn = () => {
        sessionStorage.clear();

    }
    componentDidMount=async ()=>{
        if (sessionStorage.getItem('account')) {
            const account = sessionStorage.getItem('account')
            const response = await axios.get(`http://localhost:8000/info?account=${account}`);
            var newStates={...this.states}
            newStates.mem=response;
            var a=( newStates.mem.data.userdata.m_img )? newStates.mem.data.userdata.m_img :"mem.png"
            this.states.mem.data.userdata= newStates.mem.data.userdata
            this.states.mem.data.userdata.m_img=a
            
            this.setState(newStates.mem)
        
        }


        if (sessionStorage.getItem('account')) {
        var result=await axios.get("http://localhost:8000/cart")      
            this.states.car= result.data.filter((x)=>x.tel==sessionStorage.getItem('account'))
             var  navcartnum=document.getElementById("navcartnum")
             this.setState(this.states.car)
             if(this.states.car.length>=1){
                navcartnum.style.visibility="visible";
            }else{    
                navcartnum.style.visibility="hidden";
             }
            }
    }
    

}

export default Navigation;