(function() {
  
  const url = 'https://www.xinapp.net/wx/api/get.php'
  let content = ''


  function getData() {
    const id = $('#wxid').val()
    $.ajax({
      url: `${url}?id=${id}`,
      method: 'get',
      dataType:'json',
      success: function(res) {
        content = res.data
        const $alert = $('.alert')
        $alert.removeClass('alert-success alert-danger')
        if(res.code == 0) {
          $alert.text('获取成功')
          $alert.addClass('alert-success')
        } else {
          $alert.addClass('alert-danger')
          $alert.text('获取失败')
        }
        $alert.removeClass('d-none')
        setTimeout(() => {
          $alert.addClass('d-none')
        }, 800)
      }
    })
  }

 
  $('#btn-get').on('click', e => {
    getData()
    return false
  })

  $('#btn-add').on('click', e => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        todo: 'insert',
        content
      })
    })
    return false
  })
  
  

})()