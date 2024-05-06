import { Paper } from '@mantine/core';

export default function Welcome() {
  return (
    <Paper withBorder px='lg' mt='xl'>
        <h2>Welcome to Casabot</h2>
        <p>An AI assistant powered by Anthropic's Claude via AWS Bedrock.  I am using the <a href='https://sdk.vercel.ai/'>Vercel AI SDK</a> for chat backend, but repurposed it to use AWS AppSync/DynamoDB for storing chat history,</p>
    </Paper>
  );
}
