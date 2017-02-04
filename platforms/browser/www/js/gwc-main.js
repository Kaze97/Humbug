/**
 * This file contains the entry point for the gwc app project code. The initialization of
 * the Cordova App is a bit complex, and has been configured to point to the main function
 * in this file.  This lowers the leraning curev for our students.
 *
 * @author lestarch (Michael Starch)
 */
/**
 * Main function entry point for GWC project code. This function runs after the app has
 * been initialized and all resources are prepared for execution.  It is passed the
 * "app" object from cordova in case that is needed.
 * @param app - Cordova app object
 */
function main(app)
{
    //Start your GWC code here
    var button = document.getElementById("change-button");
    button.onclick = change;
}
function change()
{
    var input = document.getElementById("textbox-1").value;
    alert("Input was : " +input);
    document.getElementById("paragraph-1").innerHTML = "あたらし テキスト";
}
var check__wo_shimasu = document.getElementById("checkbox-1").checked;
if (check__wo_shimasu)
{
    alert("チェック を します");
}
else
{
    alert("チェック を しない");
}
