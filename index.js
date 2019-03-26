#!/usr/bin/env node

require('tre-track-stations/bin')( kvm => {
  const content = kvm && kvm.value && kvm.value.content
  const smtp = content && content.smtp
  if (smtp && smtp.accounts) {
    const accounts = smtp.accounts
    console.log('cat - > /etc/.msmtprc <<EOF')
    for(let a in accounts) {
      console.log('account', a)
      for(let key in accounts[a]) {
        console.log(key, accounts[a][key])
      }
      console.log()
    }
    console.log('EOF')
  }
})
