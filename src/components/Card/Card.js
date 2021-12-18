import "./Card.css"
import Price from "./Price/Price"

const Card = props => {
	return (
		<section className={"card-box"}>
			<div className={"card-img-container"}>
				<div>
					<img className={"card-img-view-icon"} src="./img/icon-view.svg" alt="Eye Icon" />
				</div>

				<img className={"card-img"} src={props.imageUrl} alt={props.imageAlt} />
			</div>
			
			<h2 className={"card-title"}>{props.title}</h2>
			
			<p className={"card-text"}>{props.description}</p>
			
			<div className={"card-details"}>
				<Price value={props.price} paymentMethod={props.paymentMethod} />
				
				<div className={"card-details-time"}>
					<img src="./img/icon-clock.svg" alt="Clock Icon" />
					<p>{props.daysLeft} days left</p>
				</div>
			</div>

			<hr />

			<div className={"card-author"}>
				<img src={props.authorImg} alt="Author Avatar" />
				<p>Creation of <span>{props.author}</span></p>
			</div>
		</section>
	)
}

export default Card
