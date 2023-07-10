import React, { Component } from 'react';
import footstyle from '../css/footer.module.css'
class footer extends Component {
    state = {  } 
    render() { 
        return ( 
            <>
            <div id="footprivacy" className={footstyle.footprivacy}>
            <div className={footstyle.footin}>
                <h3>隱私權政策</h3>
                <div>
                    
                    <p> HowTO露（以下簡稱本網站）非常重視會員的隱私權，對於您所提供的個人資料，謹遵守「個人資料保護法」及相關法令之規範來蒐集、利用並維護您的隱私權，您可以參照以下露營樂的隱私權政策，了解我們的具體措施。
                        
                        本網站所取得的個人資料，依照原來所說明的使用目的和範圍運用。非經您允許或依照相關法律規定，本網站不會將使用者個人資料提供給第三人、或移作其他目的使用，並且嚴禁內部人員私自使用這些資料。</p>
                        
                    
                    
                        <p>◎客戶資料之蒐集目的</p>
                        
                        <p>我們僅會在提供商品銷售、金融交易授權、物流配送、廣告行銷、市場分析、贈獎活動、會員相關 權益通知、或其他附隨以上各樣服務及其他未來所有可能衍生之服務時，為作業之必要運用您的個人資料。
                        </p>
                        
                        
                        <p>◎客戶資料之取得方式</p>
                        
                        <p>非經您同意，本網站不會在未明確告知的情況下，收集您的任何個人資料。本網站的伺服器會自動記錄您上站的位址及在相關網站內的瀏覽活動紀錄，以便我們進行網站流量和網路行為的分析，進而改善相關網站內的服務品質，此類資訊也只用來進行數據統計分析，不涉及個人身分資料。
                            
                            當您註冊會員或消費時所提供您的姓名、性別、出生年月日、聯絡電話、聯絡地址、電子郵件信箱及其他您主動提供之資料，我們會留存您的個人資料，加以保護您的隱私權利。如您拒絕提供加入會員所需必要之資料，將可能導致無法享受完整服務或完全無法使用該項服務。
                        </p>
                        
                        
                        <p>◎客戶資料利用之期間、地區、對象及方式</p>
                        
                        <p>(1)利用期間：會員當事人要求停止使用或露營樂停止提供服務之日為止。</p>
                        
                        <p>(2)利用地區：會員之個人資料將用於台灣地區。</p>
                        
                        <p>  (3)利用對象及方式：</p>
                        
                        <p>   我們會於提供客戶商品銷售、金融交易授權、物流配送、廣告行銷及會員相關權益通知時，在露營樂及合作之金融機構間、合作廠商等服務提供者間，為作業之必要運用客戶的基本資料、配送資料及帳務資料。</p>
                        <p>   我們可能為增進提供客戶消費服務品質，進行市場分析、贈獎活動、會員相關權益通知、提供以上服務附隨而來之作業，在本公司內或所委託之其他公司，運用您同意提供的基本資料、其他資料。</p>
                        
                        
                        <p>  ◎會員就個人資料得以行使之權利</p>
                        
                        <p>  當您個人資料有變更、或發現個人資料不正確的時候，您可隨時利用會員區的功能，進行個人資料的修改與維護，包括要求停止寄發電子報及活動快訊等，您亦可與本網站客服中心連繫進行資料變更。</p>  
                        
                        <p>    會員如欲行使查詢、閱覽、請求製給複製本、請求補充或更正、請求停止蒐集處理或利用、請求刪除等權利時，請來電本網站客服中心提出申請，並填具申請文件，本網站得向您請求提出可資確認之身份證明文件以供查驗。</p>
                    
                        
                        
                        <p>   ◎資料安全</p>
                        
                        <p>為保障會員的隱私及安全，露營樂會員帳號資料會用密碼保護，並盡力以合理之技術及程序，保障所有個人資料之安全。</p>
                        
                        
                        
                        <p> ◎與外站連結</p>
                        
                        <p> 本網站所提供之隱私權保障政策，並不包括本網站內所連結之其他網站及網頁，對於此等不屬於「露營樂網站」之網站或網頁，本網站將會秉持相關法令及隱私權政策進行。</p>
                        
                        
                        
                        <p> ◎程式的使用</p>
                        
                        <p> 為了便利使用者，本網站可能使用cookie技術，以便於提供更適合會員所需要的服務；是網站伺候器用來和使用者瀏覽器進行溝通的一種技術，它可能在使用者的電腦中儲存某些資訊，但是使用者可以自由經由瀏覽器的設定，取消、或限制此項功能。</p>
                        
                        
                        
                        <p>◎隱私權政策的生效與修改</p>
                        
                        <p> 這份隱私權的保障政策從2015年9月1日生效，但因應外在環境變遷與科技的進步，本網站為保護會員隱私及配合服務需要，將保留修改這份政策的權利；當本政策有任何修改時，我們將會在網站上公告。如本政策的任何變更導致您無法接受時，您可與本網站客服中心為您取消會員資格，否則將代表您同意經過修改之內容。</p>
                        <button onClick={this.footerclose}>I agree</button>
                        <br/><br/>
                    </div>
                </div>
            </div>
        <div id={footstyle["footerdiv"]}>
        <br/><br/>
    <p>店家資訊：台中市南屯區公益路二段51號</p>
    <p>電話：(04)2326-5860</p>
    <p>營業時間：09：00 ～ 21：00</p>
    <button onClick={this.footer}>隱私條款</button>
    <br/>
    <br/>
    </div></>);
    }
    footer=()=>{
        document.getElementById("footprivacy").style.display="block"   
    }
    footerclose=()=>{
        document.getElementById("footprivacy").style.display="none"   
    }
    
}
 
export default footer;