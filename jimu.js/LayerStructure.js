// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/on dojo/Evented ./LayerInfos/LayerInfos".split(" "),function(k,h,d,e,l,f){var b=k([l],{declaredClass:"jimu.LayerStructure",map:null,_layerInfos:null,_eventHandles:null,constructor:function(a){this._layerInfos=a;this.map=this._layerInfos.map;this._eventHandles=[];this._bindEvents()},getLayerNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getLayerInfoArray())},getTableNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getTableInfoArray())},
getWebmapLayerNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getLayerInfoArrayOfWebmap())},getWebmapTableNodes:function(){return this._getNodesArrayFromInfosArray(this._layerInfos.getTableInfoArrayOfWebmap())},addTable:function(a){var c=null;if(a=this._layerInfos.addTable(a))c=a._adaptor;return c},removeTable:function(a){(a=this.getNodeById(a))&&this._layerInfos.removeTable(a._layerInfo)},_traversal:function(a,c){for(var b=0;b<c.length;b++)if(c[b].traversal(a))return!0;
return!1},traversal:function(a){return this._traversal(a,this.getLayerNodes().concat(this.getTableNodes()))},traversalWithNodes:function(a,b){return this._traversal(a,b)},getNodeById:function(a){var b=null;this.traversal(function(c){if(c.id===a)return b=c,!0});return b},getBasemapLayerObjects:function(){return this._layerInfos.getBasemapLayers()},restoreState:function(a){this._layerInfos.restoreState(a)},destroy:function(){h.forEach(this._eventHandles,function(a){a.remove()});this.inherited(arguments)},
_getNodesArrayFromInfosArray:function(a){var b=[];h.forEach(a,function(a){b.push(a._adaptor)},this);return b},_emitEvent:function(){try{this.emit.apply(this,arguments)}catch(a){console.warn(a)}},_bindEvents:function(){var a;a=e(this._layerInfos,"layerInfosChanged",d.hitch(this,this._onLayerNodesStructureChanged));this._eventHandles.push(a);a=e(this._layerInfos,"tableInfosChanged",d.hitch(this,this._onTableNdoesStructureChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosReorder",
d.hitch(this,this._onLayerReordered));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosIsShowInMapChanged",d.hitch(this,this._onVisibilityChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosIsVisibleChanged",d.hitch(this,this._onToggleChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosFilterChanged",d.hitch(this,this._onFilterChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosRendererChanged",d.hitch(this,this._onRendererChanged));this._eventHandles.push(a);
a=e(this._layerInfos,"layerInfosOpacityChanged",d.hitch(this,this._onOpacityChanged));this._eventHandles.push(a);a=e(this._layerInfos,"layerInfosTimeExtentChanged",d.hitch(this,this._onTimeExtentChanged));this._eventHandles.push(a)},_onLayerNodesStructureChanged:function(a,c,d){this._emitEvent(b.EVENT_STRUCTURE_CHANGE,{type:c,layerNodes:[d._adaptor],rootLayerNodes:[a._adaptor]})},_onTableNdoesStructureChanged:function(a,c){a=this._getNodesArrayFromInfosArray(a);this._emitEvent(b.EVENT_STRUCTURE_CHANGE,
{type:c,layerNodes:a,rootLayerNodes:a})},_onLayerReordered:function(a,c){a=[a._adaptor];this._emitEvent(b.EVENT_STRUCTURE_CHANGE,{type:c,layerNodes:a,rootLayerNodes:a})},_onVisibilityChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(b.EVENT_VISIBILITY_CHANGE,a)},_onToggleChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(b.EVENT_TOOGLE_CHANGE,a)},_onFilterChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};
this._emitEvent(b.EVENT_FILTER_CHANGE,a)},_onRendererChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(b.EVENT_RENDERER_CHANGE,a)},_onOpacityChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(b.EVENT_OPACITY_CHANGE,a)},_onTimeExtentChanged:function(a){a={layerNodes:this._getNodesArrayFromInfosArray(a)};this._emitEvent(b.EVENT_TIME_EXTENT_CHANGE,a)}}),g=null;b.getInstance=function(){g&&g._layerInfos._objectId===f.getInstanceSync()._objectId||
(g&&g.destroy(),g=new b(f.getInstanceSync()));return g};b.createInstance=function(a){return new b(f.createInstance(a))};d.mixin(b,{STRUCTURE_CHANGE_ADD:f.ADDED,STRUCTURE_CHANGE_REMOVE:f.REMOVED,STRUCTURE_CHANGE_SUBNODE_ADD:f.SUBLAYER_ADDED,STRUCTURE_CHANGE_SUBNODE_REMOVE:f.SUBLAYER_REMOVED,STRUCTURE_CHANGE_NODE_UPDATE:f.UPDATED,STRUCTURE_CHANGE_REORDER:f.REORDERED,EVENT_STRUCTURE_CHANGE:"structure-change",EVENT_TOOGLE_CHANGE:"toggle-change",EVENT_VISIBILITY_CHANGE:"visibility-change",EVENT_FILTER_CHANGE:"filter-change",
EVENT_RENDERER_CHANGE:"renderer-change",EVENT_OPACITY_CHANGE:"opacity-change",EVENT_TIME_EXTENT_CHANGE:"time-extent-change"});return b});