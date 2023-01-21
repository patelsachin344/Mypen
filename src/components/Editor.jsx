import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export const Editor = ({ displayName, language, value, onchange }) => {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onchange(value);
  };
  return (
    <Box className={`container ${open ? "" : "collapsed"}`}>
      <Box className="title">
        {displayName}
        <Button
          className="collapsedBtn"
          type="button"
          onClick={() => setOpen((pre) => !pre)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </Button>
      </Box>

      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Box>
  );
};
