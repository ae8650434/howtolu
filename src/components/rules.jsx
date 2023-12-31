import React from 'react';
import './public/css/nav.css';
import './public/css/rule.css';
function Navigation() {
    return (
      <div id="nav_bar">
        <a href="/index.html">
          <img id="logo" src="./public/image/logo-removebg-preview.png" alt="" />
        </a>
        <div id="selnav">
          <ul id="navul">
            <a href="/index.html">
              <li className="tili">首頁</li>
            </a>
            <a className="nava" href="">
              <li className="tili">
                所有商品
                <ul>
                  <a href="/index.html">
                    <li className="conli">設備出租</li>
                  </a>
                  <a href="">
                    <li className="conli">食材購買</li>
                  </a>
                </ul>
              </li>
            </a>
            <a className="nava" href="">
              <li className="tili">
                租借內容
                <ul>
                  <a href="">
                    <li className="conli">租借流程</li>
                  </a>
                  <a href="">
                    <li className="conli">租借規範</li>
                  </a>
                </ul>
              </li>
            </a>
            <a href="">
              <li className="tili">
                表單訂購
                <ul>
                  <a href="">
                    <li className="conli">表單上傳</li>
                  </a>
                  <li className="conli">
                    表單填寫
                    <ul id="a">
                      <a href="">
                        <li>Google表單</li>
                      </a>
                      <a href="./public/image/logo-removebg-preview.png" download>
                        <li>Excel表單下載</li>
                      </a>
                    </ul>
                  </li>
                </ul>
              </li>
            </a>
            <li className="tili">
              <a href="">會員專區
                <ul>
                  <a href="">
                    <li className="conli">會員資料</li>
                  </a>
                  <a href="">
                    <li className="conli">訂單查詢</li>
                  </a>
                </ul>
              </a>
            </li>
          </ul>
        </div>
        <div id="nav_icon">
          <a href="/index.html">
            <button id="navcarbtn"></button>
          </a>
          <button id="navmembtn"></button>
          <ul id="memul" className="memul">
            <a href="">
              <li>會員登入</li>
            </a>
            <a href="">
              <li>註冊會員</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
  
const RulePage = () => {
  return (
    <div>
      <div id="nav_bar">
        {/* ... (略，保留原有的NavBar部分) ... */}
      </div>

const RulePage = () => {
  return (
    <div>
      <div id="nav_bar">
        <a href="/index.html"> <img id="logo" src="./public/image/logo-removebg-preview.png" alt="" /></a>
        <div id="selnav">
          <ul id="navul">
            <a href="./index.html">
              <li className="tili">首頁</li>
            </a>
            <a className="nava" href="">
              <li className="tili">所有商品
                <ul>
                  <a href="./product.html">
                    <li className="conli">設備出租</li>
                  </a>
                  <a href="./product2.html">
                    <li className="conli">食材購買</li>
                  </a>
                </ul>
              </li>
            </a>
            <a className="nava" href="">
              <li className="tili">租借內容
                <ul>
                  <a href="./process.html">
                    <li className="conli">租借流程</li>
                  </a>
                  <a href="./rule.html">
                    <li className="conli">租借規範</li>
                  </a>
                </ul>
              </li>
            </a>

            <a href="">
              <li className="tili">表單訂購
                <ul>
                  <a href="">
                    <li className="conli">表單上傳</li>
                  </a>
                  <li className="conli">表單填寫
                    <ul id="a">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBpC90D4LAPmwi5iGMOShmuA6D1Lj0IvsvNUr7HUmzzhWzrQ/viewform?usp=sharing">
                        <li>Google表單</li>
                      </a>
                      <a href="./public/image/logo-removebg-preview.png" download>
                        <li>Excel表單下載</li>
                      </a>
                    </ul>
                  </li>
                </ul>
              </li>
            </a>

            <li className="tili"><a href="">會員專區
                <ul>
                  <a href="./Info.html">
                    <li className="conli">會員資料</li>
                  </a>
                  <a href="./Order.html">
                    <li className="conli">訂單查詢</li>
                  </a>
                </ul>
            </li></a>

          </ul>
        </div>
        <div id="nav_icon">
          <a href="./cart.html"> <button id="navcarbtn"></button></a>
          <button id="navmembtn"></button>
          <ul id="memul" className="memul">
            <a href="./Login.html">
              <li>會員登入</li>
            </a>
            <a href="./Register.html">
              <li>註冊會員</li>
            </a>
          </ul>
        </div>
      </div>
      <div id="rule">
        <h1>租借規範</h1>
        <hr />
        <div className="container">
          <div className="card">
            <div className="card--header"><p>一、租金及費用計算</p></div>
            <div className="card--body">
              <p>租金條款:承租人租用How To 露裝備時,租借天數與租金價格參照租借裝備頁各裝備價格。</p>
              <p>賠償金額:How To 露有權追索相關賠償因租賃關係所生之一切債權、損害賠償及逾期產生之費用。 (詳細賠償規則參照第六點規範)</p>
            </div>
          </div>
          <div className="card">
            <div className="card--header"><p>​二、取貨與歸還</p></div>
            <div className="card--body">
              <p>租賃方式為店面取件,請事先跟How To 露預約</p>
              <p>取件者,請當場檢查裝備情況,經確認無誤後,始得領取裝備。經取件者確認並領取後,由於租品損壞無法逕行判定是否人為因素等,故無法認列本公司租品損壞之責為How To 露,因此歸還物品如有損壞將請客戶逕行賠償,部分裝備如帳篷、天幕等請承租人於取件當日自行檢查確認,若有損壞請拍照留存,並於當日通知How To 露。</p>
              <p className="text-wraning">*延遲歸還:延遲歸還者,視實際歸還日期,以「逾期價格」乘上逾期天數計算延遲費用 (逾期價格=兩倍租金)。</p>
            </div>
          </div>


      <div id="rule">
        <div className="card">
          <div className="card--header"><p>三、領取裝備的注意事項</p></div>
          <div className="card--body">
            <p>How To 露每次出租裝備前,均經過專人清潔、維護及保養,出租裝備非全新品,凡有正常磨損、汙漬,不影響使用功能及安全者,不得視為瑕疵。</p>
            <p>承租人一經取貨離場,如未使用該物品,不得要求退貨及退款。</p>
            <p>因取貨過程皆有點檢,歸還過程不得以商品有瑕疵為由而不賠償損害之責。</p>
            <p>承租裝備歸還時有毀損、遺失、非一般正常使用所產生的髒汙、損壞等情形,承租人應照價維修或賠償。</p>
            <p>租賃品點檢標準:歸還租賃品需無汙 (不得無法或難以清理等狀態)、無損、數量無誤等。</p>
            <p>帳布(含客廳帳及天幕)、帳內地墊、寢具…等租賃裝備如有”非正常使用”髒汙,需酌收清潔費500元。(包含樹液造成帳布染色、內帳腳印、床墊浸水……等因素)</p>
          </div>
        </div>

        <div className="card">
          <div className="card--header"><p>四、退款說明</p></div>
          <div className="card--body">
            <p>特殊情況全額退款:不可抗之天然因素,如颱風、地震等並且由政府公告停班停課 (不含大雨或營主退訂營位等因素),請於政府公告後3天內,自行至How To 露官方Line主動取消訂單,並提供退款銀行資訊</p>
            <p>(非中華郵政扣15元手續費),如無自行取消訂單,視同放棄退款權利。</p>
            <p>承租人取消訂單:承租人欲取消訂單,需於官方Line提出,取貨日7天前取消可全額退款,7天內取消將酌收30%租金。若於「取件日」當日取消訂單,則需收取全額租金不得退款。</p>
          </div>
        </div>

        <div className="card">
          <div className="card--header"><p>五、租賃品點檢說明</p></div>
          <div className="card--body">
            <p>取貨點檢 : 取貨時將會由How To 露與承租人點檢裝備並說明使用事宜,部份配件請客戶當場自行點檢以保障承租人權益,承租人如點檢過程沒有注意而導致後續有損耗問題,將列入賠償費用。</p>
            <p>還貨點檢:歸還租賃品需無汙 (不得無法或難以清理等狀態)、無損、數量無誤等。租賃品如有未達租賃品點檢標準,將會收取相關賠償或清潔費用。承租人應依一般物品之通常使用方式操作出租裝備,非依常規使用裝備所產生之危險及損害本公司不負賠償責任。</p>
          </div>
        </div>

        <div className="card">
          <div className="card--header"><p>六、賠償說明</p></div>
          <div className="card--body">
            <p>因租賃關係所生之一切債權、損害賠償及逾期產生之費用,承租人應負償還之責且不得有議。</p>
            <p>歸還租賃品五天內發現有損壞,How To 露有權逕向承租人求償應盡的損害費用。</p>
            <p>裝備維修賠償:如商品損壞程度為可以立即維修之範
            <div className="card">
          <div className="card--header"><p>七、其他</p></div>
          <div className="card--body">
            <p>本契約書條款若有未盡事宜,依有關法令、習慣及誠實原則公平解決之。</p>
            <p>因本契約發生之爭議訴訟時,承租者同意依下列機關之途徑處理</p>
            <p>(一)縣市消費爭議調解委員會調解;(二)台灣台中地方法院為第一審管轄法院。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulePage;

