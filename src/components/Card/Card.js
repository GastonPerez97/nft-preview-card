import "./Card.css"

function Card() {
	return (
		<section className={"card-box"}>
			<img className={"card-img"} src="./img/image-equilibrium.jpg" alt="Equilibrium" />
			
			<h2 className={"card-title"}>Equilibrium #3429</h2>
			
			<p className={"card-text"}>Our Equilibrium collection promotes balance and calm.</p>
			
			<div className={"card-details"}>
				<div className={"card-details-price"}>
					<img src="./img/icon-ethereum.svg" alt="Ethereum Icon" />
					<p>0.041 ETH</p>
				</div>
				
				<div className={"card-details-time"}>
					<img src="./img/icon-clock.svg" alt="Clock Icon" />
					<p>3 days left</p>
				</div>
			</div>

			<hr />

			<div className={"card-author"}>
				<img src="./img/image-avatar.png" alt="Author Avatar" />
				<p>Creation of <span>Jules Wyvern</span></p>
			</div>
		</section>
	)
}

export default Card
