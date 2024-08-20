import { useEffect, useState } from "react";
import { marked } from "marked";
marked.setOptions({
  breaks: true,
});
const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**

New line breaks
without needing to
add two spaces at the end of each line.
`;

function App() {
  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(initialMarkdown, {
      breaks: true,
    });
  }, []);

  const [text, setText] = useState(initialMarkdown);
  const onChange = (event) => {
     setText(event.target.value);
     document.getElementById("preview").innerHTML = marked(event.target.value, {
      breaks: true,})
  }
  return (
    <div className="container">
        <textarea          placeholder="Enter your Markdown here"
 id="editor" rows={20} style={{width: "50%", padding: "10px"}} cols={50} onChange={(e) => onChange(e)} value={text}>
        </textarea>
        <div 
        id="preview" 
        dangerouslySetInnerHTML={{ __html: marked(text) }} 
      />
    </div>
  );
}

export default App;
