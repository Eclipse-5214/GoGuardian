//chrome.management.uninstall(
function m() {
    var r='',c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for ( var i = 0; i < 5; i++ ) {
      r += c.charAt(Math.floor(Math.random() * 36));
   }
   return r;
}

if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    location.href = "https://chrome.google.com/webstore" + m();
}else{
  chrome.management.setEnabled("haldlgldplgnggkjaafhelgiaglafanh", false)
}
