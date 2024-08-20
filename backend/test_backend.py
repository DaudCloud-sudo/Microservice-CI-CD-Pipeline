import unittest
import requests

class TestBackendAPI(unittest.TestCase):

    def test_get_data(self):
        # URL of the API endpoint
        url = "http://localhost:3000/data"
        
        # Send a GET request to the backend API
        response = requests.get(url)
        
        # Check if the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)
        
        # Check if the response contains the expected JSON data
        expected_json = {
            "message": "Hello from the Backend! I am DaudCloud-sudo running at version 2.0"
        }
        self.assertEqual(response.json(), expected_json)

if __name__ == "__main__":
    unittest.main()
