const { default: Link } = require("next/link");
const { Rating } = require("./Rating");
const { default: Image } = require("next/image");

export const Product = ({ product }) => {
	const { averageRating, category, image, price, productName, status } =
		product;
	console.log(product);
	return (
		<div className="">
			<div className="p-3 rounded-sm bg-slate-950">
				<div className="mb-4 text-center">
					<Image
						src={image}
						width={400}
						className="p-4 mx-auto rounded-lg"
						height={200}
						alt=""
					/>
				</div>
				<div className="text-left">
					<h2 className="mb-2 text-xl font-semibold">{productName}</h2>
					<p className="mb-2 font-bold text-blue-500">{category}</p>
					{/* <p className="mb-4 text-gray-700">{description}</p> */}
				</div>

				<div className="flex flex-row-reverse justify-between mt-4 text-center">
					<Rating rating={averageRating} />
					<div className="text-left">
						<p className="mb-2 text-xl font-bold ">Tk: ${price}</p>
						<p className="font-bold text-green-600">{status}</p>
					</div>
				</div>

				<Link
					href={`/products/${product?._id}`}
					className="w-full my-4 btn btn-primary"
				>
					View Details
				</Link>
			</div>
		</div>
	);
};
