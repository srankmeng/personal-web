(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{325:function(n,t,e){"use strict";e.r(t);var o={name:"Navbar",data:function(){return{isOpenMenu:!1}},methods:{onToggleMenu:function(){this.isOpenMenu=!this.isOpenMenu},goTo:function(n){this.isOpenMenu=!1;var element=document.getElementById(n),t=document.body.getBoundingClientRect().top,e=element.getBoundingClientRect().top-t-64;window.scrollTo({top:e,behavior:"smooth"})}}},r=e(34),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{staticClass:"fixed top-0 w-full z-50 bg-gray-800"},[e("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[e("div",{staticClass:"relative flex items-center justify-between h-16"},[e("div",{staticClass:"absolute inset-y-0 left-0 flex items-center sm:hidden"},[e("button",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            p-2\n            rounded-md\n            text-gray-400\n            hover:text-white hover:bg-gray-700\n            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n          ",attrs:{type:"button","aria-controls":"mobile-menu","aria-expanded":"false"},on:{click:n.onToggleMenu}},[e("span",{staticClass:"sr-only"},[n._v("Open main menu")]),n._v(" "),e("svg",{staticClass:"block h-6 w-6",class:["h-6 w-6",{block:!n.isOpenMenu,hidden:n.isOpenMenu}],attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),n._v(" "),e("svg",{class:["h-6 w-6",{block:n.isOpenMenu,hidden:!n.isOpenMenu}],attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),n._v(" "),e("div",{staticClass:"\n          flex-1 flex\n          items-center\n          justify-center\n          sm:items-stretch sm:justify-end\n        "},[e("div",{staticClass:"hidden sm:block sm:ml-6"},[e("div",{staticClass:"flex space-x-4"},[e("span",{staticClass:"\n                text-gray-300\n                hover:bg-gray-700 hover:text-white\n                px-3\n                py-2\n                rounded-md\n                text-sm\n                font-medium\n                cursor-pointer\n              ",on:{click:function(){return n.goTo("contact")}}},[n._v("Contact")]),n._v(" "),e("span",{staticClass:"\n                text-gray-300\n                hover:bg-gray-700 hover:text-white\n                px-3\n                py-2\n                rounded-md\n                text-sm\n                font-medium\n                cursor-pointer\n              ",on:{click:function(){return n.goTo("portfolio")}}},[n._v("Portfolio")]),n._v(" "),e("span",{staticClass:"\n                text-gray-300\n                hover:bg-gray-700 hover:text-white\n                px-3\n                py-2\n                rounded-md\n                text-sm\n                font-medium\n                cursor-pointer\n              ",attrs:{href:"#"},on:{click:function(){return n.goTo("timeline")}}},[n._v("Timeline")]),n._v(" "),e("span",{staticClass:"\n                text-gray-300\n                hover:bg-gray-700 hover:text-white\n                px-3\n                py-2\n                rounded-md\n                text-sm\n                font-medium\n                cursor-pointer\n              ",attrs:{href:"#"},on:{click:function(){return n.goTo("skill")}}},[n._v("Skill")])])])])])]),n._v(" "),n.isOpenMenu?e("div",{staticClass:"sm:hidden",attrs:{id:"mobile-menu"}},[e("div",{staticClass:"px-2 pt-2 pb-3 space-y-1"},[e("span",{staticClass:"\n          text-gray-300\n          hover:bg-gray-700 hover:text-white\n          block\n          px-3\n          py-2\n          rounded-md\n          text-base\n          font-medium\n          cursor-pointer\n        ",on:{click:function(){return n.goTo("contact")}}},[n._v("Contact")]),n._v(" "),e("span",{staticClass:"\n          text-gray-300\n          hover:bg-gray-700 hover:text-white\n          block\n          px-3\n          py-2\n          rounded-md\n          text-base\n          font-medium\n          cursor-pointer\n        ",on:{click:function(){return n.goTo("portfolio")}}},[n._v("Portfolio")]),n._v(" "),e("span",{staticClass:"\n          text-gray-300\n          hover:bg-gray-700 hover:text-white\n          block\n          px-3\n          py-2\n          rounded-md\n          text-base\n          font-medium\n          cursor-pointer\n        ",on:{click:function(){return n.goTo("timeline")}}},[n._v("Timeline")]),n._v(" "),e("span",{staticClass:"\n          text-gray-300\n          hover:bg-gray-700 hover:text-white\n          block\n          px-3\n          py-2\n          rounded-md\n          text-base\n          font-medium\n          cursor-pointer\n        ",on:{click:function(){return n.goTo("skill")}}},[n._v("Skill")])])]):n._e()])}),[],!1,null,null,null);t.default=component.exports}}]);