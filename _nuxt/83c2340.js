(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{306:function(t,e,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(111).default)("951ea536",content,!0,{sourceMap:!1})},328:function(t,e,r){"use strict";r(306)},329:function(t,e,r){var n=r(110)(!1);n.push([t.i,'*{box-sizing:border-box;margin:0;padding:0}html{font-size:62.5%}body{background:#fff;color:#000;font-family:Poppins,sans-serif;min-height:100vh}img{display:block;max-width:100%}.sr-only{height:0;width:0;display:block;min-height:0;min-width:0;opacity:0;padding:0}.rating{display:flex;font-size:2rem}.rating::before{color:#a74d25;content:"★";display:block;margin-right:5px}.preloader{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff;display:flex;justify-content:center;padding-top:50px;z-index:1}.preloader::before{height:50px;width:50px;animation:spin 1s ease-in-out infinite;border:3px solid #693427;border-radius:50%;border-top-color:#fff;content:"";display:inline-block}.container{margin:0 auto;max-width:1280px;padding:0 20px}@keyframes spin{to{transform:rotate(360deg)}}.article{padding-bottom:50px;position:relative}.article__content{align-items:flex-start;background-color:#fff;border-radius:20px;box-shadow:0 1px 4px rgba(0,0,0,.16);display:flex;padding:30px}@media screen and (max-width: 767px){.article__content{display:block}}.article__picture{border-radius:20px;display:block;flex-shrink:0;overflow:hidden;width:400px}@media screen and (max-width: 1279px){.article__picture{width:300px}}@media screen and (max-width: 767px){.article__picture{margin-bottom:20px;width:100%}}.article__picture img{width:100%}.article__block{padding-left:30px}@media screen and (max-width: 767px){.article__block{padding:0}}.article__category{background-color:#a74d25;color:#fff;display:inline-block;font-size:1.5rem;font-weight:500;padding:5px 10px}.article__title{margin-bottom:5px}.article__title-text{font-size:5rem;font-weight:700}@media screen and (max-width: 1279px){.article__title-text{font-size:4rem}}.article__brand{font-size:1.4rem;margin-bottom:15px}.article__description{font-size:1.7rem}.article__bottom{align-items:center;display:flex;justify-content:space-between;margin-top:20px}.article__price{font-size:4rem}',""]),t.exports=n},340:function(t,e,r){"use strict";r.r(e);r(28),r(48),r(44),r(35),r(14),r(67),r(34),r(68);var n=r(8),o=r(26),c=(r(45),r(69));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{isLoaded:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({item:"product/getProductItem"})),created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("product/fetchProductItem",t.$route.params.id);case 2:t.isLoaded=!0;case 3:case"end":return e.stop()}}),e)})))()}},_=d,f=(r(328),r(53)),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"article"},[t.isLoaded?t._e():e("div",{staticClass:"preloader"}),e("div",{staticClass:"article__container container"},[e("div",{staticClass:"article__content"},[e("picture",{staticClass:"article__picture"},[e("img",{attrs:{src:t.item.thumbnail}})]),e("div",{staticClass:"article__block"},[e("h1",{staticClass:"article__title"},[e("span",{staticClass:"article__category"},[t._v(t._s(t.item.category))]),e("span",{staticClass:"sr-only"},[t._v(":")]),e("span",{staticClass:"article__title-text"},[t._v(t._s(t.item.title))])]),e("p",{staticClass:"article__brand"},[t._v(t._s(t.item.brand))]),e("p",{staticClass:"article__description"},[t._v(t._s(t.item.description))]),e("div",{staticClass:"article__bottom"},[e("p",{staticClass:"article__price"},[t._v("$"+t._s(t.item.price))]),e("p",{staticClass:"article__rating rating"},[e("span",{staticClass:"sr-only"},[t._v("Rating :")]),e("span",[t._v(t._s(t.item.rating)+" / 5")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);