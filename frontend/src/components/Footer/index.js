
export default function Footer() {

  const support = [
    "Support", "Help Center", "DormCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighborhood concern"
  ]
  const hosting = [
    "Hosting", "Dormbnb your home", "DormCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibility", "Dormbnb-friendly apartments"
  ]
  const airbnb = [
    "Dormbnb", "Newsroom", "New features", "Careers", "Investors", "Gift cards", "Dormbnb.org emergency stays"
  ]

  return (
    <>
      <div className="break-line">
        <hr />
      </div>

      <div className="footer-background">

        <div className="footer-container">
          <div className="footer-info">
            {support.map((data, i) => {
              if (i === 0) {
                return (
                  <span className="footer-text-1">
                    {data}
                  </span>
                )
              } else {
                return (
                  <span className="footer-text">
                    {data}
                  </span>
                )
              }
            })}
          </div>
          <div className="footer-info">
            {hosting.map((data, i) => {
              if (i === 0) {
                return (
                  <span className="footer-text-1">
                    {data}
                  </span>
                )
              } else {
                return (
                  <span className="footer-text">
                    {data}
                  </span>
                )
              }
            })}
          </div>
          <div className="footer-info">
            {airbnb.map((data, i) => {
              if (i === 0) {
                return (
                  <span className="footer-text-1">
                    {data}
                  </span>
                )
              } else {
                return (
                  <span className="footer-text">
                    {data}
                  </span>
                )
              }
            })}
          </div>
        </div>
        <div className="break-line-bottom">
          <hr />
        </div>
      </div>
    </>
  )
}
