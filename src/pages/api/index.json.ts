export const prerender = true;
import { mongoClient } from '../../mongodb';

export async function GET(r: Request) {
	console.log(r);
	const client = mongoClient();
	try {
		await client.connect();
		const data = await client
			.db('alumni')
			.collection('alumni')
			.find()
			.toArray();
		return new Response(
			JSON.stringify({ message: 'Hello, world!', data }),
		);
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Hello, world!' }));
	}
}
