import { Button, Container, Input } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import TopBar from "./Components/TopBar";

export default function App() {
  const API_KEY = "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";
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
  useEffect(() => {
    //loadCompletion();
  }, []);

  return (
    <Container alignItems={"center"}>
      <TopBar />
      <Input placeholder="write here" />
      <Button>Submit</Button>
    </Container>
  );
}
