/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */
!function(n){"use strict";n((function(){})),n(window).on("load",(function(){}))}(jQuery);

// Custom Video Modal for portfolio
(function () {
  var modal = document.getElementById('video-modal');
  var overlay = document.getElementById('video-modal-overlay');
  var closeBtn = document.getElementById('video-modal-close');
  var iframe = document.getElementById('video-modal-iframe');

  // Move modal to direct body child to escape any stacking context
  document.body.appendChild(modal);

  function openModal(src) {
    iframe.src = src;
    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
    iframe.src = '';
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-video-modal]');
    if (link) {
      e.preventDefault();
      openModal(link.getAttribute('href'));
    }
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
})();

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

  // Slide widget up when keyboard opens on mobile (Android)
  var widget = document.getElementById('wa-widget');
  if (window.visualViewport) {
    function onViewportChange() {
      var keyboardHeight = Math.max(0, window.innerHeight - window.visualViewport.height - window.visualViewport.offsetTop);
      widget.style.bottom = (28 + keyboardHeight) + 'px';
    }
    window.visualViewport.addEventListener('resize', onViewportChange);
    window.visualViewport.addEventListener('scroll', onViewportChange);
  }
})();