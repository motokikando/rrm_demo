const check_consent = function(elem) {
    if (document.getElementById('consent_checkbox').checked) {
        return true;
    }
    else {
        alert("研究に参加いただける場合は同意するにチェックをお願いいたします。");
        return false;
    }
    return false;
  };

  const consent = {
    type: jsPsychExternalHtml,
    url: "consent_page.html",
    cont_btn: "start",
    check_fn: check_consent
  }