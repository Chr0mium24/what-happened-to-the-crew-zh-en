import requests
  
url = "https://api.edgefn.net/v1/chat/completions"
headers = {
    "Authorization": "Bearer {apikey}", 
    "Content-Type": "application/json"
}
data = {
    "model": "DeepSeek-V3.2",
    "messages": [{"role": "user", "content": "Hello, how are you?"}]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())