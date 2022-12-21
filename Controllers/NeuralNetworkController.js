
/*
	@desc Runs rgb values as a testing data point.
	@route GET /api/v1/nn/test
	@access Public
*/
const testNetwork = (req, res) => {
	res.json({"Simulated Response": "Hello, world!"});

	// Extract background color rgb data
	// Extract foreground color rgb data

	// Test neural network on it

	// Return result
}

/*
	@desc Runs rgb values as a training data point.
	@route POST /api/v1/nn/train
	@access Public
*/
const trainNetwork = (req, res) => {
	res.json({"Success": "Trained"});

	// Extract background color rgb data
	// Extract foreground color rgb data

	// Train neural network

	// Return result
}

export { testNetwork, trainNetwork };