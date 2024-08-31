export default function render({ isH1 = false }) {
	const navList = [
		["nav1", "__URL__"],
		["nav2", "__URL__"],
		["nav3", "__URL__"],
	];
	return (
		<header>
			{isH1 ? <h1>11ty Template</h1> : <div>11ty Template</div>}
			<nav>
				<ul>
					{navList.map((nav) => (
						<li>
							<a href={nav[1]}>{nav[0]}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
