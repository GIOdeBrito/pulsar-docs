'use babel';

class BaseProvider
{
	selector = "";
	//disableForSelector = '.comment';
	inclusionPriority = 2;
	suggestionPriority = 2;
	excludeLowerPriority = false;
	snippets = [];

	constructor (selector, snippets)
	{
		this.selector = selector;
		this.snippets = snippets;
	}

	getSuggestions ({ editor, bufferPosition })
	{
		const line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);

		// Gets the typed word
		const prefix = line.match(/[\w@#_\-\/*$%&]+$/);

		// If no prefix were found, returns empty
		if(!prefix)
		{
			return [];
		}

		let suggested = this.getMatches(prefix[0]);

		return suggested;
	}

	onDidInsertSuggestion({ editor, suggestion })
	{
		/*console.log(editor);*/
		console.log(suggestion);

		let cursorPos = editor.getCursorBufferPosition();

		let snippetLen = suggestion.snippet.length;
		let removeAt = cursorPos.translate([1, -snippetLen]);

		//editor.setTextInBufferRange([removeAt, cursorPos], suggestion.snippet);
	}

	getMatches (prefix)
	{
		if(!prefix || prefix === "")
		{
			return [];
		}

		let suggest = this.snippets.filter(item =>
		{
			if(!item.displayText.includes(prefix))
			{
				return;
			}

			return item;
		});

		return suggest;
	}
}

export default BaseProvider;