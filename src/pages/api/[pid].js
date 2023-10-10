// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
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

		// console.log(req.query.pid);
		const pid = req.query.pid;
		const result = await productsCollection.find().toArray();
		const product = result.find(
			(product) => product._id.toString() === pid.toString()
		);
		// console.log(product);

		const responseData = {
			success: true,
			data: product,
			message: "product retrieve successfully",
		};
		console.log(responseData);
		return res.json(responseData);

		return res.json({
			user: "anis molla",
			id: req.query.pid,
		});
	} catch (err) {
		return res.json(err, {
			status: 500,
		});
	}
}
