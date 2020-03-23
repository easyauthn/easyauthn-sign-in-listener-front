const easyauthn = (() => {
  let statusCb = null
  let instanceRoom = null
  
  const importScript = (scriptPath, callback) => {
    const script = document.createElement('script')
    script.src = scriptPath;
    (document.head || document.documentElement).appendChild(script)
    script.onload = callback
  }
  
  const createSocket = () => {
    const socket = io('https://easyauthn.com', { path: '/ws' })
    socket.emit('instanceRoom', instanceRoom)
    socket.on('instance-status', (status) => {
       statusCb && statusCb(status) 
     })
  }
  
  const init = () => {
    importScript('https://easyauthn.com/sdk/easyauthn-sign-in-listener-front/socket.io.js', createSocket)
  }
  
  return {
    init: (statusRoom) => {
      instanceRoom = statusRoom
      init()
    },
    onStatus: (cb) => { statusCb = cb }
  }
})()