/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */
!function(n){"use strict";n((function(){})),n(window).on("load",(function(){}))}(jQuery);

// WhatsApp Widget
(function () {
  var fab = document.getElementById('wa-fab');
  var chatBox = document.getElementById('wa-chat-box');
  var closeBtn = document.getElementById('wa-close-btn');
  var input = document.getElementById('wa-input');
  var sendBtn = document.getElementById('wa-send-btn');
  var phone = '2349166689082';

  fab.addEventListener('click', function () {
    chatBox.classList.toggle('open');
    if (chatBox.classList.contains('open')) {
      input.focus();
    }
  });

  closeBtn.addEventListener('click', function () {
    chatBox.classList.remove('open');
  });

  function sendMessage() {
    var text = input.value.trim();
    if (!text) return;
    var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
    input.value = '';
  }

  sendBtn.addEventListener('click', sendMessage);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') sendMessage();
  });
})();