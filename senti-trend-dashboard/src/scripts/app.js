// This file processes sentiment data and renders a chart.

async function fetchSentimentData() {
  try {
      const res = await fetch('http://localhost:8000/trending?limit=1');
      if (!res.ok) {
          throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      processAndRenderData(data);
  } catch (error) {
      console.warn('Error fetching sentiment data, using mock data:', error);
      // Fallback to mock JSON data
      const mockData = {
          AI: { positive: 10, negative: 5, sample_size: 20, timestamp: "2023-10-05T12:34:56.789Z" },
          FathersDay: { positive: 8, negative: 7, sample_size: 20, timestamp: "2023-10-05T12:34:56.789Z" },
          Python: { positive: 12, negative: 3, sample_size: 20, timestamp: "2023-10-05T12:34:56.789Z" },
          Crypto: { positive: 6, negative: 9, sample_size: 20, timestamp: "2023-10-05T12:34:56.789Z" },
          Election: { positive: 7, negative: 8, sample_size: 20, timestamp: "2023-10-05T12:34:56.789Z" }
      };
      processAndRenderData(mockData);
  }
}

function processAndRenderData(data) {
  const topics = Object.keys(data);
  const positiveCounts = topics.map(topic => data[topic].positive);
  const negativeCounts = topics.map(topic => data[topic].negative);

  renderChart(topics, positiveCounts, negativeCounts);
}

function renderChart(topics, positiveCounts, negativeCounts) {
  const ctx = document.getElementById('sentimentChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: topics,
          datasets: [
              {
                  label: 'Positive Sentiment',
                  data: positiveCounts,
                  backgroundColor: '#4CAF50',
              },
              {
                  label: 'Negative Sentiment',
                  data: negativeCounts,
                  backgroundColor: '#F44336',
              }
          ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

// Fetch sentiment data and render the chart
fetchSentimentData();