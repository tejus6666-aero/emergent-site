"""Backend tests for AeroDart Techno Solutions API"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')


class TestContactAPI:
    """Contact form API tests"""

    def test_root_endpoint(self):
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        print(f"Root: {data}")

    def test_post_contact_success(self):
        payload = {"name": "TEST_John Doe", "email": "test@example.com", "phone": "9999999999", "message": "Test inquiry"}
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["message"] == payload["message"]
        assert "id" in data
        assert "created_at" in data
        print(f"Contact created: {data['id']}")

    def test_post_contact_without_phone(self):
        payload = {"name": "TEST_Jane Doe", "email": "jane@example.com", "message": "No phone"}
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["phone"] == ""
        print("Contact without phone: OK")

    def test_post_contact_missing_required_name(self):
        payload = {"email": "test@example.com", "message": "Missing name"}
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422
        print("Missing name validation: OK")

    def test_post_contact_missing_required_email(self):
        payload = {"name": "TEST_User", "message": "Missing email"}
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422
        print("Missing email validation: OK")

    def test_post_contact_missing_required_message(self):
        payload = {"name": "TEST_User", "email": "test@example.com"}
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422
        print("Missing message validation: OK")

    def test_get_contacts(self):
        response = requests.get(f"{BASE_URL}/api/contacts")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"Contacts list: {len(data)} items")

    def test_get_contacts_has_submitted_data(self):
        # Submit a contact first
        payload = {"name": "TEST_Verify", "email": "verify@example.com", "message": "Verify persistence"}
        requests.post(f"{BASE_URL}/api/contact", json=payload)
        # Fetch and verify
        response = requests.get(f"{BASE_URL}/api/contacts")
        assert response.status_code == 200
        contacts = response.json()
        names = [c["name"] for c in contacts]
        assert "TEST_Verify" in names
        print("Data persistence verified")
