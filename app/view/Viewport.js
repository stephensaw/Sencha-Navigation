Ext.define('SenchaNavigation.view.Viewport',{
	extend: 'Ext.tab.Panel',

	config: {
		tabBarPosition: 'bottom',
		fullscreen: true,
		layout: 'card', //adding this will disable the slide animation
		items: [ { xtype: 'homepanel'} , { xtype: 'aboutpanel'} ]
	}
});