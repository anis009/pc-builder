// import RootLayout from "@/components/Layouts/RootLayout";
// import { Rating } from "@/components/UI/Rating";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import React from "react";

// const ProductDetailsPage = ({ product }) => {
// 	const router = useRouter();

// 	return (
// 		<div>
// 			{product ? (
// 				<div className="">
// 					<div className="flex justify-around p-3 rounded-sm bg-slate-950">
// 						<div className="mb-4 text-center">
// 							<Image
// 								src={product?.image}
// 								width={600}
// 								className="p-4 mx-auto rounded-lg"
// 								height={400}
// 								alt=""
// 							/>
// 						</div>
// 						<div>
// 							<div className="text-left">
// 								<h2 className="mb-2 text-xl font-semibold">
// 									{product?.productName}
// 								</h2>
// 								<p className="mb-2 font-bold text-blue-500">
// 									{product?.category}
// 								</p>
// 								<p className="mb-4 text-gray-700">{product?.description}</p>
// 							</div>
// 							<div className="mb-4">
// 								<h3 className="mb-2 text-lg font-semibold">Key Features:</h3>
// 								<ul className="pl-6 list-disc">
// 									{product?.keyFeatures &&
// 										Object.keys(product?.keyFeatures).map((key) => (
// 											<li key={key}>
// 												<strong>{key}:</strong> {product?.keyFeatures[key]}
// 											</li>
// 										))}
// 								</ul>
// 							</div>
// 							<div className="flex flex-row-reverse justify-between mt-4 text-center">
// 								<Rating rating={product?.averageRating} />
// 								<div className="text-left">
// 									<p className="mb-2 text-xl font-bold ">
// 										Tk: ${product?.price}
// 									</p>
// 									<p className="font-bold text-green-600">{product?.status}</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			) : (
// 				<div className="w-[100vw] h-[100vh] flex justify-center items-center">
// 					<h1>Loading.....</h1>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default ProductDetailsPage;
// ProductDetailsPage.getLayout = function getLayout(page) {
// 	return <RootLayout>{page}</RootLayout>;
// };

// export async function getStaticPaths() {
// 	//! Call an external API endpoint to get products
// 	const res = await fetch("http://127.0.0.1:3000/api/product/");
// 	const products = await res.json();

// 	//! Ensure that products?.data is an array
// 	const productData = products?.data || [];

// 	//! Map the product IDs to the paths array
// 	const paths = productData.map((product) => ({
// 		params: { id: product._id.toString() },
// 	}));

// 	return { paths, fallback: true };
// }

// //! This also gets called at build time
// export async function getStaticProps(context) {
// 	const { params } = context;
// 	// console.log("params~", params);
// 	const res = await fetch(`http://127.0.0.1:3000/api/${params.id}/`);
// 	const product = await res.json();
// 	// console.log("product~", product);
// 	return { props: { product: product?.data } };
// }
