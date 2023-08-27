import { Button, Container, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import TopBar from "./Components/TopBar";

export default function App() {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const [prompt, setPrompt] = useState("");
  const loadCompletion = async () => {
    try {
      let response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: "hello, how are you today?",
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      alert("An unexpected error occured:");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(API_KEY);
  };
  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <Container alignItems={"center"}>
      <TopBar />
      <Input
        placeholder="write prompt here"
        value={prompt}
        onChange={handleChange}
      />
      <Button mt={2} type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
}
