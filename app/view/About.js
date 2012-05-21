Ext.define('SenchaNavigation.view.About', {
	extend: 'Ext.Panel',
	xtype: 'aboutpanel',

	config: {
		title: 'About',
		iconCls: 'settings',
		items: [
			{
				xtype: 'toolbar',
				title: 'About'
			},
			{ html: 'About Panel' }
		]
	}
});