(self.webpackChunksalux_ds_lib=self.webpackChunksalux_ds_lib||[]).push([[379],{"./projects/sx_lib_front/src/lib/components/label/label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>LabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var label_componentngResource=__webpack_require__("./projects/sx_lib_front/src/lib/components/label/label.component.scss?ngResource"),label_componentngResource_default=__webpack_require__.n(label_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LabelComponent=class LabelComponent{type="content";color="default";for="";size="default";isPDF=!1;weight="";static propDecorators={type:[{type:core.Input}],color:[{type:core.Input}],for:[{type:core.Input}],size:[{type:core.Input}],isPDF:[{type:core.Input}],weight:[{type:core.Input}]}};LabelComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"sx-label",template:"\r\n<label [for]=\"for\" class=\"sx-label sx-label--{{type}} sx-label--color-{{color}} sx-label-size-{{size}} sx-label-weight-{{weight}} {{isPDF && (type == 'title' || type == 'body2-bold-pdf') ? 'title-pdf' : ''}}\">\r\n    <ng-content></ng-content>\r\n</label>\r\n",styles:[label_componentngResource_default()]})],LabelComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/sx_lib_front/src/stories/label.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Label",component:__webpack_require__("./projects/sx_lib_front/src/lib/components/label/label.component.ts").U,tags:["autodocs"]},Primary={name:"Label",argTypes:{type:{description:"Tipo do label",control:"radio",options:["content","title","body1-bold","body2-bold-pdf","body2"],type:"string",defaultValue:"content",table:{type:{summary:"string"},defaultValue:{summary:"content"}}},color:{description:"Cor do label",control:"radio",options:["default","primary","error","green","yellow","red","black","gray","white"],type:"string",defaultValue:"default",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},for:{description:"Tamanho do label",control:"text",type:"string",defaultValue:"",table:{type:{summary:"string"}}},size:{description:"Tamanho do label",control:"radio",options:["default","small","large"],type:"string",defaultValue:"default",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},isPDF:{description:"Label no PDF",control:"boolean",type:"boolean",defaultValue:"false",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},weight:{description:"Largura do label",control:"number",type:"number",table:{type:{summary:"number"}}}},args:{type:"content",color:"default",for:"",size:"default",isPDF:!1,weight:""},render:args=>({template:`\n      <sx-label\n        [type]="'${args.type}'"\n        [color]="'${args.color}'"\n        [size]="'${args.size}'"\n        [for]="'${args.for}'"\n        [isPDF]="${args.isPDF}"\n        [weight]="${args.weight}">\n        Label text\n      </sx-label>\n    `})},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  name: 'Label',\n  argTypes: {\n    type: {\n      description: 'Tipo do label',\n      control: 'radio',\n      options: ['content', 'title', 'body1-bold', 'body2-bold-pdf', 'body2'],\n      type: 'string',\n      defaultValue: 'content',\n      table: {\n        type: {\n          summary: 'string'\n        },\n        defaultValue: {\n          summary: 'content'\n        }\n      }\n    },\n    color: {\n      description: 'Cor do label',\n      control: 'radio',\n      options: [\"default\", \"primary\", \"error\", \"green\", \"yellow\", \"red\", \"black\", \"gray\", \"white\"],\n      type: 'string',\n      defaultValue: 'default',\n      table: {\n        type: {\n          summary: 'string'\n        },\n        defaultValue: {\n          summary: 'default'\n        }\n      }\n    },\n    for: {\n      description: 'Tamanho do label',\n      control: 'text',\n      type: 'string',\n      defaultValue: '',\n      table: {\n        type: {\n          summary: 'string'\n        }\n      }\n    },\n    size: {\n      description: 'Tamanho do label',\n      control: 'radio',\n      options: [\"default\", \"small\", \"large\"],\n      type: 'string',\n      defaultValue: 'default',\n      table: {\n        type: {\n          summary: 'string'\n        },\n        defaultValue: {\n          summary: 'default'\n        }\n      }\n    },\n    isPDF: {\n      description: 'Label no PDF',\n      control: 'boolean',\n      type: 'boolean',\n      defaultValue: 'false',\n      table: {\n        type: {\n          summary: 'boolean'\n        },\n        defaultValue: {\n          summary: 'false'\n        }\n      }\n    },\n    weight: {\n      description: 'Largura do label',\n      control: 'number',\n      type: 'number',\n      table: {\n        type: {\n          summary: 'number'\n        }\n      }\n    }\n  },\n  args: {\n    type: 'content',\n    color: 'default',\n    for: '',\n    size: 'default',\n    isPDF: false,\n    weight: ''\n  },\n  render: (args: any) => ({\n    template: `\n      <sx-label\n        [type]=\"'${args.type}'\"\n        [color]=\"'${args.color}'\"\n        [size]=\"'${args.size}'\"\n        [for]=\"'${args.for}'\"\n        [isPDF]=\"${args.isPDF}\"\n        [weight]=\"${args.weight}\">\n        Label text\n      </sx-label>\n    `\n  })\n}",...Primary.parameters?.docs?.source}}}},"./projects/sx_lib_front/src/lib/components/label/label.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.sx-label {\n  font-family: "Jost", sans-serif;\n  font-size: 14px;\n  margin: 0;\n  white-space: pre-line;\n}\n.sx-label ::ng-deep span {\n  font-weight: bold;\n}\n.sx-label--content {\n  font-weight: 400;\n}\n.sx-label--title {\n  font-family: "Jost", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n}\n.sx-label--title2 {\n  font-family: "Jost", sans-serif;\n  font-size: 16px;\n  color: #323232 !important;\n}\n.sx-label--body1-bold {\n  font-family: "Jost", sans-serif;\n  font-size: 16px !important;\n  font-weight: 600;\n  color: #323232 !important;\n}\n.sx-label--body2-bold-pdf {\n  font-family: "Jost", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n}\n.sx-label--body2 {\n  font-family: "Jost", sans-serif;\n  font-size: 14px;\n}\n.sx-label--color-default {\n  color: #646464;\n}\n.sx-label--color-color-health-red-dark {\n  color: #A60017;\n}\n.sx-label--color-primary {\n  color: #50688c;\n}\n.sx-label--color-error {\n  color: #dc001e;\n}\n.sx-label--color-gray {\n  color: #969696;\n}\n.sx-label--color-green {\n  color: #4dbf6d;\n}\n.sx-label--color-yellow {\n  color: #e8c500;\n}\n.sx-label--color-red {\n  color: #ed2626;\n}\n.sx-label--color-black {\n  color: #323232;\n}\n.sx-label--color-white {\n  color: white;\n}\n\n.sx-label-color-black {\n  color: #323232;\n}\n\n.sx-label-size-default {\n  font-size: 14px;\n}\n\n.ds-label-body-regular {\n  font-family: "Jost", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.ds-label-color-default {\n  color: #646464;\n}\n\n.ds-label-color-primary {\n  color: #50688c;\n}\n\n.ds-label-color-error {\n  color: #dc001e;\n}\n\n.ds-label-color-gray {\n  color: #969696;\n}\n\n.ds-label-color-green {\n  color: #4dbf6d;\n}\n\n.ds-label-color-yellow {\n  color: #e8c500;\n}\n\n.ds-label-color-red {\n  color: #ed2626;\n}\n\n.sx-label-size-small {\n  font-size: 12px;\n}\n\n.sx-label-size-medium {\n  font-size: 14px;\n}\n\n.sx-label-size-large {\n  font-size: 16px;\n}\n\n.sx-label-size-extra-large {\n  font-size: 20px;\n}\n\n.sx-label-weight-bold {\n  font-weight: 700;\n}\n\n.title-pdf {\n  font-family: "Jost", sans-serif;\n  font-weight: bold;\n  word-spacing: 0.5px;\n  letter-spacing: 0.1px;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);