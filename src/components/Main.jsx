import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Editor } from "./Editor";
import { Local } from "./storage/Local";

export default function Main() {
  const [html, setHtml] = Local("html", "");
  const [css, setCss] = Local("css", "");
  const [js, setjs] = Local("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
  
      `);
    }, 250);
    return () => clearTimeout(timer);
  }, [html, css, js]);
  return (
    <Box>
      <Text textAlign="center" bg="black" p=".5rem" fontSize="2xl" color="gold">
        Mypen
      </Text>
      <Box className="bar top-bar">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onchange={setHtml}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onchange={setCss}
        />
        <Editor
          displayName="JAVASCRIPT"
          language="javascript"
          value={js}
          onchange={setjs}
        />
      </Box>

      <Box
        w="100%"
        h="50vh"
        display="flex"
        border="1px solid black"
        p="1rem"
        overflow="scroll"
      >
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        />
      </Box>
    </Box>
  );
}
