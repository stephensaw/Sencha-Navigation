Ext.application({
	name: 'SenchaNavigation',

	requires: ['SenchaNavigation.view.Viewport'],

	controllers: ['Main'],
	views: ['Home','About','Editor'],

	launch : function() {
		Ext.create('SenchaNavigation.view.Viewport');
	}
});