const API_URL = 'http://127.0.0.1:8000/api/leads';

export const submitLead = async (data: Record<string, any>) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return null;
  }
};