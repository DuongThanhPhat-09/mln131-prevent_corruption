import { useEffect, useRef } from 'react'

// Gắn ref vào phần tử bao ngoài trang: mọi phần tử con mang class `.reveal`
// sẽ được thêm `.is-visible` khi lọt vào viewport (chạy một lần mỗi phần tử).
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll('.reveal')
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return ref
}
