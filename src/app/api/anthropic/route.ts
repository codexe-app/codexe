import {
  BedrockRuntimeClient,
  InvokeModelWithResponseStreamCommand,
} from '@aws-sdk/client-bedrock-runtime';
import { AWSBedrockAnthropicStream, StreamingTextResponse } from 'ai';
import { experimental_buildAnthropicPrompt } from 'ai/prompts';

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const bedrockClient = new BedrockRuntimeClient({
    serviceId: 'bedrock',
    region: 'us-west-2',
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.SECRET_ACCESS_KEY ?? '',
    },

  });

  // Ask Claude for a streaming chat completion given the prompt
  const bedrockResponse = await bedrockClient.send(
    new InvokeModelWithResponseStreamCommand({
      modelId: 'anthropic.claude-v2',
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify({
        prompt: experimental_buildAnthropicPrompt(messages),
        max_tokens_to_sample: 500,
        temperature: 1,
        top_k: 250,
        top_p: 0.99,
        stop_sequences: ['\n\nHuman:'],
        anthropic_version: 'bedrock-2023-05-31'
      }),
    }),
  );

  // Convert the response into a friendly text-stream
  const stream = AWSBedrockAnthropicStream(bedrockResponse);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}