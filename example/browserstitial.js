function browserStitial(error, data) {
  this.error = error;
  this.data = data;

  var self = this;

  this.createBrowserStitial = function(error, data) {
    var body = document.body,
        bsEl = document.querySelector('#bs-container');

    this.error = error;
    this.data = data;

    if (bsEl) {

      this.destroyBrowserStitial();

    }

    showResult(this.error, this.data);

  }

  this.destroyBrowserStitial = function() {
    var body = document.body,
        bsEl = document.querySelector('#bs-container'),
        bsWrapper = document.querySelector('#bs-wrapper');

    body.removeChild(bsEl);
    body.removeChild(bsWrapper);

  }

  var showResult = function(error, data) {

    createElements(error, data);

  }

  var createElements = function(error, data) {
    var body = document.body;
    var wrapper = crel('div', {'id':'bs-wrapper'});
        bs =
          crel('div', {'id':'bs-container'},
            crel('a', {'class':'bs-close'}),
            crel('h2', {'class':'bs-messagetext'}),
            crel('p', {'class':'bs-messagecontent'}),
            crel('div', {'class':'bs-footer'})
          );

    body.appendChild(wrapper);
    body.appendChild(bs);

    bindElements(error, data);

  }

  var bindElements = function(error, data) {

    if (error) {
      var bsEl = document.querySelector('#bs-container'),
          bsClose = bsEl.querySelector('.bs-close'),
          bsMessageText = bsEl.querySelector('.bs-messagetext'),
          bsMessageContent = bsEl.querySelector('.bs-messagecontent'),
          errorTitle = error,
          errorInfo = data.errorinfo;

      bsMessageText.innerHTML = errorTitle;
      bsMessageContent.innerHTML = errorInfo;

    } else if (data) {
      var bsEl = document.querySelector('#bs-container'),
          bsClose = bsEl.querySelector('.bs-close'),
          bsMessageText = bsEl.querySelector('.bs-messagetext'),
          bsMessageContent = bsEl.querySelector('.bs-messagecontent'),
          messagetext = decodeURIComponent(data.messagetext),
          messagecontent = data.messagecontent,
          appkey = data.appkey,
          campaignid = data.campaignid,
          templateid = data.templateid,
          splitid = data.splitid,
          phash = data.phash,
          errorcode = data.errorcode,
          errorinfo = data.errorinfo;

      bsMessageText.innerHTML = messagetext;
      bsMessageContent.innerHTML = messagecontent;

    }

    bsClose.innerHTML = 'X';

    applyStyleElements(error, data);

  }

  var applyStyleElements = function(error, data) {
    var body = document.body,
        bsWrapper = document.querySelector('#bs-wrapper'),
        bsEl = document.querySelector('#bs-container'),
        bsClose = bsEl.querySelector('.bs-close'),
        bsMessageText = bsEl.querySelector('.bs-messagetext'),
        bsMessageContent = bsEl.querySelector('.bs-messagecontent'),
        bsFooter = bsEl.querySelector('.bs-footer');

    body.style.margin = 0;

    bsWrapper.style.width = '100%';
    bsWrapper.style.height = '100%';
    bsWrapper.style.position = 'absolute';
    bsWrapper.style.zIndex = 9998;

    bsEl.style.width = '600px';
    bsEl.style.height = '400px';
    bsEl.style.position = 'absolute';
    bsEl.style.zIndex = 9999;
    bsEl.style.left = '50%';
    bsEl.style.top = '50%';
    bsEl.style.margin = '-200px 0 0 -300px';
    bsEl.style.padding = '40px 0';
    bsEl.style.boxSizing = 'border-box';
    bsEl.style.backgroundColor = '#dddddd';
    bsEl.style.borderRadius = '10px';
    bsEl.style.border = "1px solid #cccccc";
    bsEl.style.fontSize = '16px';
    bsEl.style.fontFamily = 'Arial';
    bsEl.style.boxShadow = "10px 20px 30px #cccccc";
    bsEl.style.background= '-webkit-linear-gradient(top, #ffffff, #e6e6e6)';

    bsClose.style.position = 'absolute';
    bsClose.style.right = '10px';
    bsClose.style.top = '10px';
    bsClose.style.color = '#cccccc';
    bsClose.style.cursor = 'pointer';
    bsClose.style.fontWeight = 'bold';

    bsFooter.style.height = '54px';
    bsFooter.style.boxSizing = 'border-box';
    bsFooter.style.borderTop = '1px solid #cccccc';

    bsMessageText.style.color = '#ffffff';
    bsMessageText.style.padding = '10px';
    bsMessageText.style.margin = 0;
    bsMessageText.style.fontSize = '1.6em';
    bsMessageText.style.lineHeight = '1em';
    bsMessageText.style.background= '-webkit-linear-gradient(top, #f3a547, #ffc547)';

    bsMessageContent.style.display = 'table-cell';
    bsMessageContent.style.color = '#666666';
    bsMessageContent.style.verticalAlign = 'middle';
    bsMessageContent.style.padding = '10px';
    bsMessageContent.style.margin = 0;
    bsMessageContent.style.fontSize = '1em';
    bsMessageContent.style.lineHeight = '1.4em';
    bsMessageContent.style.height = '240px';

    startListeners();

  }

  var startListeners = function() {
    var bsEl = document.querySelector('#bs-container'),
        bsWrapper = document.querySelector('#bs-wrapper'),
        bsClose = bsEl.querySelector('.bs-close');

    bsClose.addEventListener('click', self.destroyBrowserStitial);

    bsWrapper.addEventListener('click', self.destroyBrowserStitial);

  }

  return this.createBrowserStitial(this.error, this.data);

}