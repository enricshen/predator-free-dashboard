// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/ChartDijitSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"flex-lc text-label" style\x3d"font-size: 14px;"\x3e${nls.chartSettings}\x3c/div\x3e\r\n  \x3cdiv class\x3d"section data-section padding-right-5" data-dojo-attach-point\x3d"dataSection"\x3e\r\n    \x3cdiv class\x3d"section-item chart-mode-section-item feature-mode category-mode count-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.displayMode}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"chartModeSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onChartModeChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"section-item label-field-section-item feature-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.labelField}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"labelFieldSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onLabelFieldChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"section-item category-field-section-item category-mode count-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.categoryField}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"categoryFieldSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onCategoryFieldChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv class\x3d"section-item category-mode count-mode"\x3e\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"periodDiv"\x3e\r\n        \x3cdiv\x3e${nls.minPeriod}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"periodSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onMinPeriodChanged" class\x3d"restrict-select-width"\x3e\r\n          \x3coption value\x3d"automatic"\x3e${nls.automatic}\x3c/option\x3e\r\n          \x3coption value\x3d"year"\x3e${nls.year}\x3c/option\x3e\r\n          \x3coption value\x3d"month"\x3e${nls.month}\x3c/option\x3e\r\n          \x3coption value\x3d"day"\x3e${nls.day}\x3c/option\x3e\r\n          \x3coption value\x3d"hour"\x3e${nls.hour}\x3c/option\x3e\r\n          \x3coption value\x3d"minute"\x3e${nls.minute}\x3c/option\x3e\r\n          \x3coption value\x3d"second"\x3e${nls.second}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \r\n    \x3cdiv class\x3d"section-item category-mode count-mode"\x3e\r\n      \x3cdiv style\x3d"height: auto; margin-top: 5px;margin-bottom: 5px;display: none;" class\x3d"average-align flexStart" data-dojo-attach-point\x3d"periodsRecordsDiv"\x3e\r\n        \x3cdiv\x3e${nls.periodsWithOutRecords}\x3c/div\x3e\r\n        \x3cdiv class\x3d"tb-radio-div"\x3e\r\n          \x3cdiv class\x3d"lr-radio-label-div"\x3e\r\n            \x3cinput checked type\x3d"radio" name\x3d"periodswithoutrecords" data-dojo-attach-event\x3d"change:_onPeriodsWithOutRecords" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"showRadioBtn"\x3e\r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.show}"\x3e${nls.show}\x3c/label\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv style\x3d"margin-top: 10px;" class\x3d"lr-radio-label-div"\x3e\r\n            \x3cinput type\x3d"radio" name\x3d"periodswithoutrecords" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"hideRadioBtn"\x3e\r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.hide}"\x3e${nls.hide}\x3c/label\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e \r\n\r\n    \x3cdiv class\x3d"section-item operation-section-item category-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.operation}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"operationSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onOperationSelectChanged" class\x3d"restrict-select-width"\x3e\r\n        \x3coption value\x3d"sum"\x3e${nls.sumOption}\x3c/option\x3e\r\n        \x3coption value\x3d"average"\x3e${nls.averageOption}\x3c/option\x3e\r\n        \x3coption value\x3d"min"\x3e${nls.minOption}\x3c/option\x3e\r\n        \x3coption value\x3d"max"\x3e${nls.maxOption}\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"section-item category-mode field-mode"\x3e  \r\n      \x3cdiv style\x3d"height: auto; margin-top: 5px;margin-bottom: 10px;" class\x3d"average-align flexStart" data-dojo-attach-point\x3d"nullValue"\x3e  \r\n        \x3cdiv\x3e${nls.nullValue}\x3c/div\x3e  \r\n        \x3cdiv class\x3d"tb-radio-div"\x3e \r\n          \x3cdiv class\x3d"lr-radio-label-div"\x3e \r\n            \x3cinput checked type\x3d"radio" name\x3d"nullValue" data-dojo-attach-event\x3d"change:_onNullValueAsZeroChange" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"zeroRadioBtn"\x3e \r\n           \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.calculatedAsZero}"\x3e${nls.calculatedAsZero}\x3c/label\x3e  \r\n          \x3c/div\x3e \r\n          \x3cdiv style\x3d"margin-top: 10px;" class\x3d"lr-radio-label-div"\x3e \r\n            \x3cinput type\x3d"radio" name\x3d"nullValue" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"ignoreRadioBtn"\x3e  \r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.ignored}"\x3e${nls.ignored}\x3c/label\x3e  \r\n          \x3c/div\x3e \r\n        \x3c/div\x3e \r\n      \x3c/div\x3e \r\n    \x3c/div\x3e \r\n\r\n    \x3cdiv style\x3d"height: auto;" class\x3d"section-item value-fields-section-item feature-mode category-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.valueFields}\x3c/div\x3e\r\n      \x3cdiv\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"valueFields" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/DataFields" data-dojo-attach-event\x3d"change:_onValueFieldsChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv style\x3d"height: auto; margin-top: 10px" class\x3d"section-item feature-mode category-mode count-mode field-mode average-align flexStart"\x3e\r\n      \x3cdiv\x3e${nls.sortBy}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"chartSort"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv style\x3d"margin-top: 5px" class\x3d"section-item feature-mode category-mode count-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.maxCategories}\x3c/div\x3e\r\n       \x3cinput data-dojo-attach-point\x3d"maxLabels" data-dojo-type\x3d"dijit/form/NumberSpinner"  data-dojo-props\x3d"intermediateChanges:true" data-dojo-attach-event\x3d"change:_onMaxLabelsChanged"\r\n      /\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"section display-section padding-right-5" data-dojo-attach-point\x3d"displaySection"\x3e\r\n    \x3cdiv class\x3d"section-item column-type bar-type pie-type line-type average-align"\x3e\r\n      \x3cdiv\x3e${nls.backgroundColor}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"bgColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onBgColorChanged"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv style\x3d"margin-bottom: 10px;" class\x3d"section-item pie-type average-align"\x3e\r\n      \x3cdiv\x3e${nls.hollowsize}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"hollowSize"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"chartColorContainer" style\x3d"height: auto;margin: 10px auto 0 auto;" class\x3d"section-item column-type bar-type pie-type line-type average-align flexStart"\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"legendTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"legendTextColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onLegendTextColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"legendTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"horTogglePocketContent"\x3e\r\n\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.title}\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"horTitle" data-dojo-attach-event\x3d"change:_onHorTitleChanged" /\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.titleColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"horTitleColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onHorTitleColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.labelColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"horTextColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onHorColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.labelSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"horTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"verTogglePocketContent"\x3e\r\n       \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.title}\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"verTitle" data-dojo-attach-event\x3d"change:_onVerTitleChanged" /\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.titleColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"verTitleColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onVerTitleColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.labelColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"verTextColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onVerColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.labelSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"verTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"dataLabelTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dataLabelTextColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onDataLabelColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dataLabelTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"section guide-section" data-dojo-attach-point\x3d"marksSection"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/query dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare dojo/Evented ./BaseDijitSetting dijit/_WidgetsInTemplateMixin dojo/text!./ChartDijitSetting.html jimu/dijit/TabContainer3 ./_dijits/ChartDijitSettingUtils ./_dijits/ChartSort ./_dijits/TogglePocket ./_dijits/VisibleSliderBar ./_dijits/SeriesStyle/SeriesStyle ./_dijits/Mark/Marks ../utils ./_dijits/ChartColorSetting ./_dijits/DataFields dijit/form/Select dijit/form/NumberSpinner".split(" "),function(g,m,
e,h,n,p,q,r,t,u,v,w,x,l,k,y,z,d){return p([r,t,q],{templateString:u,type:"chart",baseClass:"infographic-chart-dijit-setting",colors:"#68D2E0 #087E92 #47BCF5 #FBE66A #F29157 #C8501D #2DB7C6 #C4EEF6".split(" "),ignoreChangeEvents:!1,tabContainer:null,postMixInProperties:function(){e.mixin(this.nls,window.jimuNls.statisticsChart)},constructor:function(a){this.inherited(arguments);a.nls&&(this.nls=a.nls);this.appConfig=a.appConfig;this.cdsUtils=new w({map:a.map,appConfig:this.appConfig,colors:this.colors,
nls:this.nls});this.config=a.config;var b=this.cdsUtils.getDefaultColorOfTheme();this._defaultTextColor=b.textColor;this._defaultbgColor=b.bgColor},postCreate:function(){this.inherited(arguments);this.ignoreChangeEvents=!0;this._initDom()},setLayerDefinition:function(a){a&&(this.definition=a=this._preProcessDefinition(a),this.cdsUtils&&this.cdsUtils.setLayerDefinition(a))},setConfig:function(a){a&&(this.config=a)},clearMarks:function(){this.marks&&this.marks.setConfig({})},setFeatures:function(a){this.cdsUtils&&
a&&this.cdsUtils.setFeatures(a)},_initChartKeyProperty:function(){this.config&&(this.keyProperties={type:this.config.type,stack:this.config.stack,area:this.config.area,innerRadius:this.config.innerRadius})},setDataSource:function(a){this.inherited(arguments);this.definition&&this.config&&(this.cdsUtils&&this.cdsUtils.setDataSource(a),this.dataSource=a,this._initChartKeyProperty(),this._initializationByDataSource(),this._renderFirst())},_renderFirst:function(){var a=this.config.mode;a||(a=this._modes&&
this._modes[0]);a?(d.updateOptions(this.chartModeSelect,null,a,!0),this._initConfigFirst(a),this._initModle(),this._updateElementDisplayByChartMode(a),this._moveValueFieldToFirst=!0,this.render(this.modle,!0),this._moveValueFieldToFirst=!1):console.error("No effective mdoe.")},_onChartModeChanged:function(a){this._updateSelectTitleByValue(this.chartModeSelect,a);this.ignoreChangeEvents||(this._chartModeTrigger(a),this.render(this.modle),this.marks&&this.marks.setConfig({}),this.emit("chartSettingChanged",
this.modle.config))},_updateSelectTitleByValue:function(a,b){(b=a.getOptions(b))&&"undefined"!==typeof b.label&&a.set("title",b.label)},_chartModeTrigger:function(a){this._updateElementDisplayByChartMode(a);this._initConfig(a);this._initModle()},_initConfigFirst:function(a){this.config&&this.config.mode||this._initConfig(a)},_initConfig:function(a){var b=this._getDefaultFieldName();this.config=this.cdsUtils.getInitConfig(a,this.keyProperties,b)},render:function(a,b){this.ignoreChangeEvents=!0;this.cdsUtils.updateModleComputed(a);
this.cdsUtils.dynamicUpdateConfig(a,b);this._render(a);setTimeout(e.hitch(this,function(){this.ignoreChangeEvents=!1;if(this.domNode)this.onChange()}.bind(this)),200)},isValid:function(){return this.definition?this.maxLabels.isValid()&&this.hollowSizeControl.isValid()&&this.legendTextSizeControl.isValid()&&this.verticalAxisTextSizeControl.isValid()&&this.horizontalAxisTextSizeControl.isValid()&&this.dataLabelSizeControl.isValid():!1},getConfig:function(a){if(!this.isValid(a))return!1;a=this.modle.config;
if(this.marks){var b=this.marks.getConfig();if(!1===b)return!1;a.marks=b}if(a=d.getCleanChartConfig(a))return a;this.dijit.clearChart()},onChange:function(){if(!this.ignoreChangeEvents){var a=this.getConfig();a&&(this.dijit.setConfig(a),this.dijit.startRendering())}},_render:function(a){this._renderByModleComputed(a);this._renderByModleConfig(a)},_renderByModleComputed:function(a){var b=a.computed,f=this.PRE_MODLE.computed;!d.isEqual(b,f)&&b&&(d.isEqual(b.showDateOption,f.showDateOption)||(b.showDateOption?
this._showDataOption(this.modle.config.type):(this._hideDataOption(),a.config.dateConfig=null)),d.isEqual(b.sortComputed,f.sortComputed)||b.sortComputed&&this.chartSortDijit.updateComputeds(b.sortComputed),d.isEqual(b.valueFieldsAsMultipleMode,f.valueFieldsAsMultipleMode)||(b.valueFieldsAsMultipleMode?this.valueFields.setMultipleMode():this.valueFields.setSingleMode()),d.isEqual(b.seriesStyleComputed,f.seriesStyleComputed)||this.seriesStyleDijit.updateComputed(b.seriesStyleComputed),d.isEqual(b.legendDisplay,
f.legendDisplay)||(b.legendDisplay?this._showLegend():this._hideLegend()))},_renderByModleConfig:function(a){a=a.config;var b=this.PRE_MODLE.config;if(a){!d.isEqual(a.labelField,b.labelField)&&a.labelField&&this.labelFieldSelect.set("value",a.labelField);!d.isEqual(a.categoryField,b.categoryField)&&a.categoryField&&this.categoryFieldSelect.set("value",a.categoryField);!d.isEqual(a.valueFields,b.valueFields)&&a.valueFields&&(this.valueFields.uncheckAllFields(),this.valueFields.selectFields(a.valueFields,
!this._moveValueFieldToFirst));d.isEqual(a.operation,b.operation)||this.operationSelect.set("value",a.operation);if(!d.isEqual(a.dateConfig,b.dateConfig))if(a.dateConfig){var f=a.dateConfig;this.periodSelect.set("value",f.minPeriod);this.showRadioBtn.setChecked(f.isNeedFilled);this.hideRadioBtn.setChecked(!f.isNeedFilled)}else this.periodSelect.set("value","automatic"),this.showRadioBtn.setChecked(!0),this.hideRadioBtn.setChecked(!1);!d.isEqual(a.sortOrder,b.sortOrder)&&a.sortOrder&&this.chartSortDijit.setConfig(a.sortOrder);
d.isEqual(a.maxLabels,b.maxLabels)||("undefined"!==typeof a.maxLabels?this.maxLabels.set("value",a.maxLabels):this.maxLabels.set("value",""));d.isEqual(a.nullValue,b.nullValue)||("undefined"!==typeof a.nullValue?(this.zeroRadioBtn.setChecked(a.nullValue),this.ignoreRadioBtn.setChecked(!a.nullValue)):(this.zeroRadioBtn.setChecked(!0),this.ignoreRadioBtn.setChecked(!1)));d.isEqual(a.seriesStyle,b.seriesStyle)||this.seriesStyleDijit.setConfig(a.seriesStyle);d.isEqual(a.innerRadius,b.innerRadius)||"undefined"!==
typeof a.innerRadius&&this.hollowSizeControl.setValue(a.innerRadius)}},_preProcessDefinition:function(a){if(a){var b=a.fields;if(b&&b.length)return b=b.filter(function(a){return!("STAT_COUNT"===a.name&&"STAT_COUNT"===a.alias&&"esriFieldTypeInteger"===a.type)}),a.fields=null,a.fields=b,a}},_initModle:function(){this._initPreModle();this.modle=null;this.modle=this.cdsUtils.getInitializationModle(this.config)},_initDom:function(){var a=[{title:this.nls.data,content:this.dataSection},{title:this.nls.display,
content:this.displaySection}];"pie"!==this.config.type&&a.push({title:"Marks",content:this.marksSection});this.tabContainer=new v({average:!0,tabs:a});"pie"!==this.config.type&&(this.marks=new z({chartType:this.config.type,nls:this.nls,folderUrl:this.folderUrl,defaultColor:this._defaultTextColor,config:this.config.marks}),this.marks.placeAt(this.marksSection),this.own(g(this.marks,"change",e.hitch(this,this._onMarksChanged))));this.bgColor.setSingleColor(this.config.backgroundColor||this._defaultbgColor);
this.seriesStyleDijit=new y({nls:this.nls});this.seriesStyleDijit.placeAt(this.chartColorContainer);this.seriesStyleDijit.startup();this.own(g(this.seriesStyleDijit,"change",e.hitch(this,this._onSeriesStyleDijitChanged)));this.own(g(this.seriesStyleDijit,"update-colors",e.hitch(this,function(a){this.cdsUtils.setCustomColor(a);this._onCustomColorsChanged()})));this.hollowSizeControl=new k({min:0,max:60,step:1,value:this.config.innerRadius||0});this.own(g(this.hollowSizeControl,"change",e.hitch(this,
this._onHollowSizeControlChanged)));this.hollowSizeControl.placeAt(this.hollowSize);var b=this.config.legend,a=b&&b.textStyle&&b.textStyle.color,f=b&&b.textStyle&&b.textStyle.fontSize,b=b&&b.show;this.legendTogglePocket=new l({titleLabel:this.nls.legend,content:this.legendTogglePocketContent,className:"section-item column-type bar-type line-type pie-type"});this.legendTogglePocket.setState(!!b);this.own(g(this.legendTogglePocket,"change",e.hitch(this,this._onLegendTogglePocketChanged)));this.legendTogglePocket.placeAt(this.displaySection);
this.legendTextColor.setSingleColor(a||this._defaultTextColor);this.legendTextSizeControl=new k({min:6,max:40,step:1,value:f||12});this.own(g(this.legendTextSizeControl,"change",e.hitch(this,this._onLegendTextSizeChanged)));this.legendTextSizeControl.placeAt(this.legendTextSize);var c=this.config.yAxis,a=c&&c.textStyle&&c.textStyle.color,f=c&&c.textStyle&&c.textStyle.fontSize,b=c&&c.name,d=c&&c.nameTextStyle&&c.nameTextStyle.color,c=c&&c.show,c="undefined"===typeof c?!0:c;this.verTogglePocket=new l({titleLabel:this.nls.verticalAxis,
content:this.verTogglePocketContent,className:"section-item column-type bar-type line-type"});this.verTogglePocket.setState(!!c);this.own(g(this.verTogglePocket,"change",e.hitch(this,this._onVerTogglePocketChanged)));this.verTogglePocket.placeAt(this.displaySection);this.verTextColor.setSingleColor(a||this._defaultTextColor);this.verTitleColor.setSingleColor(d||this._defaultTextColor);(b||0===b)&&this.verTitle.set("value",b);this.verticalAxisTextSizeControl=new k({min:6,max:40,step:1,value:f||12});
this.own(g(this.verticalAxisTextSizeControl,"change",e.hitch(this,this._onVerticalAxisTextSizeChanged)));this.verticalAxisTextSizeControl.placeAt(this.verTextSize);a=(c=this.config.xAxis)&&c.textStyle&&c.textStyle.color;f=c&&c.textStyle&&c.textStyle.fontSize;b=c&&c.name;d=c&&c.nameTextStyle&&c.nameTextStyle.color;c=c&&c.show;c="undefined"===typeof c?!0:c;this.horTogglePocket=new l({titleLabel:this.nls.horizontalAxis,content:this.horTogglePocketContent,className:"section-item column-type bar-type line-type"});
this.horTogglePocket.setState(!!c);this.own(g(this.horTogglePocket,"change",e.hitch(this,this._onHorTogglePocketChanged)));this.horTogglePocket.placeAt(this.displaySection);this.horTextColor.setSingleColor(a||this._defaultTextColor);this.horTitleColor.setSingleColor(d||this._defaultTextColor);(b||0===b)&&this.horTitle.set("value",b);this.horizontalAxisTextSizeControl=new k({min:6,max:40,step:1,value:f||12});this.own(g(this.horizontalAxisTextSizeControl,"change",e.hitch(this,this._onHorizontalAxisTextSizeChanged)));
this.horizontalAxisTextSizeControl.placeAt(this.horTextSize);a=(b=this.config.dataLabel)&&b.textStyle&&b.textStyle.color;f=b&&b.textStyle&&b.textStyle.fontSize;b=b&&b.show;this.dataLabelTogglePocket=new l({titleLabel:this.nls.dataLabels,content:this.dataLabelTogglePocketContent,className:"section-item pie-type"});this.dataLabelTogglePocket.setState(!!b);this.own(g(this.dataLabelTogglePocket,"change",e.hitch(this,this._onDataLabelsTogglePocketChanged)));this.dataLabelTogglePocket.placeAt(this.displaySection);
this.dataLabelTextColor.setSingleColor(a||this._defaultTextColor);this.dataLabelSizeControl=new k({min:6,max:40,step:1,value:f||12});this.own(g(this.dataLabelSizeControl,"change",e.hitch(this,this._onDataLabelSizeChanged)));this.dataLabelSizeControl.placeAt(this.dataLabelTextSize);this.chartSortDijit=new x({nls:this.nls});this.own(g(this.chartSortDijit,"change",e.hitch(this,this._onChartSortDijitChanged)));this.chartSortDijit.placeAt(this.chartSort);this.tabContainer.placeAt(this.domNode);"pie"===
this.config.type?(this.maxLabels.constraints={min:1,max:100},this.maxLabels.required=!0):(this.maxLabels.constraints={min:1,max:3E3},this.maxLabels.required=!1);this._updateElementDisplayByChartType(this.config.type)},_onLabelFieldChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.labelField=a,this.render(this.modle))},_onCategoryFieldChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.categoryField=a,this.render(this.modle),
this.emit("chartSettingChanged",this.modle.config))},_onMinPeriodChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.dateConfig.minPeriod=a,this.render(this.modle))},_onPeriodsWithOutRecords:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.dateConfig.isNeedFilled=a,this.render(this.modle))},_onOperationSelectChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.operation=a,this.render(this.modle))},
_onNullValueAsZeroChange:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.nullValue=a,this.render(this.modle))},_onValueFieldsChanged:function(){if(!this.ignoreChangeEvents){this._onChangeAfterHook();var a=this.valueFields.getSelectedFieldNames();this.modle.config.valueFields=a;this.render(this.modle)}},_onChartSortDijitChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.sortOrder=a,this.render(this.modle))},_onMaxLabelsChanged:function(){if(!this.ignoreChangeEvents){this._onChangeAfterHook();
var a=this.maxLabels.get("value");this.modle.config.maxLabels=a;this.render(this.modle)}},_onBgColorChanged:function(){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.backgroundColor=this.bgColor.getSingleColor(),this.render(this.modle))},_onLegendTogglePocketChanged:function(){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.legend.show=this.legendTogglePocket.getState(),this.render(this.modle))},_onLegendTextColorChanged:function(){this.ignoreChangeEvents||
(this._onChangeAfterHook(),this.modle.config.legend.textStyle.color=this.legendTextColor.getSingleColor(),this.render(this.modle))},_onLegendTextSizeChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.legend.textStyle.fontSize=a,this.render(this.modle))},_onHorTogglePocketChanged:function(){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.xAxis.show=this.horTogglePocket.getState(),this.render(this.modle))},_onHorTitleChanged:function(){if(!this.ignoreChangeEvents){this._onChangeAfterHook();
var a=this.horTitle.get("value");""===a&&(a=void 0);this.modle.config.xAxis.name=a;this.render(this.modle)}},_onHorTitleColorChanged:function(){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.xAxis.nameTextStyle.color=this.horTitleColor.getSingleColor(),this.render(this.modle))},_onHorColorChanged:function(){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.xAxis.textStyle.color=this.horTextColor.getSingleColor(),this.render(this.modle))},_onHorizontalAxisTextSizeChanged:function(a){this.ignoreChangeEvents||
(this._onChangeAfterHook(),this.modle.config.xAxis.textStyle.fontSize=a,this.render(this.modle))},_onVerTogglePocketChanged:function(){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.yAxis.show=this.verTogglePocket.getState(),this.render(this.modle))},_onVerTitleChanged:function(){if(!this.ignoreChangeEvents){this._onChangeAfterHook();var a=this.verTitle.get("value");""===a&&(a=void 0);this.modle.config.yAxis.name=a;this.render(this.modle)}},_onVerTitleColorChanged:function(){this.ignoreChangeEvents||
(this._onChangeAfterHook(),this.modle.config.yAxis.nameTextStyle.color=this.verTitleColor.getSingleColor(),this.render(this.modle))},_onVerColorChanged:function(){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.yAxis.textStyle.color=this.verTextColor.getSingleColor(),this.render(this.modle))},_onVerticalAxisTextSizeChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.yAxis.textStyle.fontSize=a,this.render(this.modle))},_onDataLabelsTogglePocketChanged:function(){this.ignoreChangeEvents||
(this._onChangeAfterHook(),this.modle.config.dataLabel.show=this.dataLabelTogglePocket.getState(),this.render(this.modle))},_onDataLabelColorChanged:function(){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.dataLabel.textStyle.color=this.dataLabelTextColor.getSingleColor(),this.render(this.modle))},_onDataLabelSizeChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.dataLabel.textStyle.fontSize=a,this.render(this.modle))},_onHollowSizeControlChanged:function(a){this.ignoreChangeEvents||
(this._onChangeAfterHook(),this.modle.config.innerRadius=a,this.render(this.modle))},_onSeriesStyleDijitChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.seriesStyle=a,this.render(this.modle))},_onCustomColorsChanged:function(){if(!this.ignoreChangeEvents){this._onChangeAfterHook();var a=this.modle.config.seriesStyle;a&&a.customColor&&(a=a.customColor.categories)&&a.length&&(a.forEach(function(a){a&&(a.color=this.cdsUtils.getRandomCustomColor())}.bind(this)),
this.render(this.modle))}},_onMarksChanged:function(a){this.ignoreChangeEvents||(this._onChangeAfterHook(),this.modle.config.marks=a,this.render(this.modle))},_initPreModle:function(){this.PRE_MODLE=null;this.PRE_MODLE={computed:{},config:{}};this.cdsUtils.setPreModle(this.PRE_MODLE)},_showDataOption:function(a){"pie"!==a&&this._showPeriodsRecordsDiv();this._showPeridoDiv()},_hideDataOption:function(){this._hidePeridoDiv();this._hidePeriodsRecordsDiv()},_showPeridoDiv:function(){h.setStyle(this.periodDiv,
"display","")},_hidePeridoDiv:function(){h.setStyle(this.periodDiv,"display","none")},_showPeriodsRecordsDiv:function(){h.setStyle(this.periodsRecordsDiv,"display","")},_hidePeriodsRecordsDiv:function(){h.setStyle(this.periodsRecordsDiv,"display","none")},_hideLegend:function(){this.legendTogglePocket&&this.legendTogglePocket.hide()},_showLegend:function(){this.legendTogglePocket&&this.legendTogglePocket.show()},_initChartModeSelect:function(){var a=this._modes;this.chartModeSelect.removeOption(this.chartModeSelect.getOptions());
a.forEach(function(a){"feature"===a?this.chartModeSelect.addOption({value:"feature",label:this.nls.featureOption}):"category"===a?this.chartModeSelect.addOption({value:"category",label:this.nls.categoryOption}):"count"===a?this.chartModeSelect.addOption({value:"count",label:this.nls.countOption}):"field"===a&&this.chartModeSelect.addOption({value:"field",label:this.nls.fieldOption})}.bind(this))},_updateElementDisplayByChartMode:function(a){var b=a+"-mode";a=m(".section-item",this.dataSection);n.forEach(a,
e.hitch(this,function(a){h.hasClass(a,b)?this._showSectionItem(a):this._hideSectionItem(a)}))},_updateElementDisplayByChartType:function(a){var b=a+"-type";a=m(".section-item",this.displaySection);n.forEach(a,e.hitch(this,function(a){h.hasClass(a,b)?this._showSectionItem(a):this._hideSectionItem(a)}))},_showSectionItem:function(a){h.removeClass(a,"hide")},_hideSectionItem:function(a){h.addClass(a,"hide")},_showChartNoData:function(a){setTimeout(function(){a&&this.dijit.setConfig(a);this.dijit.clearChart()}.bind(this),
200)},_onChangeAfterHook:function(){this.PRE_MODLE=e.clone(this.modle);this.cdsUtils.setPreModle(this.PRE_MODLE)},_initializationByDataSource:function(){this._initChartModes(this.dataSource);this._initFieldOptions()},_initChartModes:function(a){var b=this.definition;if(b){var d=!1,c=["feature","category","count","field"];a.frameWorkDsId&&(a=(this.appConfig.dataSource&&this.appConfig.dataSource.dataSources)[a.frameWorkDsId],"FeatureStatistics"===a.type&&(d=!0,c=0<(e.clone(a.dataSchema).groupByFields||
[]).length?this.cdsUtils.hasNumberFields(b)?["category","count"]:["count"]:["field"]));d||this.cdsUtils.hasNumberFields(b)||(c=["count"]);this._modes=c;this._initChartModeSelect()}},_initFieldOptions:function(){var a=this.definition;if(a){var b=e.clone(a.fields);b&&b.length&&(b.forEach(function(a){a.checked=!1}),a=a.groupByFields&&a.groupByFields[0],this._clusterFieldOptions=this.cdsUtils.getClusterFieldOptions(b,a),this._valueFieldOptions=this.cdsUtils.getValueFieldOptions(b,a,this._clusterFieldOptions),
d.updateOptions(this.categoryFieldSelect,this._clusterFieldOptions),d.updateOptions(this.labelFieldSelect,this._clusterFieldOptions),this.valueFields.setFields(this._valueFieldOptions))}},_getDefaultFieldName:function(){var a;this._clusterFieldOptions&&this._clusterFieldOptions[0]&&(a=this._clusterFieldOptions[0].value);return a}})});