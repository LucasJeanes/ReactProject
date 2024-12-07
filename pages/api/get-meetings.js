// /api/new-meetup

async function handler(req, res) {
  const response = await fetch('http://localhost:8000/readMeeting', {
      method: 'POST',
      body: JSON.stringify({ cmd: 'all' }),
      headers: {
          'Content-Type': 'application/json',
      },
  });
  const data = await response.json();

  // Ensure category field is included
  const meetingsWithCategory = data.meetings.map(meeting => ({
      ...meeting,
      category: meeting.category || 'General', // Default category if missing
  }));

  res.json({ meetings: meetingsWithCategory });
}

export default handler;
