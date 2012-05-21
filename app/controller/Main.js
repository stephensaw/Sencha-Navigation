Ext.define('SenchaNavigation.controller.Main',{
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homePanel: 'homepanel',
			editorPanel: 'editorpanel',
			editButton: 'homepanel > container > container > button[text="Editor"]'
		},
		control: {
			homePanel: {
				push: 'onPush',
				pop: 'onPop'
			},
			editButton: {
				tap: 'onEditCommand'
			}
		}
	},
	onEditCommand: function() {
		if (!this.editorPanel)
			editorPanel = Ext.widget('editorpanel');

		this.getHomePanel().push(this.getEditorPanel());
	},
	onPush: function(view, item) {
		var editButton = this.getEditButton();

		if (item.xtype == 'editorpanel')
			this.getEditButton().hide();
		else
			this.getEditButton().show();
	},
	onPop: function(view, item) {
		if (item.xtype == 'editorpanel')
			this.getEditButton().show();
		else
			this.getEditButton().hide();
	}
});