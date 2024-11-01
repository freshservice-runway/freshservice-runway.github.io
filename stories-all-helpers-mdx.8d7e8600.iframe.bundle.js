"use strict";(globalThis.webpackChunkfreshservice=globalThis.webpackChunkfreshservice||[]).push([[8706],{"./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>new Promise((resolve=>{react_dom.render(node,el,(()=>resolve(null)))})))(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{var el;el=element,react_dom.unmountComponentAtNode(el)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./app/helpers/stories/all-helpers.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),ts_dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _createMdxContent(props){const _components={code:"code",p:"p",...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"This Doc contains documentation for all helpers in the product"})}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"Helpers/all-helpers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Helper functions are JavaScript functions that you can call from your template. Below is the list of helpers available in our product"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"subheading",children:"Helpers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol",{class:"api-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"add-default-dash"})," - Adds a default dash in case of empty values, else returns the original value passed"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{add-default-dash data}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  // data = 'test'
  output = 'test'
  
  // data = ''
  output = '-'
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"add-default-double-dash"})," - Adds a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"double"})," dash in case of empty values, else returns the original value passed"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{add-default-double-dash data}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  // data = 'test'
  output = 'test'
  
  // data = ''
  output = '--'
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"enumerable-to-string"})," -"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"Returns concatenated string, if plain array"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"Returns concatenated string of values based on given attribute, if array of objects"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:"Returns empty string, otherwise"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{enumerable-to-string params}}
    {{enumerable-to-string params 'name'}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  // {{enumerable-to-string params}} - params = ['foo', 'bar']
  output = 'foo, bar'
  
  // {{enumerable-to-string params 'name'}} - params = [{id: 1, name: 'foo', }, {id: 2, name: 'bar'}]
  output = 'foo, bar'
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"has-temp-feature"})," - temp feature check in the hbs"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{#if (has-temp-feature "onboarding_v2") }}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"incremented"})," - increases 1 with current value "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{incremented index}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  // {{incremented index}} index = 1
  output = 2
  
  // {{incremented index}} index = 5
  output = 6
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"if-exist"})," - Returns custom default string incase of empty value"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{if-exist data}}
    {{if-exist data 'defaultValue'}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  // {{if-exist data}} - data = ""
  output = ""
  
  // {{if-exist data "NA"}} - data = ""
  output = "NA"
  
  // {{if-exist data "NA"}} - data = "Select Group"
  output = "Select Group"
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"debug"})," - logs the params passed and pause the execution of code"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{debug 'test'}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  //logs in console
  'test'
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"to-fixed"})," - rounding off the float value to 2"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{to-fixed number}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  //{{to-fixed number}} number = 234.4677
  output = '235.47'
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"format-currency"})," - rounding off the float value to 2 and replaces dot to comma"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{format-currency number separator}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  //{{format-currency number separator}} number = 235.465 separator = ','
  output = '235,47'
  
  //{{format-currency number separator}} number = 235.465 separator = ''
  output = '235.47'
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"hasfeature"})," - feature check in the hbs"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{#if (hasfeature "service_awareness")}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"is-date-after"})," - compares the 2 dates using moment.js and return true if date1 is after the date2"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
     {{is-date-after date1 date2}}
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  // {{is-date-after date1 date2}} date1 = '2010-10-20' date2 = '2010-10-19'
  output = true
  
  // {{is-date-after date1 date2}} date1 = '2010-10-19' date2 = '2010-10-19'
  output = false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"hasabilities"})," - returns true or false based on the user privilege"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {{hasabilities privilege modelId checkOwnsObject }}
  
    privilege = privilege which needs to be checked
    modelId = workspace id/user id
    checkOwnsObject = value is boolean
     //if checkOwnsObject is true, it checks modelId is user privileged workspace id if esm enabled, if not checks whether the given privilege is user privileged.
     //if checkOwnsObject is false or undefined, it checks above one or checks modelId is equal to current user id. 
  `})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);
//# sourceMappingURL=stories-all-helpers-mdx.8d7e8600.iframe.bundle.js.map