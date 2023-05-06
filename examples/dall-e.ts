import { Agent, createFileWriter, sequence } from "@hyv/core";
import { DallEModelAdapter } from "@hyv/openai";

const imageWriter = createFileWriter(`out/dall-e/${Date.now()}`, "base64");

const agent = new Agent(new DallEModelAdapter(), {
	sideEffects: [imageWriter],
});

try {
	await sequence({ images: [{ path: "assets/bar.png", prompt: "red apple" }] }, [agent]);
} catch (error) {
	console.error("Error:", error);
}
