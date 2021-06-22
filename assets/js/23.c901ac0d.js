(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{504:function(t,e,s){"use strict";s.r(e);var n=s(28),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"create-your-own-product-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-your-own-product-type"}},[t._v("#")]),t._v(" Create your own product type")]),t._v(" "),s("p",[t._v("By default Bagisto provides the following product types: simple, configurable, virtual, grouped, downloadable, bundled and bookings."),s("br"),t._v("\nIf the default product types do not meet your requirements, you can create your own product type.")]),t._v(" "),s("h2",{attrs:{id:"steps-to-create-your-own-product-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-create-your-own-product-types"}},[t._v("#")]),t._v(" Steps to create your own product-types")]),t._v(" "),s("p",[t._v("You may access this super-functionality of creating your own product-types by following the points listed below.")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(': To demonstrate the process here, we will be creating a new product-type say "'),s("code",[t._v("coupon")]),t._v('"')]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create your own package, you can check out the "),s("RouterLink",{attrs:{to:"/1.x/packages/create.html"}},[t._v("Package Development")]),t._v(" section if you need help with this.")],1)]),t._v(" "),s("li",[s("p",[t._v("Within the Config folder of your package, create a file "),s("code",[t._v("product_types.php")])])]),t._v(" "),s("li",[s("p",[t._v("Write the below piece of code in it, which is used to add product-type in your project when merged in app/config.php in the root directory. Todo so, you need to refer to further steps.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'coupon'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Coupon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Coupon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Webkul\\Coupon\\Type\\Coupon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sort'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("li",[s("p",[t._v('Below piece of code, let you merge your package config files to the project root "'),s("code",[t._v("config")]),t._v('" folder.')]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeConfigFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/Config/product_types.php'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'product_types'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v('Create "'),s("code",[t._v("Type")]),t._v('" folder within your package, inside the "'),s("code",[t._v("type")]),t._v('" folder create a file with your product-type name "'),s("code",[t._v("Coupon.php")]),t._v('". Basic functions that a product will make use of are declared in "product" package '),s("code",[t._v("type/AbstractType.php")]),t._v(' file. Besides, the user needs some extra functionality then they can define their functions in "'),s("code",[t._v("Coupon.php")]),t._v('" file.')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);