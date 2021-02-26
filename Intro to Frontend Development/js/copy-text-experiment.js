/* Code credit to: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp */
function myFunction() {
      /* Get the text field */
        var copyText = document.getElementById("my-skype-name-text-box");
      /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
      /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text*/
          alert ("Copied Megan Crowe's Skype name to clipboard");
    }
