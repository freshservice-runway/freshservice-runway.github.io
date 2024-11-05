"use strict";(globalThis.webpackChunkfreshservice=globalThis.webpackChunkfreshservice||[]).push([[4234],{"./app/services/stories/current-account.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ts_dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _createMdxContent(props){const _components={code:"code",p:"p",...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"This is an example of services documentation"})}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Services/current-account"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Current account Service is used as a singleton entity which stores the account related details"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"subheading",children:"Apis"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ol",{class:"api-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"accountData"})," - provides the current account data"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.accountData
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"json",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
  {
    "id": 1,
    "full_domain": "localhost.freshservice-dev.com",
    "helpdesk_name": "Test Account",
    "name": "Test Account",
    "time_zone": "Chennai",
    "language": "en",
    "product": "freshservice",
    "date_format": 1,
    "time_format": "12h",
    "currency_symbol": "$",
    "supported_languages": "[]",
    "custom_translations": {
        "module_names": "module_names_appear_here"
    },
    "sandbox_account": false,
    "marketplace": {
        "mkp_api_key": "dummy_key",
        "mkp_region": "dev",
        "pod": "poduseast1",
        "tenant_id": 3,
        "is_freshplugs_available": false,
        "marketplace_encrypted_param": "dummy_param",
        "auth_token": "dummy_token",
        "global_data": {
            "logged_in": {
                "agent": {
                    "id": 1,
                    "user_id": 1,
                    "signature": null,
                    "created_at": "2022-06-30T13:19:22+05:30",
                    "updated_at": "2022-07-05T10:59:31+05:30",
                    "ticket_permission": 1,
                    "occasional": false,
                    "google_viewer_id": null,
                    "signature_html": "<p><br></p>",
                    "points": null,
                    "scoreboard_level_id": null,
                    "available": true,
                    "active_since": null,
                    "scopes": 152137,
                    "user": {
                        "id": 1,
                        "name": "Support cv",
                        "email": "sample@freshservice.com",
                        "created_at": "2022-06-30T13:19:22+05:30",
                        "updated_at": "2022-07-14T12:52:26+05:30",
                        "active": true,
                        "job_title": null,
                        "phone": null,
                        "mobile": null,
                        "description": null,
                        "time_zone": "Chennai",
                        "deleted": false,
                        "language": "en",
                        "address": null,
                        "external_id": null,
                        "helpdesk_agent": true,
                        "location_name": null,
                        "time_format": "12h",
                        "vip_user": false,
                        "department_names": "[]"
                    },
                    "group_ids": "[]"
                }
            },
            "domain": {
                "domainName": "localhost.freshservice-dev.com",
                "hostName": "localhost.freshservice-dev.com",
                "cname": null
            }
        }
    },
    "projects_under_migration": false,
    "public_url_restricted": false,
    "collaboration_enabled": false,
    "is_tfs_enabled": false,
    "is_freshid_v2_account": false,
    "email_fonts": {
        "font-size": "14px",
        "font-family": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"
    },
    "portal": {
        "id": 1,
        "name": "Test Account",
        "host": "localhost.freshservice-dev.com",
        "default": true,
        "ssl_enabled": true,
        "preferences": {
            "bg_color": "#ebeef0",
            "header_color": "#ffffff",
            "tab_color": "#12344D"
        },
        "helpdesk_logo": null,
        "fav_icon_url": "http://localhost.freshservice-dev.com:3000/assets/logos/misc/favicon.ico"
    },
    "subscription": {
        "state": "trial",
        "subscription_plan": "Enterprise",
        "non_asset_plan": false,
        "trial_days": 7,
        "account_in_trail": true,
        "trial_expired": false,
        "default_trail_notifier_days": 30,
        "subscription_url": "/subscription"
    },
    "installed_apps": {},
    "force_authn_for_public_url": false,
    "features": "[features list]",
    "temp_features": {
        "formserv_sc": true,
        "onboarding_kits": true
    }
  }
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"accountDateFormat"})," - provides the selected account date format"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.accountDateFormat
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    'DD MMM, YYYY'
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"hasFeature"})," - checks if a feature is present"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.hasFeature('advanced_reporting')
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    true
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"hasAnyFeature"})," - checks if any feature in list is present"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.hasAnyFeature('saas_app_management', 'saas_app_management_trial')
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    true
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"hasAllFeatures"})," - checks if all features in list are present"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.hasAllFeatures('saas_app_management', 'saas_app_management_trial')
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"hasTempFeature"})," - checks if a temp feature is present"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.hasTempFeature('ams_additional_info')
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"getCsrfToken"})," - fetches the csrf token"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.getCsrfToken()
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    'hQ0PfRLxqI8X+RZiIhMHVc29n0boi5WEOuskMEMrlJ7mS5eOGyA9GrnipOh4r/GwWFUOjpKAu4a0pITNtLJzDw=='
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"language"})," - returns selected language (eg: 'en')"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"portalName"})," - returns the name of the account (eg: 'Test Account')"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"productName"})," - returns the name of the product being used (eg: 'freshservice')"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"installedApps"})," - return details of marketplace apps installed in the account"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.installedApps
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {
      "dropbox": "qwerty12345",
      "box": null,
      "service_bot_slack": {
          "channel_id": 12345678910
      }
    }
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"dateFormat"})," - returns the account's date format in numeric value among 1 => :non_us, 2 => :us, 3 => :japan (eg. 1)"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"timeFormat"}),' - returns the account\'s time format in string form (eg: "12h" or "24h")']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"id"})," - returns the account_id"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"subscription"})," - provides the subscription type object"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.subscription
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"json",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {
      "state": "trial",
      "subscription_plan": "Enterprise",
      "non_asset_plan": false,
      "trial_days": 13,
      "account_in_trail": true,
      "trial_expired": false,
      "default_trail_notifier_days": 30,
      "subscription_url": "/subscription"
    }
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"currencySymbol"}),' - returns the currency symbol (eg: "$")']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"secondaryLanguages"})," - provides the array of account supported languages"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.secondaryLanguages
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    ["en", "tr"]
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"customTranslations"})," - provides custom translations for account as a object"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.customTranslations
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"json",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {
      "module_names": {
        "ticket": "ticket",
        "tickets": "tickets",
        "Ticket": "Ticket",
        "Tickets": "Tickets"
        ...
      }
    }
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"mkp_api_key"})," - returns the marketplace api key"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"mkp_region"}),' - returns the marketplace region (eg. "staging")']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"full_domain"}),' - returns account\'s full domain (eg. "dharanikumar.freshcmdb.com"']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"encryptedParam"})," - returns marketplace parameters in encrypted hash"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"showFreshplugs"})," - checks if the account has integrated freshplug plugins"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.showFreshplugs
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"pod"}),' - returns the pod name (eg. "poduseast1")']}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"tenant_id"})," - returns the marketplace tenant id (eg. 3)"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"projectsUnderMigration"})," - checks if the project is under migration by verifying the migration flag"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.projectsUnderMigration
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"auth_token"})," - returns marketplace authentication token"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"publicUrlRestricted"})," - checks if public url restricted for the current account"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.publicUrlRestricted
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"forceAuthnForPublicUrl"})," - checks if authentication is required for public URL"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.forceAuthnForPublicUrl
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"collaborationEnabled"})," - checks if collaboration feature is enabled for current account"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.collaborationEnabled
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"isFreshidV2Account"})," - checks if its the freshID v2 account"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.isFreshidV2Account
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    false
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{children:"EmailFontSettings"})," - provides the email's font setting object"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"js",dark:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    this.currentAccount.EmailFontSettings
  `}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{language:"json",light:!0,format:!1,code:ts_dedent__WEBPACK_IMPORTED_MODULE_4__.default`
    {
      "font-size": "14px",
      "font-family": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif"
    }
  `})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_runner_work_itildesk_itildesk_frontend_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);
//# sourceMappingURL=stories-current-account-mdx.e79a2d23.iframe.bundle.js.map