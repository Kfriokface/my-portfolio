import mailgun from 'mailgun-js';

export async function handler(event) {
  const { email, message } = JSON.parse(event.body);

  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  });

  const data = {
    from: 'Excited User <contacto@daw.albertosancho.es>',
    to: email,
    subject: 'Hello from Mailgun',
    text: message
  };

  try {
    const body = await mg.messages().send(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', body })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error })
    };
  }
}



exports.handler = async function(event, context) {
  try {
    // Ensure the request body is not empty or undefined
    const body = event.body;
    
    if (!body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Bad Request: Body is missing" }),
      };
    }

    // Try parsing the JSON body
    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Bad Request: Invalid JSON input" }),
      };
    }

    // Proceed with sending email using the parsed data
    // ...

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
