define([
	'dojo/_base/declare'
	/*=====, 'dstore/Store'=====*/
], function (declare /*=====, Store=====*/) {
	   // return declare(null, {
	return declare(['dstore/src/Tree'], {
		getRecord: function (object) {
		    return this.get(object);
		},
		getAncestors: function (object) {
		    var lista=[];

		    var aggiungiPadre = function(object, lista) {
			if (object.parent) {
			    lista.push(aggiungiPadre(object.parent, lista));
			}
		    };
		    return lista;
                } 
	});
});
