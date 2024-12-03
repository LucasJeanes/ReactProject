// /api/new-meetup

async function handler(req, res) { // can be called anything you like
  const response = await fetch('http://localhost:8000/readMeeting', {
    method: 'POST',
    body: JSON.stringify({ cmd: 'all' }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
  console.log(JSON.stringify(data))
  res.json(data)
}

export default handler;
