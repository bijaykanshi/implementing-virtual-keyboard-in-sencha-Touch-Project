Ext.define('NewApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Sencha Touch 2'

                    },
                    {
                        xtype:'textfield',
                        label:'first name'
                    },
                    {
                        xtype:'textfield',
                        label:'last name'
                    }
                ]
            },
            {
                title: 'Get Started',
                iconCls: 'action',
                items:[
                    {
                        xtype:'textfield',
                        label:'first name'
                    },
                    {
                        xtype:'textfield',
                        label:'last name'
                    }
                ]
            }
        ]
    }
});
