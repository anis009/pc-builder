import { FaStar } from "react-icons/fa";

export const Rating = ({ rating }) => {
	const maxRating = 5; // Assuming a maximum rating of 5 stars

	return (
		<div className="flex items-center">
			{[...Array(maxRating)].map((_, index) => (
				<FaStar
					key={index}
					className={index < rating ? "text-yellow-500" : "text-gray-300"}
					size={24}
				/>
			))}
			<span className="ml-2 text-lg font-semibold text-yellow-500">
				{`${rating?.toFixed(1)} out fo 5.0`}
			</span>
		</div>
	);
};
