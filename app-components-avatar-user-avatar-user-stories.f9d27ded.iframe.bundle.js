"use strict";(globalThis.webpackChunkfreshservice=globalThis.webpackChunkfreshservice||[]).push([[7469],{"./app/components/app-components/avatar-user/avatar-user.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"app-components/avatar-user",component:"AppComponentsAvatarUser"},Default={render:(args,{globals:{loadTranslations}})=>({template:Ember.HTMLBars.template({id:"YPpRc3ZC",block:'[[[1,"\\n"],[41,[30,0,["translationsLoaded"]],[[[1,"                "],[8,[39,1],null,[["@size","@isCircle","@isTwoLetter","@name","@user","@imageUrl","@colorCount","@avatarClass","@addPlaceholder"],[[30,0,["size"]],[30,0,["isCircle"]],[30,0,["isTwoLetter"]],[30,0,["name"]],[30,0,["user"]],[30,0,["imageUrl"]],[30,0,["colorCount"]],[30,0,["avatarClass"]],[30,0,["addPlaceholder"]]]],null],[1,"\\n"]],[]],null],[1,"              "]],[],false,["if","app-components/avatar-user"]]',moduleName:"(unknown template module)",isStrictMode:!1}),context:{...args,loadTranslations:loadTranslations()}}),name:"Default",argTypes:{size:{type:"select",options:["xsmall","small"],description:"Applies the class avatar__icon--${this.size}, You can create custom class of this type and pass it as an argument. For example if you have defined a class avatar__icon--big, pass the size= 'big'"},isCircle:{type:"boolean",description:"Set this to false to make the avatar square"},alternativeMode:{type:"boolean",description:"Warning: Not an component arg, donot pass this",defaultValue:!1,table:{category:"Display User Metadata"}},isTwoLetter:{type:"boolean",description:"Set this to true to show the first letters of a two word name",table:{category:"Display User Metadata"},if:{arg:"alternativeMode"}},name:{type:"string",description:"Denotes the name of avatar, used to generate the short-form name in letter mode or used as alt text when profile photo is shown",table:{category:"Display User Metadata"}},user:{type:"object",description:"User object, which contains ID. The ID can be used by avatar service to fetch avatars when imageUrl hasn't been specified"},imageUrl:{type:"string",description:"URL to the profile image",if:{arg:"alternativeMode",truthy:!1},table:{category:"Display User Metadata"}},colorCount:{type:"number",description:"Used in conjunction with avatarClass. Pass the number of possible avatarClasses."},avatarClass:{type:"string",description:"Custom avatar class, it is of the form avatarClass+colorCode. Note: colorCode depends on name and passed colorCount",table:{category:"Display User Metadata"},if:{arg:"alternativeMode"}},onAvatarUrlRefetch:{description:"callback function when img fails to load"},addPlaceholder:{type:"boolean",description:"Shows a placeholder image when set to true. Overrides other properties."}},args:{size:"small",isCircle:!0,isTwoLetter:!0,name:"Hydro Carbon",imageUrl:"/a/assets/images/venkat.jpg",user:{id:1},colorCount:3,avatarClass:"my-avatar",onAvatarUrlRefetch:()=>{},addPlaceholder:!1}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args, {\n    globals: {\n      loadTranslations\n    }\n  }) => {\n    return {\n      template: hbs`\n              {{#if this.translationsLoaded}}\n                <AppComponents::AvatarUser\n                  @size={{this.size}}\n                  @isCircle={{this.isCircle}}\n                  @isTwoLetter={{this.isTwoLetter}}\n                  @name={{this.name}}\n                  @user={{this.user}}\n                  @imageUrl={{this.imageUrl}}\n                  @colorCount={{this.colorCount}}\n                  @avatarClass={{this.avatarClass}}\n                  @addPlaceholder={{this.addPlaceholder}}\n                />\n              {{/if}}\n              `,\n      context: {\n        ...args,\n        loadTranslations: loadTranslations()\n      }\n    };\n  },\n  name: 'Default',\n  argTypes: {\n    size: {\n      type: 'select',\n      options: ['xsmall', 'small'],\n      description: 'Applies the class avatar__icon--${this.size}, You can create custom class of this type and pass ' + \"it as an argument. For example if you have defined a class avatar__icon--big, pass the size= 'big'\"\n    },\n    isCircle: {\n      type: 'boolean',\n      description: 'Set this to false to make the avatar square'\n    },\n    alternativeMode: {\n      type: 'boolean',\n      description: 'Warning: Not an component arg, donot pass this',\n      defaultValue: false,\n      table: {\n        category: 'Display User Metadata'\n      }\n    },\n    isTwoLetter: {\n      type: 'boolean',\n      description: 'Set this to true to show the first letters of a two word name',\n      table: {\n        category: 'Display User Metadata'\n      },\n      if: {\n        arg: 'alternativeMode'\n      }\n    },\n    name: {\n      type: 'string',\n      description: 'Denotes the name of avatar, used to generate the short-form name in letter mode ' + 'or used as alt text when profile photo is shown',\n      table: {\n        category: 'Display User Metadata'\n      }\n    },\n    user: {\n      type: 'object',\n      description: \"User object, which contains ID. The ID can be used by avatar service to fetch avatars when imageUrl hasn't been specified\"\n    },\n    imageUrl: {\n      type: 'string',\n      description: 'URL to the profile image',\n      if: {\n        arg: 'alternativeMode',\n        truthy: false\n      },\n      table: {\n        category: 'Display User Metadata'\n      }\n    },\n    colorCount: {\n      type: 'number',\n      description: 'Used in conjunction with avatarClass. Pass the number of possible avatarClasses.'\n    },\n    avatarClass: {\n      type: 'string',\n      description: 'Custom avatar class, it is of the form avatarClass+colorCode. Note: colorCode depends on name and passed colorCount',\n      table: {\n        category: 'Display User Metadata'\n      },\n      if: {\n        arg: 'alternativeMode'\n      }\n    },\n    onAvatarUrlRefetch: {\n      description: 'callback function when img fails to load'\n    },\n    addPlaceholder: {\n      type: 'boolean',\n      description: 'Shows a placeholder image when set to true. Overrides other properties.'\n    }\n  },\n  args: {\n    size: 'small',\n    isCircle: true,\n    isTwoLetter: true,\n    name: 'Hydro Carbon',\n    imageUrl: '/a/assets/images/venkat.jpg',\n    user: {\n      id: 1\n    },\n    colorCount: 3,\n    avatarClass: 'my-avatar',\n    onAvatarUrlRefetch: () => {},\n    addPlaceholder: false\n  }\n}",...Default.parameters?.docs?.source}}}}}]);