async function handler(req, res) { // can be called anything you like
    console.log("Delete-meetup API received:", req.body);
    const response = await fetch('http://localhost:8000/deleteMeeting', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log("Microservice response:", data);
    res.json(data)
  }
  
  export default handler;