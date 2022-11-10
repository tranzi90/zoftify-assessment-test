const { DateTime } = require("luxon")

const now = DateTime.now()

console.log(now.minus({ days: 1 }).toRelativeCalendar())
console.log(now.minus({ days: 8 }).toRelative({ unit: "weeks" }))
console.log(now.minus({ hours: 2 }).toRelative())

