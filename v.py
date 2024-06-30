import vertexai
from vertexai.preview.generative_models import GenerativeModel

project_id ='active-tangent-428009-a6'
location='us-central1'

vertexai.init(project=project_id,location=location)

model = GenerativeModel('gemini-pro')
response = model.generate_content('Aeroplane')

print(response.text)