"use strict";(globalThis.webpackChunkfreshservice=globalThis.webpackChunkfreshservice||[]).push([[4808,6970],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./app/components/ui-components/ui-accordion/ui-accordion.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ts_dedent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_ui_accordion_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/components/ui-components/ui-accordion/ui-accordion.stories.js");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",p:"p",...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_ui_accordion_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"ui-accordion",children:"UI Accordion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This component can be used where expand/collapse functionality is needed."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Note: This component works as a placeholder with core functionality, user has to provide styles for header and panel area accordingly. We used CannedResponse UI Accordion component styles to demonstrate this."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_ui_accordion_stories__WEBPACK_IMPORTED_MODULE_2__.Default})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{language:"html",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_5__.default`
        <div class="modal-canned-response-carousel-container">
            <UiComponents::UiAccordion
                @onShow={{this.onShow}}
                @onAfterShow={{this.onAfterShow}}
                @animation={{this.animation}}
                as |accordion|>
                    <accordion.item
                        @expandOnInit={{this.expandOnInit}}
                        @isDisabled={{this.isDisabled}}
                        @name={{this.name}}
                        as |item|>
                            <item.header>
                                <div class="accordion-header">
                                    <span class="pull-left {{if item.isExpanded "is-expanded"}}"> {{svg-jar (if item.isExpanded "chevron-up" "chevron-right") class="chevron-icon ember-svg size-16" role="presentation"}} </span>
                                    <span class="item-title ellipsis">This is ui-accordion header</span>
                                </div>
                            </item.header>
                            <div class="accordion-panel">
                                <item.panel>
                                    <p>This is ui-accordion panel description</p>
                                </item.panel>
                            </div>
                    </accordion.item>
            </UiComponents::UiAccordion>
        </div>
    `}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"supported-arguments",children:"Supported Arguments"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./app/components/ui-components/ui-accordion/ui-accordion.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"ui-components/ui-accordion",component:"UiComponentsUiAccordion"},Default={render:(args,{globals:{loadTranslations}})=>({template:Ember.HTMLBars.template({id:"Bm+jojGH",block:'[[[1,"\\n"],[41,[30,0,["translationsLoaded"]],[[[1,"                    "],[10,0],[14,0,"modal-canned-response-carousel-container"],[12],[1,"\\n                        "],[8,[39,1],null,[["@onShow","@onAfterShow","@animation"],[[30,0,["onShow"]],[30,0,["onAfterShow"]],[30,0,["animation"]]]],[["default"],[[[[1,"\\n                                "],[8,[30,1,["item"]],null,[["@expandOnInit","@isDisabled","@name"],[[30,0,["expandOnInit"]],[30,0,["isDisabled"]],[30,0,["name"]]]],[["default"],[[[[1,"\\n                                        "],[8,[30,2,["header"]],null,null,[["default"],[[[[1,"\\n                                            "],[10,0],[14,0,"accordion-header"],[12],[1,"\\n                                                "],[10,1],[15,0,[29,["pull-left ",[52,[30,2,["isExpanded"]],"is-expanded"]]]],[12],[1," "],[1,[28,[35,2],[[52,[30,2,["isExpanded"]],"chevron-up","chevron-right"]],[["class","role"],["chevron-icon ember-svg size-16","presentation"]]]],[1," "],[13],[1,"\\n                                                "],[10,1],[14,0,"item-title ellipsis"],[12],[1,"This is ui-accordion header"],[13],[1,"\\n                                            "],[13],[1,"\\n                                        "]],[]]]]],[1,"\\n                                        "],[10,0],[14,0,"accordion-panel"],[12],[1,"\\n                                            "],[8,[30,2,["panel"]],null,null,[["default"],[[[[1,"\\n                                                "],[10,2],[12],[1,"This is ui-accordion panel description"],[13],[1,"\\n                                            "]],[]]]]],[1,"\\n                                        "],[13],[1,"\\n                                "]],[2]]]]],[1,"\\n                        "]],[1]]]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"            "]],["accordion","item"],false,["if","ui-components/ui-accordion","svg-jar"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:{...args,loadTranslations:loadTranslations()}}),name:"Default",argTypes:{expandOnInit:{type:"boolean",description:"Whether or not to expand this item on init"},isDisabled:{type:"boolean",description:"Whether or not this item should be disabled (user will not be able to expand it)"},animation:{type:"boolean",description:"Whether or not it should animate items"},name:{type:"string",description:"A canonical name to refer to an accordion-item (e.g. 'item-1')"},onShow:{type:"callback",description:"Event triggered when Associate button is pressed",table:{disable:!0}},onAfterShow:{type:"callback",description:"Event triggered when Associate button is pressed",table:{disable:!0}}},args:{expandOnInit:!1,isDisabled:!1,name:"item-1",animation:!0,onShow:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onShow"),onAfterShow:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onAfterShow")}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args, {\n    globals: {\n      loadTranslations\n    }\n  }) => {\n    return {\n      template: hbs`\n                {{#if this.translationsLoaded}}\n                    <div class='modal-canned-response-carousel-container'>\n                        <UiComponents::UiAccordion\n                            @onShow={{this.onShow}}\n                            @onAfterShow={{this.onAfterShow}}\n                            @animation={{this.animation}}\n                            as |accordion|>\n                                <accordion.item\n                                    @expandOnInit={{this.expandOnInit}}\n                                    @isDisabled={{this.isDisabled}}\n                                    @name={{this.name}}\n                                    as |item|>\n                                        <item.header>\n                                            <div class='accordion-header'>\n                                                <span class='pull-left {{if item.isExpanded 'is-expanded'}}'> {{svg-jar (if item.isExpanded 'chevron-up' 'chevron-right') class='chevron-icon ember-svg size-16' role='presentation'}} </span>\n                                                <span class='item-title ellipsis'>This is ui-accordion header</span>\n                                            </div>\n                                        </item.header>\n                                        <div class='accordion-panel'>\n                                            <item.panel>\n                                                <p>This is ui-accordion panel description</p>\n                                            </item.panel>\n                                        </div>\n                                </accordion.item>\n                        </UiComponents::UiAccordion>\n                    </div>\n                {{/if}}\n            `,\n      context: {\n        ...args,\n        loadTranslations: loadTranslations()\n      }\n    };\n  },\n  name: 'Default',\n  argTypes: {\n    expandOnInit: {\n      type: 'boolean',\n      description: 'Whether or not to expand this item on init'\n    },\n    isDisabled: {\n      type: 'boolean',\n      description: 'Whether or not this item should be disabled (user will not be able to expand it)'\n    },\n    animation: {\n      type: 'boolean',\n      description: 'Whether or not it should animate items'\n    },\n    name: {\n      type: 'string',\n      description: \"A canonical name to refer to an accordion-item (e.g. 'item-1')\"\n    },\n    onShow: {\n      type: 'callback',\n      description: 'Event triggered when Associate button is pressed',\n      table: {\n        disable: true\n      }\n    },\n    onAfterShow: {\n      type: 'callback',\n      description: 'Event triggered when Associate button is pressed',\n      table: {\n        disable: true\n      }\n    }\n  },\n  args: {\n    expandOnInit: false,\n    isDisabled: false,\n    name: 'item-1',\n    animation: true,\n    onShow: action('onShow'),\n    onAfterShow: action('onAfterShow')\n  }\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=ui-components-ui-accordion-ui-accordion-mdx.d913c158.iframe.bundle.js.map