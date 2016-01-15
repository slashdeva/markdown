// syntax highlighting with prism.js
import Prism from 'prismjs-package';
import _ from 'lodash';

// language aliases
const aliases = {
	javascript: 'js',
	csharp: 'c#',
};

_.toPairs(aliases).forEach(p => {
	const lang = Prism.languages[p[0]];
	if (!lang) return;
	const alt = p[1];
	if (_.isString(alt)) {
		Prism.languages[alt] = lang;
	} else if (_.isArray(alt)) {
		alt.forEach(a => {
			Prism.languages[a] = lang;
		});
	}
});

const diagramLangs = {
	seq: 'sequence',
	sequence: 'sequence',
	// TODO flow could be ambigious with flow.js
	flow: 'flowchart',
	flowchart: 'flowchart',
	railroad: 'railroad',
};

function diagram(code, lang) {
	return `<div class="diagram" data-lang="${lang}">${code}</div>`;
}

function codeBlock(html, lang) {
	const className = `language-${lang}`;
	return `<pre class="${className}"><code>${html}</code></pre>`;
}

export default function render(code, language) {
	const lang = (language || '').toLowerCase();
	const diagramLang = diagramLangs[lang];
	if (diagramLang) {
		return diagram(code, diagramLang);
	}
	const grammar = Prism.languages[lang];
	if (grammar) {
		return codeBlock(Prism.highlight(code, grammar, lang));
	}
	// TODO inteligent language detection
	return code;
}
