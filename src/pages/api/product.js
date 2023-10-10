// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, ServerApiVersion } from "mongodb";
export default async function handler(req, res) {
	const uri =
		"mongodb+srv://pc-builder:0xE5DwlnMRGpAvhK@cluster0.kik2ly1.mongodb.net/?retryWrites=true&w=majority";

	// Create a MongoClient with a MongoClientOptions object to set the Stable API version
	const client = new MongoClient(uri, {
		serverApi: ServerApiVersion.v1,
	});

	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();

		const productsCollection = client.db("pc-builder").collection("products");

		const result = await productsCollection
			.aggregate([{ $match: {} }, { $sample: { size: 8 } }])
			.toArray();
		const responseData = {
			success: true,
			data: result,
			message: "all products retrieve successfully",
		};
		// console.log(responseData);
		return res.json(responseData);
	} catch (err) {
		return res.json(err, {
			status: 500,
		});
	}
}
