'use babel';

import BaseProvider from "./base-provider.js";
import ecmasnippets from "../json/ecmascript.json";

class EcmaProvider extends BaseProvider
{
	constructor ()
	{
		super(".source.js", ecmasnippets);
	}
}

export default new EcmaProvider;