chrome.runtime.sendMessage({todo:"showPageAction"})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.todo == 'insert') {
    let content = request.content
    let iframe = $('#ueditor_0').contents().find('body')
    iframe.empty().append(content)
  }
})