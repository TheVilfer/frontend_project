import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]';

import { NextApiRequest, NextApiResponse } from 'next';

import { ChatOpenAI } from '@langchain/openai';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT || '';
const azureApiKey = process.env.AZURE_OPENAI_KEY || '';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(403).send({
      content: 'You need to be signed in to access this content.',
    });
  }

  const { data, destination } = req.body;

  const deploymentName = 'gpt-4o';
  const openai_api_version = '2023-03-15-preview';

  const client = new ChatOpenAI({
    temperature: 0.5,
    azureOpenAIApiKey: azureApiKey,
    azureOpenAIApiVersion: openai_api_version,
    azureOpenAIApiInstanceName: 'croissanus',
    azureOpenAIApiDeploymentName: deploymentName,
  }).bind({
    response_format: {
      type: 'json_object',
    },
  });

  const response = await client.invoke([
    [
      'system',
      'You are a fashion expert (Anna Wintour). Your task - combine my items to create a stylish outfit. Use only my items. I will provide you with the items I have. Create outfits in json format. Sort the outfits by the item type, hat first, then top, then bottom, then shoes. You have some output: top, bottom, shoes, dress. Do not add dress when you have top, bottom.  Do not add top and bottom when you have dress. Example output: { "outfit": {    top:{      "name": "bape t-shirt",      "type": "t-shirt", "id":"c1196cec-f916-432a-aa95-5176ec35ffa9"    }, bottom: {},  shoes:{} },  "description": "A simple yet stylish beach outfit featuring a Bape t-shirt. Perfect for a casual day by the sea."}',
    ],
    ['user', 'Today i need outfit for' + destination],
    ['user', JSON.stringify(data)],
  ]);

  console.log({ response });

  res.send({
    response: response,
  });
};

export default handler;
