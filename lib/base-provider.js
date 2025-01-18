'use babel';

class BaseProvider
{
	selector = "";
	disableForSelector = '.comment';
	inclusionPriority = 2;
	suggestionPriority = 2;
	excludeLowerPriority = false;
	snippets = Object();

	constructor (selector, snippets)
	{
		this.selector = selector;
		this.snippets = snippets;
	}

	getSuggestions ({ editor, bufferPosition })
	{
		const line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);

		return this.getMatches(line);
	}

	getMatches (line)
	{
		if(!line || line === "")
		{
			return [];
		}

		let suggest = this.snippets.filter(item =>
		{
			if(!line.includes(item.displayText))
			{
				return;
			}

			return item;
		});

		return suggest;
	}
}

export default BaseProvider;