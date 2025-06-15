import React, { useState } from 'react'

const initialText = "The dog was silent, but I think it remembered something."

const taggedWords = [
  { word: "dog", tag: "canine_health", color: "text-green-400" },
  { word: "silent", tag: "harmony_signal:silence", color: "text-blue-400" },
  { word: "remembered", tag: "memory_trait:episodic", color: "text-purple-400" }
]

export default function FirePromptBuilder() {
  const [selectedTag, setSelectedTag] = useState(null)

  const renderPrompt = () => {
    return initialText.split(" ").map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, "")
      const tagMatch = taggedWords.find(t => t.word.toLowerCase() === cleanWord.toLowerCase())
      return (
        <span
          key={index}
          className={\`mr-1 cursor-pointer \${tagMatch ? tagMatch.color : "text-white"}\`}
          onClick={() => tagMatch && setSelectedTag(tagMatch)}
        >
          {word}
        </span>
      )
    })
  }

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      <div className="w-2/3 p-8">
        <h1 className="text-2xl font-semibold mb-4">🪔 Fire Prompt Builder</h1>
        <div className="p-4 border border-slate-700 rounded-lg bg-slate-800 leading-7">
          {renderPrompt()}
        </div>
        <p className="mt-4 text-slate-400">Click on a highlighted word to view associated schema.</p>
      </div>
      <div className="w-1/3 p-6 border-l border-slate-700 bg-slate-800">
        <h2 className="text-xl font-medium mb-3">🔎 Schema Viewer</h2>
        {selectedTag ? (
          <div className="text-sm">
            <p><strong>Tagged Word:</strong> <span className="text-white">{selectedTag.word}</span></p>
            <p><strong>Schema:</strong> <span className="text-teal-300">{selectedTag.tag}</span></p>
            <div className="mt-3">
              <p className="text-slate-400">(Schema field definitions could appear here.)</p>
              <ul className="mt-2 list-disc list-inside text-slate-300">
                <li><code>field_name</code>: <span className="text-slate-400">string</span></li>
                <li><code>another_field</code>: <span className="text-slate-400">dimension[]</span></li>
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-slate-500">Select a tagged word to view schema metadata.</p>
        )}
      </div>
    </div>
  )
}
