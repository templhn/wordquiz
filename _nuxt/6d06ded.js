(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,n,e){"use strict";e.r(n);e(58);var o={season:{titlej:"季節",titlek:"계절",list:[["季節","계절","ケジョル","季節"],["春","봄","ポム"],["夏","여름","ヨルム"],["秋","가을","カウル"],["冬","겨울","キョウル"],["四季","사계절","サゲジョル","四季節"],["元旦","설날","ソルラル"],["春分","춘분","チュンブン","春分"],["秋分","추분","チュブン","秋分"],["夏至","하지","ハジ","夏至"],["冬至","동지","トンジ","冬至"],["梅雨","장마","チャンマ"],["初雪","첫눈","チョンヌン"],["陰暦","음력","ウムニョク","陰曆"],["陽暦","양력","ヤンニョク","陽曆"],["立春","입춘","イプチュン","立春"],["立夏","입하","イパ","立夏"],["立秋","입추","イプチュ","立秋"],["立冬","입동","イプトン","立冬"]]}},r={data:function(){return{shuffled:[],stage:0,page:0,mode:1}},computed:{dictionary:function(){return o}},methods:{init:function(t){this.shuffled=this.shuffle(t.list),this.stage=0},shuffle:function(t){for(var n=[].concat(t),i=0;i<n.length;i++){var e=Math.floor(Math.random()*(i+1)),o=[n[e],n[i]];n[i]=o[0],n[e]=o[1]}return n},move:function(t){void 0!==this.shuffled[this.stage+t]&&(this.stage+=t)},translator:function(text){return!text&&this.shuffled&&this.shuffled[this.stage]&&(text=this.shuffled[this.stage][1]),text?"https://translate.google.com/?sl=ko&tl=ja&text=".concat(text,"&op=translate&hl=ja"):null}},mounted:function(){}},l=e(29),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",[e("button",{attrs:{type:"button"},on:{click:function(n){return t.init(t.dictionary.season)}}},[t._v("スタート")]),t._v(" "),e("button",{attrs:{type:"button"},on:{click:function(n){return t.move(-1)}}},[t._v("前へ")]),t._v(" "),e("button",{attrs:{type:"button"},on:{click:function(n){return t.move(1)}}},[t._v("次へ")]),t._v(" "),t.translator()?e("a",{attrs:{href:t.translator(),target:"translator"}},[t._v("翻訳を見る")]):t._e()]),t._v(" "),e("div",[t._v(t._s(t.shuffled[t.stage]))])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header"},[n("h1",[this._v("韓国語単語帳"),n("span",{staticClass:"small"},[this._v("beta")])])])}],!1,null,null,null);n.default=component.exports}}]);