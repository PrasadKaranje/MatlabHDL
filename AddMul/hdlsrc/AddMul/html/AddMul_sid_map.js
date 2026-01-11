function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["AddMul:13"] = "AddMul:12";
    this.sidParentMap["AddMul:14"] = "AddMul:12";
    this.sidParentMap["AddMul:1"] = "AddMul:12";
    this.sidParentMap["AddMul:2"] = "AddMul:12";
    this.sidParentMap["AddMul:15"] = "AddMul:12";
    this.sidParentMap["AddMul:16"] = "AddMul:12";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
