(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d4c6998"],{"8ddd":function(t,a,n){"use strict";var s=n("f0d5"),i=n.n(s);i.a},a4d5:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"StatStrategy"}},[t._m(0),n("p",[t._v("주식스탯으로 세워보는 나만의 전략")]),n("hr"),t._m(1),t.chartOn?t._e():n("b-button",{staticClass:"graphBtn",attrs:{variant:"outline-info"},on:{click:t.showRadar}},[t._v("그래프 보기")]),t.chartOn?n("b-button",{staticClass:"graphBtn",attrs:{variant:"outline-info"},on:{click:t.hideRadar}},[t._v("그래프 숨기기")]):t._e(),n("div",[n("span",{staticClass:"statBtnContainer"},[n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(0,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(0,1)}}}),n("span",{staticClass:"statName"},[t._v("사이즈")]),n("b-button",{staticClass:"helpBtn",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(a){return t.popupInfo(0)}}},[t._v("?")]),n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(0,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(0,1)}}}),n("span",{attrs:{id:"scope0"}},[t._v(t._s(t.MinStat[0])+" ~ "+t._s(t.MaxStat[0]))])],1),n("br"),n("br"),n("span",{staticClass:"statBtnContainer"},[n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(1,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(1,1)}}}),n("span",{staticClass:"statName"},[t._v("거래량")]),n("b-button",{staticClass:"helpBtn",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(a){return t.popupInfo(1)}}},[t._v("?")]),n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(1,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(1,1)}}}),n("span",{attrs:{id:"scope1"}},[t._v(t._s(t.MinStat[1])+" ~ "+t._s(t.MaxStat[1]))])],1),n("br"),n("br"),n("span",{staticClass:"statBtnContainer"},[n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(2,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(2,1)}}}),n("span",{staticClass:"statName"},[t._v("모멘텀")]),n("b-button",{staticClass:"helpBtn",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(a){return t.popupInfo(2)}}},[t._v("?")]),n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(2,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(2,1)}}}),n("span",{attrs:{id:"scope2"}},[t._v(t._s(t.MinStat[2])+" ~ "+t._s(t.MaxStat[2]))])],1),n("br"),n("br"),n("span",{staticClass:"statBtnContainer"},[n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(3,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(3,1)}}}),n("span",{staticClass:"statName"},[t._v("저평가")]),n("b-button",{staticClass:"helpBtn",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(a){return t.popupInfo(3)}}},[t._v("?")]),n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(3,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(3,1)}}}),n("span",{attrs:{id:"scope3"}},[t._v(t._s(t.MinStat[3])+" ~ "+t._s(t.MaxStat[3]))])],1),n("br"),n("br"),n("span",{staticClass:"statBtnContainer"},[n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(4,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(4,1)}}}),n("span",{staticClass:"statName"},[t._v("성장성")]),n("b-button",{staticClass:"helpBtn",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(a){return t.popupInfo(4)}}},[t._v("?")]),n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(4,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(4,1)}}}),n("span",{attrs:{id:"scope4"}},[t._v(t._s(t.MinStat[4])+" ~ "+t._s(t.MaxStat[4]))])],1),n("br"),n("br"),n("span",{staticClass:"statBtnContainer"},[n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(5,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"info"},on:{click:function(a){return t.MinStatAdjust(5,1)}}}),n("span",{staticClass:"statName"},[t._v("수익성")]),n("b-button",{staticClass:"helpBtn",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(a){return t.popupInfo(5)}}},[t._v("?")]),n("b-button",{staticClass:"pe-7s-angle-left-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(5,0)}}}),n("b-button",{staticClass:"pe-7s-angle-right-circle",attrs:{variant:"danger"},on:{click:function(a){return t.MaxStatAdjust(5,1)}}}),n("span",{attrs:{id:"scope5"}},[t._v(t._s(t.MinStat[5])+" ~ "+t._s(t.MaxStat[5]))])],1)]),n("b-button",{attrs:{variant:"primary",id:"findStockBtn"}},[t._v("종목 찾기")]),n("b-button",{attrs:{variant:"focus",id:"recommendBtn"},on:{click:t.showRecommend}},[t._v("추천 전략 보기")]),n("b-button",{attrs:{variant:"warning",id:"rankManualBtn"},on:{click:t.rankManualPopup}},[t._v("점수 산정기준")])],1)},i=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h1",[t._v("\n        주식스탯전략 시뮬레이터"),n("br")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticStyle:{display:"none"},attrs:{id:"graphzone"}},[n("canvas",{attrs:{id:"Radar",width:"300",height:"300"}})])}],r=(n("a481"),n("30ef")),e=n.n(r),c={name:"StatStrategy",data:function(){return{MinStat:[1,1,1,1,1,1],MaxStat:[2,2,2,2,2,2],StatInfo:[],date:"",chart:"",chartOn:!1}},methods:{StatInfoInit:function(){var t="사이즈는 주식에 있어서 빠질 수 없는 요소입니다.\n 기업 규모에 따라서 시장에 미치는 영향이 다르기 때문입니다. 또한 국내 대표적 벤치마크의 대상인 KOSPI 시가총액 가중방식이 때문에 시장을 어느 수준 따라고 싶다면 대형주를 많이 보유하는 것이 좋습니다";this.StatInfo.push(t);var a="거래량은 주식에 있어서 매우 중요한 요소 입니다.\n 아무리 좋은 종목이라도, 주문을 내서 체결될 수 없는 종목이라면 의미가 없기 때문입니다. 거래량이 작을 경우 대량 매수 주문을 낼 경우 손해를 입을 수 있습니다. 만약 운용중인 펀드의 규모가 크다면 거래량을 반드시 고려하는 것이 좋습니다.";this.StatInfo.push(a);var n="주가에는 랠리와 반등구간이 있습니다. 모멘텀 스탯은 최근에 얼마나 올랐느냐에 대한 지표입니다.\n 만약 선택한 종목이 추가적인 상승 모멘텀이 있다고 판단되면 최근에 오른 종목을 고르는 것이 좋습니다. 또한 반등을 노리는 컨트래리안 전략을 사용한다면 최근에 하락한 종목을 선택하는 것이 좋습니다.";this.StatInfo.push(n);var s="기업의 내재가치에 비하여 현재 주가가 어떻게 형성되어 있는가를 봅니다.\n 만약 기업의 내재가치에 비하여 최근 주가가 높다면 이는 고평가 되어 있다는 뜻이고, 내재가치에 비하여 최근 주가가 낮다면 기업이 저평가 되어 있다는 뜻입니다. 이를 판단하기 위하여 투자지표인 PER을 사용합니다. 다만 PER을 전체 주식에 대하여 동일한 기준으로 적용하는 것은 무리가 있습니다. 똑같은 PER 10이라도 제조업과 은행업의 그것은 다른 의미이기 때문입니다. 따라서 동일한 업종 내의 상대적인 값을 사용합니다.";this.StatInfo.push(s);var i="장기투자를 목적으로 한다면 당연히 기업의 성장성을 염두하셔야 합니다.\n 주가란 기업의 미래가치에 대한 현재의 기대이기 때문입니다. 지난해에 비해 올해 매출액이나 영업이익이 큰 폭으로 성장한 기업이라면 당연히 주가 역시 상승할 종목입니다. 다만 성장성 스코어는 최근 결산 기준의 재무데이터를 사용하기 때문에 주가에 대부분 선반영 되어 있습니다. 따라서 장기 투자 시에 고려해야 할 요소입니다. 성장성은 업종마다 특이성이 존재하기 때문에 동일업종 내의 상대적인 값을 사용합니다.";this.StatInfo.push(i);var r="주가란 결국 그 기업이 앞으로 얻게 될 현금들의 현재 시점의 기대값입니다.\n 그럼 이 종목이 얼마나 돈을 잘 버는 기업인지를 판단하는 것이 중요하겠지요. 투자한 금액 대비 기업이 얼마나 많은 이익을 창출하고 있는지를 확인하기 위하여 ROE, ROI 와 같은 투자지표를 사용합니다. ROE는 업종마다 특이성이 존재하기 때문에, 수익성을 판단하기 위해 동일업종 내의 상대적인 값을 사용합니다.";this.StatInfo.push(r)},popupInfo:function(t){0==this.StatInfo.length&&this.StatInfoInit(),alert(this.StatInfo[t])},rankManualPopup:function(){var t="Score 5 : 해당스탯 상위 20% 이내\nScore 4 : 해당스탯 상위 40% 이내\nScore 3 : 해당스탯 상위 60% 이내\nScore 2 : 해당스탯 상위 80% 이내\nScore 1 : 그 외";alert(t)},MinStatAdjust:function(t,a){if(1==a){if(this.MaxStat[t]==this.MinStat[t])return void alert("Min값은 Max값보다 커질 수 없습니다.");this.MinStat[t]++,this.MinStat[t]>5&&(this.MinStat[t]=5),this.calculateRadar()}else if(0==a){if(0==this.MinStat[t])return;this.MinStat[t]--,this.calculateRadar()}var n;n=this.MinStat[t]==this.MaxStat[t]?this.MinStat[t]:this.MinStat[t]+"~"+this.MaxStat[t],document.getElementById("scope"+t).innerHTML=n},MaxStatAdjust:function(t,a){if(1==a)this.MaxStat[t]++,this.MaxStat[t]>5&&(this.MaxStat[t]=5),this.calculateRadar();else if(0==a){if(this.MinStat[t]==this.MaxStat[t])return void alert("Max값은 Min값보다 작아질 수 없습니다.");if(0==this.MaxStat[t])return;this.MaxStat[t]--,this.calculateRadar()}var n;n=this.MinStat[t]==this.MaxStat[t]?this.MinStat[t]:this.MinStat[t]+"~"+this.MaxStat[t],document.getElementById("scope"+t).innerHTML=n},calculateRadar:function(){var t=document.getElementById("Radar");new e.a(t,{type:"radar",data:{labels:["사이즈","거래량","모멘텀","저평가","성장성","수익성"],datasets:[{label:"Min",backgroundColor:"#fff",borderColor:"#6CC3D5",pointBackgroundColor:"#6CC3D5",pointBorderColor:"#fff",data:this.MinStat},{label:"Max",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"#FF7851",pointBackgroundColor:"#FF7851",pointBorderColor:"#fff",data:this.MaxStat}]},options:{tooltips:!1,hover:!1,scale:{ticks:{min:0,max:5,stepSize:1}},responsive:!1}})},showRadar:function(){this.chartOn=!0,document.getElementById("graphzone").style.display="",this.calculateRadar()},hideRadar:function(){this.chartOn=!1,document.getElementById("graphzone").style.display="none"},showRecommend:function(){location.replace("/pages/Recommend")}}},o=c,l=(n("8ddd"),n("2877")),u=Object(l["a"])(o,s,i,!1,null,"0e5cfe1a",null);a["default"]=u.exports},f0d5:function(t,a,n){}}]);