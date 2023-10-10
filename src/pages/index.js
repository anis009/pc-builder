import RootLayout from "@/components/Layouts/RootLayout";
import { Product } from "@/components/UI/Product";

const HomePage = ({ products }) => {
	return (
		<div className="px-5">
			<h1 className="my-3 text-3xl font-semibold text-gray-800">
				Latest Products{" "}
			</h1>
			<div className="grid grid-cols-3 gap-4 my-4">
				{products?.data?.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
	// Call an external API endpoint to get posts
	const res = await fetch("http://127.0.0.1:3000/api/product");
	const products = await res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			products,
		},
		revalidate: 5,
	};
}
