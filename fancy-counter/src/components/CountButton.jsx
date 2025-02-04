import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

export default function CountButtons({ setCount, type }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "minus") {
        if (prev === 0) return 0
        return prev - 1
      } else {
        return prev + 1
      }
    })
  }
  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  )
}
