import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SQSClient, ReceiveMessageCommand } from '@aws-sdk/client-sqs';

// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sqs/classes/receivemessagecommand.html

const RetrieveAMessage = () => {
  const creds = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  };

  const client = new SQSClient({ region: 'eu-west-2', credentials: creds });
  const accountId = '394747879996';
  const queueName = 'test-fifo-queue.fifo';
  const queueUrl = `https://sqs.eu-west-2.amazonaws.com/${accountId}/${queueName}`;
  const input = { // ReceiveMessageRequest
    QueueUrl: queueUrl, // required
    AttributeNames: [ // AttributeNameList
      'SentTimestamp'
    ],
    MessageAttributeNames: [ // MessageAttributeNameList
      'All'
    ],
    MaxNumberOfMessages: Number(1),
    // VisibilityTimeout: Number('int'),
    WaitTimeSeconds: Number(20)
    // ReceiveRequestAttemptId: 'STRING_VALUE'
  };
  const command = new ReceiveMessageCommand(input);

  const getStuff = async () => {
    try {
      const response = await client.send(command);
      console.log('Success, ', response);
      return response; // For unit tests.
    } catch (err) {
      console.log('Error', err);
    }
  };

  useEffect(() => {
    getStuff();
  }, []);

  return (
    <>
      <h1>Retrieve message page</h1>
      <Link to="1">Item 1</Link>
    </>
  );
};

export default RetrieveAMessage;
