import "./Price.css"

const Price = ({ value, paymentMethod }) => {
	return (
		<>
			<div className={"card-price-container"}>
				{paymentMethod === "ETH" && <img src="./img/icon-ethereum.svg" alt="Ethereum Icon" />}
				<p>
					{value} {paymentMethod}
				</p>
			</div>
		</>
	)
}

export default Price
