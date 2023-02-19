function formatDate(dateStr) {
  const date = new Date(dateStr)

  const year = date.getFullYear()
  const month = date.toLocaleString("default", { month: "short" })
  const day = date.getDate()

  const formattedDate = `${day} ${month}, ${year}`
  return formattedDate // Output: "14-Feb-2023"
}

export { formatDate }
