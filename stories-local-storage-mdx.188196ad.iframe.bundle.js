"use strict";(globalThis.webpackChunkfreshservice=globalThis.webpackChunkfreshservice||[]).push([[2642],{"./app/utils/stories/local-storage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ts_dedent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"Utils/local-storage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"subheading",children:"Local Storage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol",{class:"api-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"setModuleDataInLS"})," - sets value in local storage under a module name"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
	import { setModuleDataInLS } from 'freshservice/utils/common';
 
	setModuleDataInLS(moduleName, key, value);
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"getModuleDataFromLS"})," - gets a specific key value under a module name from local storage "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
	import { getModuleDataFromLS } from 'freshservice/utils/common';
 
	getModuleDataFromLS(moduleName, key, defaultValue);
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_3__.default`
 
	//sample invocation
	getModuleDataFromLS(MODULE_CONFIG.tasksCacheKey, this.taskListTableHeaders , []) 
 
	//sample output
	[
		{
			"key": "human_display_id",
			"name": "display_id",
			"label": "Task Display Id",
			"position": 1,
			"fixed": true,
			"frozen": true,
			"selected": true,
			"nested": null,
			"date_only": null,
			"field_type": null,
			"id": "display_id"
		},
		{
			"key": "title",
			"name": "title",
			"label": "Title",
			"position": 1,
			"fixed": true,
			"frozen": true,
			"selected": true,
			"nested": null,
			"date_only": null,
			"field_type": null,
			"id": "title"
		},
	]
`})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent()}}}]);
//# sourceMappingURL=stories-local-storage-mdx.188196ad.iframe.bundle.js.map