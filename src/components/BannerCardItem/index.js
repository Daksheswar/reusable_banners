import './index.css'

const BannerDetails = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails

  return (
    <div className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default BannerDetails
