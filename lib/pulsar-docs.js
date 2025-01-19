'use babel';

import EcmaProvider from "./ecma-provider.js";

export default
{
	activate ()
	{
		console.log("Pulsar Docs loaded");
	},

	getProvider()
	{
		return [EcmaProvider];
	},
};
