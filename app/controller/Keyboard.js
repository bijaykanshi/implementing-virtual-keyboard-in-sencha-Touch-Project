/**
 *
 */
Ext.define('NewApp.controller.Keyboard', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.app.Controller'
    ],
    statics: {
        instanceCount: 0
    },
    config: {
        control: {
            textfield: {
                initialize: 'attachToKeyboard',
                focus: 'openKeyboard'
            }
        }
    },
    attachToKeyboard: function(field ,e) {
        /*if(window.location.search.indexOf('keyboard=On') > 0)*/ {
            VirtualKeyboard.attachInput(this.getInputField(field));
        }
    },
    openKeyboard: function(field,e){
        VirtualKeyboard.open(this.getInputField(field));
    },

    getInputField: function(field) {
        if(field.isXType('selectfield')||field.isXType('datepickerfield')||field.isDisabled())
            return null;
        var input;
        if (field.isXType('spinnerfield')) {
            input = field.innerElement.dom.childNodes[1].childNodes[0];
        } else {
            input = field.innerElement.dom.childNodes[0].childNodes[0];
        }
        return input;
    },

    constructor: function() {
        this.callParent(arguments);
        this.self.instanceCount += 1;
    },
    destroy: function() {
        this.callParent(arguments);
        this.self.instanceCount -= 1;
    }
});