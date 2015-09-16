// settings initialization functions

setSessionVarsForSettings = function (obj) {
  Session.set("sessionId", obj._id);
  Session.set("orgName", obj.orgName);
  Session.set("akAuth", obj.akAuth);
  Session.set("tagName", obj.tagName);
  Session.set("resourceId", obj.resourceId);
  Session.set("spKey", obj.spKey);
  Session.set("spUrl", obj.spUrl);
  Session.set("bitlyToken", obj.bitlyToken);
};

setSessionVarsForNewSettings = function() {
  Session.set("orgName", "");
  Session.set("akAuth", "");
  Session.set("tagName", "");
  Session.set("resourceId", "");
  Session.set("spKey", "");
  Session.set("spUrl", "");
  Session.set("bitlyToken", "");
 
}