Ext.define('SenchaNavigation.view.Home', {
	extend: 'Ext.navigation.View',
	xtype: 'homepanel',

	config: {
		title: 'Home',
		iconCls: 'home',
		navigationBar: {
			items: [
				{ 
					xtype: 'button',
					text: 'Editor',
					align: 'right'
				}
			]
		},
		items: [ { title: 'Home' } ]
	}
});