(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{469:function(t,e,a){t.exports=a.p+"assets/img/mail-sample.6aa3d730.png"},573:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"change-email-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-email-template"}},[t._v("#")]),t._v(" Change email template")]),t._v(" "),s("p",[t._v("In this section, we are explaining how to change the email templates in Bagisto. As we all know, everyone wants some customization according to their own taste that's why knowing about changing the email template is also quite helpful for some users.")]),t._v(" "),s("h2",{attrs:{id:"email-template-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#email-template-flow"}},[t._v("#")]),t._v(" Email template flow")]),t._v(" "),s("p",[t._v("Before diving into template change first we should know how the email template works in the Bagisto.")]),t._v(" "),s("p",[t._v("There are several mail notification classes like "),s("code",[t._v("CancelOrderAdminNotification")]),t._v(", "),s("code",[t._v("NewCustomerNotification")]),t._v(", and many more present in the "),s("code",[t._v("Webkul\\Admin\\Mail")]),t._v(" namespace. Let's check one of these files, we are taking "),s("code",[t._v("CancelOrderAdminNotification")]),t._v(" class as an example.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Webkul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Queueable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mailable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SerializesModels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancelOrderAdminNotification")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mailable")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Queueable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SerializesModels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Order.\n     *\n     * @var \\Webkul\\Sales\\Contracts\\Order\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Constructor.\n     *\n     * @param  \\Webkul\\Sales\\Contracts\\Order  $order\n     * @return void\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSenderEmailDetails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSenderEmailDetails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("core")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAdminEmailDetails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::app.mail.order.cancel.subject'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::emails.sales.order-cancel-admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("p",[t._v("If you check the "),s("code",[t._v("build()")]),t._v(" method in the above class. You will come to know that the main view file i.e. "),s("code",[t._v("view('shop::emails.sales.order-cancel-admin')")]),t._v(" is loaded from the shop package.")]),t._v(" "),s("p",[t._v("Now check the view file mentioned in the "),s("code",[t._v("view('shop::emails.sales.order-cancel-admin')")]),t._v(" method. If you check at this path "),s("code",[t._v("packages/Webkul/Shop/src/Resources/views/emails/sales/order-cancel-admin.blade.php")]),t._v(", you will get this file. Let's explore this one, if you check this file you will come to know that the main layout component i.e. "),s("code",[t._v("shop::emails.layouts.master")]),t._v(" is used.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::emails.layouts.master'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n@endcomponent\n")])])]),s("p",[t._v("And this is responsible for your layouts. You can also explore that file if you want. Now we will move on to how to change these layouts.")]),t._v(" "),s("h2",{attrs:{id:"changing-email-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-email-template"}},[t._v("#")]),t._v(" Changing email template")]),t._v(" "),s("p",[t._v("Now, we are changing the template. The recommended way to change the template is by overriding the package's view. If you check the above flow you will come to know that all views for emails are defined in the shop package. So we need to override the view for the shop package.")]),t._v(" "),s("p",[t._v("Let's override the view of the same file which we explained above i.e. "),s("code",[t._v("view('shop::emails.sales.order-cancel-admin')")]),t._v(".")]),t._v(" "),s("p",[t._v("As this is a Laravel stuff, Bagisto also registers two locations for your views i.e. the application's "),s("code",[t._v("resources/themes")]),t._v(" directory mentioned in the "),s("code",[t._v("config/themes.php")]),t._v(" and the directory you specify. So, if you are using the "),s("code",[t._v("default")]),t._v(" theme i.e. "),s("code",[t._v("shop")]),t._v(" package, then Bagisto will first check if a custom version of the view has been placed in the "),s("code",[t._v("resources/themes/default")]),t._v(" directory. Then, if the view has not been customized, Bagisto will search the package view directory.")]),t._v(" "),s("p",[t._v("Now, for overriding we are creating the same structure in the application's "),s("code",[t._v("resources/themes/default")]),t._v(" directory.")]),t._v(" "),s("div",{staticClass:"language-directory-structure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- resources/\n  - themes/\n    - default/\n      - views/\n        - emails/\n          - sales/\n            - order-cancel-admin.blade.php\n")])])]),s("p",[t._v("Let's say this file i.e. "),s("code",[t._v("order-cancel-admin.blade.php")]),t._v(" is having some random paragraphs like below,")]),t._v(" "),s("div",{staticClass:"language-order-cancel-admin.blade.php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("...\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro cumque numquam neque dicta quo, accusantium, perferendis sed beatae nesciunt eum impedit vel doloribus dolor excepturi vero tenetur perspiciatis saepe?\n\n...\n")])])]),s("p",[t._v("Now, test the mail.")]),t._v(" "),s("h2",{attrs:{id:"mail-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mail-sample"}},[t._v("#")]),t._v(" Mail Sample")]),t._v(" "),s("p",[s("img",{attrs:{src:a(469),alt:"Mail Sample"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);