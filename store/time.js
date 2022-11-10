// const dayjs = require('dayjs')
// dayjs().format()

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')

// const relativeTime = require('dayjs/plugin/relativeTime')
// dayjs.extend(relativeTime)

const milliseconds = 60 * 60 * 1000

let currentDate = new Date()

let time = new Date(currentDate.getTime() - 2 * milliseconds)
let week = currentDate
week.setDate(week.getDate() - 7)

// time = dayjs(time).fromNow()
// week = dayjs(week).fromNow()

console.log(timeAgo.format(time))
console.log(week)