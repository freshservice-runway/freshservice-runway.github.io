"use strict";(globalThis.webpackChunkfreshservice=globalThis.webpackChunkfreshservice||[]).push([[2540],{"./app/utils/stories/construct-nested-field-choices.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ts_dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _createMdxContent(props){const _components={code:"code",p:"p",...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Utils/construct-nested-field-choices"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"subheading",children:"Construct Nested field choice"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Used to construct nested field choices based on the input passed in the argument"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol",{class:"api-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"constructNestedFieldChoices"})," - this function takes in an array\nwith nested objects and returns an object with 3 arrays representing 3 levels of nesting"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    import { constructNestedFieldChoices } from 'freshservice/utils/construct-nested-field-choices'
    
    constructNestedFieldChoices(input, output)
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
	// sample Input
	input = [{
    id: 1,
    value: 'Hardware',
    nested_options: [{
      id: 2,
      value: "Computer",
      nested_options: [{
        id: 3,
        value: "Mac"
      }]
    }]
	}], output = { level1: [], level2: [], level3: [] };
	
	//sample output --> output post processing
  output = {
    level1: [{id: 1, value: "Hardware", dependentIds: {choice: [2]}}],
    level2: [{id: 2, value: "Computer", dependentIds: {choice: [3]}}],
    level3: [{id: 3, value: "Mac"]
	}
        
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"constructNestedFieldComponentInput"})," - this function constructs an\nobject which is supported by Ember Dynamic Form - Dependent Field Component"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    import { constructNestedFieldComponentInput } from 'freshservice/utils/construct-nested-field-choices'
    
    constructNestedFieldComponentInput(input, field)
`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
	// sample Input
	input = { 
		level1: [test1, [{id: 1, value: "Hardware", dependentIds: {choice: [1]}}]],
    	level2: [test2, [{id: 2, value: "Computer", dependentIds: {choice: [2]}}]],
    	level3: [test3, [{id: 3, value: "Mac", dependentIds: {choice: [3]}}]]
	}, field = {
		"choices":  [{"id": 19, "nested_options": [],"value": "Other"}],
		"errors": "",
		"fields": [{"id":"c227c",
				"name":"test",
				"label":"test",
				"type":"AUTO_COMPLETE",
				"position":1,
				"required":false,
				"editable":true,
				"visible":true,
				"deleted":false,
				"link":null,
				"placeholder":null,
				"hint":null,
				"field_options":{},
				"filterable":true,
				"searchable":true,
				"parent_id":"3ea4",
				"choices":"[]"}],
		"isUneditable": false,
		"label": "test",
		"required": true,
		"selectedChoice": null,
		"sourceID": "0",
		"sourceName": "ticket",
		"type": "dependent"
	}
	
	//sample output --> output post processing
  	output = {
    	"name":"test",
    	"getChoices": [{"id": "1", "value": "Hardware", "dependentIds": {"choice": [1]}}],
    	"inputType":"power-select-dependent-field",
    	"fieldOptions":{"dependent":true},
    	"disableCamelize":true,
    	"editable":true,
    	"isNested":true,
    	"fields":[{"name": "test2", 
			"editable": true, 
			"getChoices": [
				{ 
				"id": "2", 
				"value": "Computer",  
				"dependentIds": {"choice": ["2"]}
			}], 
			"inputType": "power-select-dependent-field", 
			"fieldOptions": {"dependent": true}, 
			"renderInPlace": true, 
			"optionLabelPath": "value", 
			"disableCamelize": true, 
			"isNested": true, 
			"fields": [{"name": "test3", 
				"editable": true, 
				"getChoices": [{"id": "3", "value": "Mac"}], 
				"inputType": "power-select-dependent-field", 
				"fieldOptions": {"dependent": true}, 
				"optionLabelPath": "value", 
				"renderInPlace": true, 
				"fields": [], 
				"disableCamelize": true, 
				"isNested": true
				}]
			}]
		}
  `})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);
//# sourceMappingURL=stories-construct-nested-field-choices-mdx.6eb05de9.iframe.bundle.js.map