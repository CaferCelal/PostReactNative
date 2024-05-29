
class PhilanthropistService {
    async savePhilanthropist(data) {
        try {
            const response = await fetch('https://studesk.azurewebsites.net/api/Philanthropist/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to save philanthropist');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error saving philanthropist:', error);
            throw error;
        }
    }
}

export default new PhilanthropistService();