import { getMenuSectionId, menuItems } from "../../config/menuConfig";

const Home = () => {
	return (
		<>
			{menuItems.map((item) => (
				<item.section
					key={`page-section-${item.id}`}
					id={getMenuSectionId(item.id)}
				/>
			))}
		</>
	);
};

export default Home;
