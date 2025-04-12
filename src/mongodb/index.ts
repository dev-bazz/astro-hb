import { MongoClient } from 'mongodb';

export function mongoClient() {
	// Connect to remote cluster or use local cluster
	return new MongoClient(
		'mongodb://localhost:27017/?directConnection=true',
	);
}
