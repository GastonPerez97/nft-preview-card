import Card from "./components/Card/Card"
import Attribution from "./components/Attribution/Attribution"

const App = () => {
	return (
		<>
			<main>
				<Card
					title={"Equilibrium #3429"}
					description={"Our Equilibrium collection promotes balance and calm."}
					imageUrl={"/img/image-equilibrium.jpg"}
					imageAlt={"Equilibrium"}
					price={0.041}
					paymentMethod={"ETH"}
					daysLeft={3}
					author={"Jules Wyvern"}
					authorImg={"/img/image-avatar.png"}
				/>
			</main>

			<footer>
				<Attribution />
			</footer>
		</>
	)
}

export default App
