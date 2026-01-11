function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Add */
	this.urlHashMap["AddMul:1"] = "Adder_Multiplier_HDL.v:47,48,49";
	/* <S1>/Product */
	this.urlHashMap["AddMul:2"] = "Adder_Multiplier_HDL.v:54";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "AddMul"};
	this.sidHashMap["AddMul"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/A"] = {sid: "AddMul:13"};
	this.sidHashMap["AddMul:13"] = {rtwname: "<S1>/A"};
	this.rtwnameHashMap["<S1>/B"] = {sid: "AddMul:14"};
	this.sidHashMap["AddMul:14"] = {rtwname: "<S1>/B"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "AddMul:1"};
	this.sidHashMap["AddMul:1"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "AddMul:2"};
	this.sidHashMap["AddMul:2"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Sout"] = {sid: "AddMul:15"};
	this.sidHashMap["AddMul:15"] = {rtwname: "<S1>/Sout"};
	this.rtwnameHashMap["<S1>/Pout"] = {sid: "AddMul:16"};
	this.sidHashMap["AddMul:16"] = {rtwname: "<S1>/Pout"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
