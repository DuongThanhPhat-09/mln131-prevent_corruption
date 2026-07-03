// Khung ảnh tư liệu dùng chung: viền đậm + caption + dòng credit nguồn ảnh.
export default function Figure({ image, variant = '' }) {
  return (
    <figure className={`figure ${variant}`.trim()}>
      <img src={image.src} alt={image.alt} loading="lazy" />
      {(image.caption || image.credit) && (
        <figcaption>
          {image.caption && <span className="figure-caption">{image.caption}</span>}
          {image.credit && <span className="figure-credit mono">{image.credit}</span>}
        </figcaption>
      )}
    </figure>
  )
}
