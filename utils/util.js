const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var fn = num => {
  return new Promise((resolve, reject) => {
    console.log('destion:' + num)
    if (typeof num == 'number') {
      resolve(num)
    } else {
      reject(num)
    }
  })
}

fn(2).then((num) => {
  console.log('first:' + num)
  return num + 1
}).then((num) => {
  console.log('reject')
})

module.exports = {
  formatTime: formatTime
}