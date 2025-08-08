function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1);
}

const { body } = document;

if (body) {
    let terms = {
        "AI": "Cocaine",
        "artificial intelligence": "Cocaine",
        "Artificial Intelligence": "Cocaine",
        "an AI": "a Cocaine",
        "an artificial intelligence": "a Cocaine",
        "an Artificial Intelligence": "a Cocaine",
        "GPT": "Cocaine",
        "stable diffusion": "cocaine diffusion",
        "Stable Diffusion": "Cocaine Diffusion",
        "transformer": "transCocaine",
        "LLM": "LSD",
        "language model": "language Drug",
        "Language Model": "Language Drug",
        "chatbot": "Cocainebot",
        "ChatGPT": "ChatCocaine",
        "Gemini": "Cocaineni",
        "OpenAI": "CocaineCorp",
        "Anthropic": "CocaineCo",
        "AGI": "Cocaine Bear",
        "artificial general intelligence": "Cocaine Bear",
        "Artificial General Intelligence": "Cocaine Bear",
    };

    // Add matches for capitalized and pluralized versions of terms
    for (const [term, replacement] of Object.entries(terms)) {
        terms[term + "s"] = replacement + "s";

        const capTerm = capitalize(term);

        if (term !== capTerm) {
            const capReplacement = capitalize(replacement);

            terms[capTerm] = capReplacement;
            terms[capTerm + "s"] = capReplacement + "s";
        }
    }

    const regex = new RegExp(Object.keys(terms).join("|"), "g");

    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);

    while (walker.nextNode()) {
        const node = walker.currentNode;

        // Don't substitute text in input boxes
        if (!node.parentNode.isContentEditable) {
            node.textContent = node.textContent.replace(regex, (match) => terms[match]);
        }
    }
}
