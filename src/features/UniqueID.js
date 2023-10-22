let UUID = 0

export default function UniqueId() {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID
  }
}
