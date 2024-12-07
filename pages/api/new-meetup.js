// /api/new-meetup

async function handler(req, res) {
  const response = await fetch('http://localhost:8000/createMeeting', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
          'Content-Type': 'application/json',
      },
  });
  const data = await response.json();
  res.json(data);
}

export default handler;

