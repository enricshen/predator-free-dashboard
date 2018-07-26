// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/pageControlForQuery.html":'\x3cdiv class\x3d"pageControl pageItem"\x3e\r\n  \x3c!--\r\n  \x3cdiv data-dojo-attach-point\x3d"prevPage" class\x3d"pageBtn pageDisabled pageItem"\x3e\x3c-prevPage\x3c/div\x3e\r\n  \x3cdiv class\x3d"pageItem" data-dojo-attach-point\x3d"currentPage"\x3e1\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"nextPage" class\x3d"pageBtn pageItem"\x3enextPage-\x3e\x3c/div\x3e\r\n  --\x3e\r\n\r\n  \x3c!-- \x3cdiv data-dojo-attach-point\x3d"addNextPage"\x3eLoad more data(Test)\x3c/div\x3e --\x3e\r\n\x3c/div\x3e'}});
define("dojo/Deferred esri/tasks/query dojo/_base/array dojo/_base/lang dojo/_base/declare ../Query ../LayerStructure dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/pageControlForQuery.html".split(" "),function(f,k,l,e,m,g,n,p,q,r,t){return m([p,q,r],{templateString:t,layerUrl:null,fieldInfo:null,spatialReference:null,layerDefinition:null,isNumberField:!1,showNullValues:!1,_isUniqueValueCacheFinish:!1,_uniqueValueCache:{},_uniqueValueCacheForOtherTypes:{},
_codedvalueCache:[],cascadeFilterExprs:"1\x3d1",numbericFieldLength:{esriFieldTypeOID:32,esriFieldTypeSmallInteger:16,esriFieldTypeInteger:32,esriFieldTypeSingle:128,esriFieldTypeDouble:1024},pageIndex:1,pageSize:1E3,postCreate:function(){this.inherited(arguments);this.spatialReference=n.getInstance().map.spatialReference;this.reset();this.queryType=g.getQueryType(this.layerDefinition);this.isNumberField&&(this.fieldLength=this.numbericFieldLength[this.fieldInfo.type])},reset:function(){this.pageIndex=
1;this._isUniqueValueCacheFinish=!1;this._uniqueValueCache={};this._uniqueValueCacheForOtherTypes={};this._codedvalueCache=[]},_addNextPage:function(a){var b=new f;this.getPageValueDef(a).then(e.hitch(this,function(a){b.resolve(a)}),e.hitch(this,function(a){b.reject(a)}));return b},isKeyQueryLoader:!1,_searchKey:function(a){var b=new f,c=new k,d="",d=this.isNumberField?"CAST("+this.fieldInfo.name+" AS CHAR("+this.fieldLength+")) LIKE '%"+a+"%'":this.fieldInfo.name+" LIKE '%"+a+"%'";c.where="(("+this.cascadeFilterExprs+
") AND ("+d+"))";c.geometry=null;c.outSpatialReference=this.spatialReference;c.outFields=[this.fieldInfo.name];c.returnDistinctValues=!0;c.returnGeometry=!1;c.orderByFields=c.outFields;this.layerLoaderForKey=new g({url:this.layerUrl,query:c,pageSize:this.pageSize});this.isKeyQueryLoader=!0;this._uniqueValueCacheForOtherTypes={};this._addNextPage(!0).then(e.hitch(this,function(d){b.resolve(d)}),e.hitch(this,function(d){b.reject("reject:"+d)}));return b},_searchKeyLocal:function(a){this.isKeyQueryLoader=
!1;var b=[],c=this.fieldInfo.name,d=this._codedvalueCache,h,e;if(0<d.length){for(var f in d)h=d[f],(e=h.label)&&0<=e.toString().toUpperCase().indexOf(a.toUpperCase())&&b.push(h);a=b}else{var d=this._uniqueValueCache,g;for(g in d){f=d[g];for(var k in f)h=f[k],(e=h.attributes[c])&&0<=e.toString().toUpperCase().indexOf(a.toUpperCase())&&b.push(h)}a=this._getConvertData(b)}return a},_getConvertData:function(a){var b=[],c=this.fieldInfo.name;l.map(a,function(d){d=d.attributes[c];b.push({value:d,label:d})});
return b},getPageValueDef:function(a){var b=new f;this.queryByPage(a).then(e.hitch(this,function(a){a=this._getConvertData(a);b.resolve(a)}),e.hitch(this,function(a){b.reject("reject:"+a)}));return b},queryByPage:function(a){var b=new f;this.layerLoader&&this.layerLoader.query.where!==this.cascadeFilterExprs&&(this.layerLoader=null,this.isKeyQueryLoader=!1,this.reset());if(!this.layerLoader){var c=new k;c.where=this.cascadeFilterExprs;c.geometry=null;c.outSpatialReference=this.spatialReference;c.outFields=
[this.fieldInfo.name];c.returnDistinctValues=!0;c.returnGeometry=!1;c.orderByFields=c.outFields;this.layerLoader=new g({url:this.layerUrl,query:c,pageSize:this.pageSize})}a&&(this.pageIndex=1);a=[];if(this.isKeyQueryLoader){if(this._uniqueValueCacheForOtherTypes[this.pageIndex])return a=this._resolveFeaturesFromCache(this._uniqueValueCacheForOtherTypes),b.resolve(a),b;a=this.layerLoaderForKey}else{if(this._uniqueValueCache[this.pageIndex])return a=this._resolveFeaturesFromCache(this._uniqueValueCache),
b.resolve(a),b;a=this.layerLoader}1===this.queryType?a.queryByPage(this.pageIndex).then(e.hitch(this,function(a){if(a){a=a.features||[];var d=a.length;this.showNullValues||(a=this._getNotNullValues(a));this.isKeyQueryLoader?(this._uniqueValueCacheForOtherTypes[this.pageIndex-1]=a,d<this.pageSize&&(this._uniqueValueCacheForOtherTypes[this.pageIndex]=[])):(this._uniqueValueCache[this.pageIndex-1]=a,d<this.pageSize&&(this._uniqueValueCache[this.pageIndex]=[],this._isUniqueValueCacheFinish=!0));0===a.length&&
this.pageIndex--;b.resolve(a)}else b.reject("Can't get features from current layer")}),e.hitch(this,function(a){b.reject(a)})):a.getAllFeatures().then(e.hitch(this,function(a){if(a){a=a.features||[];this.showNullValues||(a=this._getNotNullValues(a));var c=0<a.length?!0:!1;a=this._getDistinctValues(a);a=this.isKeyQueryLoader?this._getAndStoreFeaturesForOtherTypes(a,this._uniqueValueCacheForOtherTypes):this._getAndStoreFeaturesForOtherTypes(a,this._uniqueValueCache);this._isUniqueValueCacheFinish=!0;
b.resolve(c?a:[])}else b.reject("Can't get features from current layer")}),e.hitch(this,function(a){b.reject(a)}));this.pageIndex++;return b},_resolveFeaturesFromCache:function(a){a=a[this.pageIndex];0!==a.length&&this.pageIndex++;return a},_getAndStoreFeaturesForOtherTypes:function(a,b){for(var c=0;c<a.length;c+=this.pageSize)b[parseInt(c/this.pageSize,10)+1]=a.slice(c,c+this.pageSize);for(var d in b)a=parseInt(d,10)+1,b[a]||(b[a]=[]);return b[1]},_getDistinctValues:function(a){var b={},c=[],d;for(d in a){var e=
a[d],f=e.attributes[this.fieldInfo.name];b[f]||(b[f]=f,c.push(e))}return c},_getNotNullValues:function(a){return a=l.filter(a,e.hitch(this,function(a){a=a.attributes[this.fieldInfo.name];return"\x3cNull\x3e"!==a&&null!==a}))}})});