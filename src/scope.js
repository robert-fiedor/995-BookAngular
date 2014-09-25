/* jshint globalstrict: true */
'use strict';

function Scope() {
	this.$$watchers=[];
}

Scope.prototype.$watch = function(watchFn,listenerFn) {

	var watch = {
		watchFn:watchFn,
		listenerFn:listenerFn
	};

	this.$$watchers.push(watch);
};

Scope.prototype.$digest = function() {
	_.forEach(this.$$watchers, function(watcher){
		watcher.listenerFn();
	});
};
