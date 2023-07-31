import './LayoutBlock.css'


export default function LayoutBlock({headersTitle, className, id, children}) {
  return (
    <section className={className}>
      <h2 className={className + '__title'}>{headersTitle}</h2>

      <div className={className + "__content"}>
        {children}
      </div>
    </section>
  )
}