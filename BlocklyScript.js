Blockly.Blocks['tempsensor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("もし温度が");
        this.appendValueInput("NAME")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("なら");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['tempval'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0, -40, 85, 1), "NAME");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["<", "<"], ["=", "="], [">", ">"]]), "NAME");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
var workspace = Blockly.inject('blocklyDiv',                                                  // ライブラリに読み込ませる
    { toolbox: document.getElementById('toolbox') });