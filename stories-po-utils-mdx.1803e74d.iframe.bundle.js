"use strict";(globalThis.webpackChunkfreshservice=globalThis.webpackChunkfreshservice||[]).push([[9518],{"./app/utils/stories/po-utils.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ts_dedent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"Utils/po-utils"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"subheading",children:"poUtil"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol",{class:"api-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"addAddressDetails"})," - This method returns the address in a string"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
    import poUtil from 'freshservice/utils/po-utils';
    
    poUtil.addAddressDetails(input);
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
    //sample input
    {
        "No." : 9,
        "street": "test street",
        "pincode": 600119
    }
    
    //sample output
    \`9
    test street
    600119\`
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"addContactDetails"})," - adding existing details with name, email, phone, mobile if presents"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
    import poUtil from 'freshservice/utils/po-utils';
    
    poUtil.addContactDetails(input, output, conditionCheck);
    
    //if conditionCheck is true, name, phone and email will be input.contactName, input.phone, input.email
    //if conditionCheck is false, name, phone and email will be input.name, input.workPhoneNumber, input.primaryEmail
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
    //sample input1
    input = { name: 'test', contactName: 'test1', email: 'test1@gmail.com',primaryEmail: 'test@gmail.com', phone: 2332423, workPhoneNumber: 253242343},
    output = \`1 Infinite Loop
            Cupertino
            California
            United States
            95014\`,
    conditionCheck = false;
 
    //sample output 1
    \`test
    1 Infinite Loop
    Cupertino
    California
    United States
    95014
    test@gmail.com
    253242343\`
 
    //sample input2
    input = { name: 'test', contactName: 'test1', email: 'test1@gmail.com',primaryEmail: 'test@gmail.com', phone: 2332423, workPhoneNumber: 253242343},
    output = \`1 Infinite Loop
            Cupertino
            California
            United States
            95014\`,
    conditionCheck = true;
     
    //sample output 2
    \`test1
    1 Infinite Loop
    Cupertino
    California
    United States
    95014
    test1@gmail.com
    2332423\`
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"parseValue"})," - returns float value if value is present"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
    import poUtil from 'freshservice/utils/po-utils';
    
    poUtil.parseValue(input);
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
    //sample input1
    input = 35.50;
    
    //sample output1
    35.50
    
    //sample input2
    input = undefined;  
    
    //sample output2
    0
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"roundFloat"})," - returns rounded off float values"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
    import poUtil from 'freshservice/utils/po-utils';
    
    poUtil.roundFloat(input, 2);
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
    //sample input1
    input = 35.5233, 2
    //sample output1
    35.52
    
    //sample input2
    input = 35.5233, 1
    //sample output2
    35.5
    
    //sample input3
    input = 66.6698 1
    //sample output3
    66.7
`})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent()}}}]);
//# sourceMappingURL=stories-po-utils-mdx.1803e74d.iframe.bundle.js.map